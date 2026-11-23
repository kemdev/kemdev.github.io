'use client';

import { Component, useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const OrbScene = dynamic(() => import('./orb-scene'), { ssr: false });
const OrbCanvas = dynamic(() => import('./orb-canvas'), { ssr: false });

class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFailure();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function HeroVisual() {
  const sceneRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [useCanvas, setUseCanvas] = useState(false);
  const markReady = useCallback(() => setReady(true), []);
  const markFailure = useCallback(() => setFailed(true), []);
  const switchToCanvas = useCallback(() => {
    setReady(false);
    setUseCanvas(true);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stopMotion = (event) => {
      if (event.matches) setPlaying(false);
    };
    preference.addEventListener('change', stopMotion);

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(sceneRef.current);

    return () => {
      observer.disconnect();
      preference.removeEventListener('change', stopMotion);
    };
  }, []);

  useEffect(() => {
    if (!playing || ready || failed || !inView) return;
    const timeout = window.setTimeout(useCanvas ? markFailure : switchToCanvas, 8000);
    return () => window.clearTimeout(timeout);
  }, [playing, ready, failed, inView, useCanvas, markFailure, switchToCanvas]);

  const showScene = ready && playing && !failed;

  return (
    <figure className="hero-visual" ref={sceneRef}>
      <div className={`visual-stage${showScene ? ' has-scene' : ''}`}>
        <span className="visual-crosshair" aria-hidden="true" />
        <img src="/work/orb.webp" width="900" height="800" fetchPriority="high" alt="" className="orb-poster" />
        {playing && !failed && (inView || ready) && (
          <div className="orb-live" aria-hidden="true">
            {useCanvas ? (
              <OrbCanvas active={inView} onReady={markReady} onFailure={markFailure} />
            ) : (
              <SceneBoundary onFailure={switchToCanvas}>
                <OrbScene active={inView} onReady={markReady} />
              </SceneBoundary>
            )}
          </div>
        )}
      </div>
      <div className="visual-footer">
        <figcaption className="visual-caption mono">Particle study <span>· Three.js / TSL</span></figcaption>
        {!failed && (
          <button
            type="button"
            className="motion-toggle"
            onClick={() => {
              if (!playing && !useCanvas && !navigator.gpu) {
                const probe = document.createElement('canvas').getContext('webgl2');
                if (probe) {
                  probe.getExtension('WEBGL_lose_context')?.loseContext();
                } else {
                  setUseCanvas(true);
                }
              }
              setReady(false);
              setPlaying((value) => !value);
            }}
          >
            <span className={playing ? 'pause-icon' : 'play-icon'} aria-hidden="true" />
            {playing ? 'Pause 3D' : 'Play 3D'}
          </button>
        )}
        <span className="sr-only" role="status">
          {failed ? 'Live 3D is unavailable. Showing the particle study still.' : playing && !ready ? 'Loading live 3D' : ''}
        </span>
      </div>
    </figure>
  );
}
