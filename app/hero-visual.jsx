'use client';

import { Component, useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import dynamic from 'next/dynamic';

const OrbScene = dynamic(() => import('./orb-scene'), { ssr: false });

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
  const opacity = useSpring({ opacity: ready && playing && !failed ? 1 : 0 });

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPlaying(!preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(sceneRef.current);

    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
    };
  }, []);

  const showScene = ready && playing && !failed;

  return (
    <figure className={`hero-visual${showScene ? ' has-scene' : ''}`} ref={sceneRef}>
      <img src="/work/orb.webp" width="900" height="800" fetchPriority="high" alt="" className="orb-poster" />
      {playing && !failed && (inView || ready) && (
        <animated.div className="orb-live" style={opacity} aria-hidden="true">
          <SceneBoundary onFailure={() => setFailed(true)}>
            <OrbScene active={inView} onReady={() => setReady(true)} />
          </SceneBoundary>
        </animated.div>
      )}
      <figcaption className="visual-caption mono">PROCEDURAL PARTICLE STUDY</figcaption>
      {!failed && (
        <button type="button" className="motion-toggle" onClick={() => setPlaying((value) => !value)}>
          {playing ? 'Pause motion' : 'Play motion'}
        </button>
      )}
    </figure>
  );
}
