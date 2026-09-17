import os
import cv2
import numpy as np
from concurrent.futures import ThreadPoolExecutor

def process_single_frame(args):
    src_path, dst_path = args
    img_bgr = cv2.imread(src_path)
    if img_bgr is None:
        return src_path, False

    # 1. Upscale Lanczos4 to 1920x1080 Full HD
    upscaled = cv2.resize(img_bgr, (1920, 1080), interpolation=cv2.INTER_LANCZOS4)

    # 2. LAB: micro-contrast & edge-preserving smoothing
    lab = cv2.cvtColor(upscaled, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)

    clahe = cv2.createCLAHE(clipLimit=1.25, tileGridSize=(8, 8))
    cl = clahe.apply(l)
    filtered_l = cv2.bilateralFilter(cl, d=5, sigmaColor=20, sigmaSpace=20)

    enhanced_lab = cv2.merge((filtered_l, a, b))
    enhanced_bgr = cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2BGR)

    # 3. Color saturation enhancement
    hsv = cv2.cvtColor(enhanced_bgr, cv2.COLOR_BGR2HSV).astype(np.float32)
    hsv[:, :, 1] = np.clip(hsv[:, :, 1] * 1.05, 0, 255)
    enhanced_bgr = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR)

    # 4. High-pass unsharp mask
    blurred = cv2.GaussianBlur(enhanced_bgr, (0, 0), sigmaX=1.1)
    sharpened = cv2.addWeighted(enhanced_bgr, 1.30, blurred, -0.30, 0)

    # 5. Save with maximum quality 96
    cv2.imwrite(dst_path, sharpened, [cv2.IMWRITE_JPEG_QUALITY, 96])
    return dst_path, True

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src_dir = os.path.join(base_dir, 'New folder')
    dst_dir = os.path.join(base_dir, 'public', 'frames')

    os.makedirs(dst_dir, exist_ok=True)

    tasks = []
    for i in range(1, 144):
        name = f'ezgif-frame-{i:03d}.jpg'
        src = os.path.join(src_dir, name)
        dst = os.path.join(dst_dir, name)
        tasks.append((src, dst))

    print(f'Starting enhancement of {len(tasks)} frames...')
    with ThreadPoolExecutor(max_workers=8) as executor:
        results = list(executor.map(process_single_frame, tasks))

    success = sum(1 for _, ok in results if ok)
    print(f'Successfully processed {success}/{len(tasks)} frames to 1080p high resolution.')
