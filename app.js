(() => {
  const TOTAL_FRAMES = 143;
  const FOLDER_PATH = 'New folder';
  const LERP_FACTOR = 0.12; // Smoothness factor for scroll damping (0.08 - 0.15 is optimal)

  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d', { alpha: false }); // Optimize performance without alpha channel on canvas background
  const loader = document.getElementById('loader');
  const progressBar = document.getElementById('loader-progress');

  const frames = [];
  let loadedCount = 0;
  let targetFrame = 0;
  let currentFrame = 0;
  let isAnimationRunning = false;

  // Format frame file name (e.g. ezgif-frame-001.jpg)
  function getFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `${FOLDER_PATH}/ezgif-frame-${padded}.jpg`;
  }

  // High-DPI canvas resize
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    render();
  }

  // Draw image with 'cover' aspect ratio logic
  function drawImageCover(image) {
    if (!image || !image.complete || image.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = image.naturalWidth;
    const imgHeight = image.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
  }

  // Render current frame with smooth sub-frame interpolation and blending
  function render() {
    const frameIndexA = Math.floor(currentFrame);
    const frameIndexB = Math.min(TOTAL_FRAMES - 1, frameIndexA + 1);
    const blendProgress = currentFrame - frameIndexA;

    const imageA = frames[frameIndexA];
    const imageB = frames[frameIndexB];

    if (imageA && imageA.complete) {
      ctx.globalAlpha = 1.0;
      drawImageCover(imageA);
    }

    // Blend next frame for silky sub-frame transitions
    if (blendProgress > 0.005 && imageB && imageB.complete) {
      ctx.globalAlpha = blendProgress;
      drawImageCover(imageB);
    }
    ctx.globalAlpha = 1.0;
  }

  // Animation render loop
  function loop() {
    const diff = targetFrame - currentFrame;

    if (Math.abs(diff) > 0.001) {
      currentFrame += diff * LERP_FACTOR;
      render();
    } else if (currentFrame !== targetFrame) {
      currentFrame = targetFrame;
      render();
    }

    requestAnimationFrame(loop);
  }

  // Calculate target frame from vertical scroll position
  function updateScroll() {
    const scrollTrack = document.documentElement;
    const maxScroll = scrollTrack.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || 0;

    const scrollFraction = maxScroll > 0 ? Math.min(1, Math.max(0, scrollPosition / maxScroll)) : 0;
    targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
  }

  // Preload all 143 frames
  function preloadFrames() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }

        // Render first frame immediately once loaded
        if (i === 0 && currentFrame === 0) {
          render();
        }

        // Hide loader when all frames are ready
        if (loadedCount === TOTAL_FRAMES) {
          setTimeout(() => {
            if (loader) {
              loader.classList.add('loaded');
            }
          }, 200);
        }
      };

      img.onerror = () => {
        console.warn(`Failed to load frame: ${getFramePath(i)}`);
        loadedCount++;
      };

      frames.push(img);
    }
  }

  // Initialization
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', updateScroll, { passive: true });

  resizeCanvas();
  preloadFrames();
  updateScroll();
  requestAnimationFrame(loop);
})();
