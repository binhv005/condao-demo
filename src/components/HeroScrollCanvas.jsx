import React, { useEffect, useRef } from 'react';
import HeroOverlay from './HeroOverlay';
import './HeroScrollCanvas.css';

const TOTAL_FRAMES = 196;
const LERP_FACTOR = 0.12;

export default function HeroScrollCanvas() {
  const canvasRef = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const overlay3Ref = useRef(null);

  // References for animation state
  const framesRef = useRef([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // Format frame path
  const getFrameUrl = (index) => {
    const padded = String(index + 1).padStart(3, '0');
    return `/frames/ezgif-frame-${padded}.jpg`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    // Draw image maintaining cover aspect ratio
    const drawImageCover = (image) => {
      if (!image || !image.complete || image.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = image.naturalWidth;
      const ih = image.naturalHeight;

      const imgRatio = iw / ih;
      const canvasRatio = cw / ch;

      let rw, rh, ox, oy;
      if (canvasRatio > imgRatio) {
        rw = cw;
        rh = cw / imgRatio;
        ox = 0;
        oy = (ch - rh) / 2;
      } else {
        rh = ch;
        rw = ch * imgRatio;
        ox = (cw - rw) / 2;
        oy = 0;
      }

      ctx.drawImage(image, ox, oy, rw, rh);
    };

    // Render frame with sub-frame blending
    const render = () => {
      const current = currentFrameRef.current;
      const indexA = Math.floor(current);
      const indexB = Math.min(TOTAL_FRAMES - 1, indexA + 1);
      const blend = current - indexA;

      const imgA = framesRef.current[indexA];
      const imgB = framesRef.current[indexB];

      if (imgA && imgA.complete) {
        ctx.globalAlpha = 1.0;
        drawImageCover(imgA);
      }

      if (blend > 0.005 && imgB && imgB.complete) {
        ctx.globalAlpha = blend;
        drawImageCover(imgB);
      }
      ctx.globalAlpha = 1.0;
    };

    // Resize canvas with devicePixelRatio
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      render();
    };

    // Animation Loop with LERP
    const loop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * LERP_FACTOR;
        render();
      } else if (current !== target) {
        currentFrameRef.current = target;
        render();
      }

      const cur = currentFrameRef.current;

      // Layer 1 (Frame 1): Fully visible at start (0-15), smoothly fades out (15-50)
      if (overlay1Ref.current) {
        const progress1 = Math.min(1, Math.max(0, 1 - (cur - 15) / 35));
        overlay1Ref.current.style.opacity = progress1.toString();
        overlay1Ref.current.style.transform = `translateY(${(1 - progress1) * -20}px)`;
        overlay1Ref.current.style.pointerEvents = progress1 >= 0.5 ? 'auto' : 'none';
      }

      // Layer 2 (Frame 90): Fades in at 60-85, peaks at 85-118, then fades out at 118-140
      if (overlay2Ref.current) {
        let progress2 = 0;
        if (cur < 60) {
          progress2 = 0;
        } else if (cur <= 85) {
          progress2 = (cur - 60) / 25;
        } else if (cur <= 118) {
          progress2 = 1;
        } else if (cur <= 140) {
          progress2 = Math.max(0, 1 - (cur - 118) / 22);
        } else {
          progress2 = 0;
        }
        overlay2Ref.current.style.opacity = progress2.toString();
        overlay2Ref.current.style.transform = `translateY(${(1 - progress2) * 20}px)`;
        overlay2Ref.current.style.pointerEvents = progress2 >= 0.5 ? 'auto' : 'none';
      }

      // Layer 3 (Frame 150): Fades in at 135-155, stays active to 196
      if (overlay3Ref.current) {
        const progress3 = Math.min(1, Math.max(0, (cur - 135) / 20));
        overlay3Ref.current.style.opacity = progress3.toString();
        overlay3Ref.current.style.transform = `translateY(${(1 - progress3) * 20}px)`;
        overlay3Ref.current.style.pointerEvents = progress3 >= 0.5 ? 'auto' : 'none';
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    // Scroll Handler
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const fraction = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
      targetFrameRef.current = fraction * (TOTAL_FRAMES - 1);
    };

    // Preload all 196 frames
    framesRef.current = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        // Render first frame immediately once it arrives
        if (i === 0 && currentFrameRef.current === 0) {
          render();
        }
      };

      framesRef.current.push(img);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();
    handleScroll();
    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-scroll-wrapper">
      {/* Fixed Fullscreen Canvas */}
      <div className="canvas-container">
        <canvas ref={canvasRef} id="hero-canvas" />
      </div>

      {/* Cinematic Hero Overlays: Layer 1 (Frame 1), Layer 2 (Frame 90) & Layer 3 (Frame 150) */}
      <HeroOverlay
        overlay1Ref={overlay1Ref}
        overlay2Ref={overlay2Ref}
        overlay3Ref={overlay3Ref}
      />

      {/* Scrollable Track (700vh for granular scrubbing) */}
      <div className="scroll-track" />
    </div>
  );
}
