'use client';

import { useEffect, useRef } from 'react';
import { makeParticles } from './orb-particles';

const { positions } = makeParticles(2200);

export default function OrbCanvas({ active, onReady, onFailure }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) {
      onFailure();
      return;
    }

    let frame;
    let origin;
    let width = 0;
    let height = 0;
    let velocity = 0;
    let pointer = null;
    let notified = false;

    function updatePointer(event) {
      const bounds = canvas.getBoundingClientRect();
      const x = (event.clientX - bounds.left - width / 2) / (height / 2);
      const y = (event.clientY - bounds.top - height / 2) / (height / 2);
      velocity = pointer ? Math.min(1, Math.hypot(x - pointer.x, y - pointer.y) * 9) : 0;
      pointer = { x, y };
    }

    function resetPointer() {
      pointer = null;
    }

    function render(timestamp) {
      origin ??= timestamp;
      const seconds = (timestamp - origin) / 1000;
      const ratio = Math.min(window.devicePixelRatio, 1.5);
      const layoutWidth = canvas.clientWidth;
      const layoutHeight = canvas.clientHeight;

      if (layoutWidth !== width || layoutHeight !== height) {
        width = layoutWidth;
        height = layoutHeight;
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      context.clearRect(0, 0, width, height);
      const rotation = seconds * .32;
      const cosine = Math.cos(rotation);
      const sine = Math.sin(rotation);
      const wave = seconds * 1.45;
      const scale = Math.min(width, height) * .32;
      const pointSize = Math.max(.75, scale / 110);
      velocity *= .91;

      context.fillStyle = '#ddf69a';
      for (let index = 0; index < positions.length; index += 3) {
        const x = positions[index];
        const y = positions[index + 1];
        const z = positions[index + 2];
        const rotatedX = x * cosine + z * sine;
        const depth = z * cosine - x * sine;
        const ripple = 1 + .045 * Math.sin(x * 8 + y * 4 + wave) * Math.sin(z * 7 - wave * .7);
        const perspective = 4 / (4 - depth);
        const distance = pointer ? (rotatedX * .64 - pointer.x) ** 2 + (-y * .64 - pointer.y) ** 2 : Infinity;
        const bulge = 1 + Math.exp(-distance * 8) * velocity * .25;
        const px = width / 2 + rotatedX * scale * perspective * ripple * bulge;
        const py = height / 2 - (y + depth * .17) * scale * perspective * ripple * bulge;
        context.globalAlpha = Math.max(.12, Math.min(.87, .46 + depth * .3));
        context.fillRect(px, py, pointSize * perspective, pointSize * perspective);
      }

      if (!notified && width > 0 && height > 0) {
        notified = true;
        onReady();
      }
      frame = requestAnimationFrame(render);
    }

    canvas.addEventListener('pointermove', updatePointer, { passive: true });
    canvas.addEventListener('pointerleave', resetPointer);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener('pointermove', updatePointer);
      canvas.removeEventListener('pointerleave', resetPointer);
    };
  }, [active, onFailure, onReady]);

  return <canvas ref={canvasRef} className="orb-canvas" />;
}
