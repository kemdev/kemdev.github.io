'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring } from '@react-spring/web';
import { useEffect, useMemo, useRef } from 'react';
import {
  BufferAttribute, BufferGeometry, PointsNodeMaterial, Vector3, WebGPURenderer,
} from 'three/webgpu';
import { attribute, exp, mix, positionLocal, sin, uniform } from 'three/tsl';

const goldenAngle = Math.PI * (3 - Math.sqrt(5));

function makeGeometry() {
  const count = 10500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const phi = goldenAngle * i;
    const x = Math.cos(phi) * ring;
    const z = Math.sin(phi) * ring;
    const warp = 1.13 + .11 * Math.sin(5 * x + 3 * y) * Math.cos(5 * z - 2 * y);
    const light = .57 + .43 * Math.sin(8 * x - 5 * y + 4 * z) ** 2;
    positions.set([x * warp, y * warp, z * warp], i * 3);
    colors.set([(.19 + .43 * light), (.51 + .47 * light), (.27 + .33 * (1 - light))], i * 3);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('particleColor', new BufferAttribute(colors, 3));
  return geometry;
}

function Particles({ onReady, active }) {
  const orb = useRef(null);
  const notified = useRef(false);
  const previous = useRef(null);
  const motion = useRef(0);
  const latestOnReady = useRef(onReady);
  const [spring, springApi] = useSpring(() => ({
    impulse: 0,
    config: { tension: 130, friction: 25 },
  }));
  const { geometry, material, angle, impulse, cursor } = useMemo(() => {
    const angle = uniform(0);
    const impulse = uniform(0);
    const cursor = uniform(new Vector3(0, 0, 1));
    const material = new PointsNodeMaterial();
    const direction = positionLocal.normalize();
    const wave = sin(positionLocal.x.mul(9).add(positionLocal.y.mul(4)).add(angle))
      .mul(sin(positionLocal.z.mul(7).sub(angle.mul(.7))));
    const influence = exp(direction.sub(cursor).length().pow(2).mul(-3.7));
    material.positionNode = positionLocal.add(direction.mul(wave.mul(.055).add(influence.mul(impulse).mul(.26))));
    material.colorNode = attribute('particleColor', 'vec3').mul(mix(.46, 1.03, positionLocal.z.mul(.4).add(.5)));
    return { geometry: makeGeometry(), material, angle, impulse, cursor };
  }, []);

  useEffect(() => {
    latestOnReady.current = onReady;
  }, [onReady]);

  useEffect(() => {
    if (orb.current) material.needsUpdate = true;
  });

  useEffect(() => () => {
    geometry.dispose();
    material.dispose();
  }, [geometry, material]);

  useFrame(({ pointer, clock }, elapsed) => {
    if (!active) return;
    const now = clock.elapsedTime;
    const prior = previous.current;
    if (prior && now - prior.time > .008) {
      const moved = Math.hypot(pointer.x - prior.x, pointer.y - prior.y);
      motion.current = moved > .0001 ? Math.min(1, moved / Math.max(now - prior.time, .016) * .25) : motion.current * .86;
      springApi.start({ impulse: motion.current });
    }
    previous.current = { x: pointer.x, y: pointer.y, time: now };
    angle.value += Math.min(elapsed, .04) * 1.4;
    impulse.value = spring.impulse.get();
    cursor.value.set(pointer.x * .92, pointer.y * .92, .8).normalize();
    orb.current.rotation.y += Math.min(elapsed, .04) * .18;
    orb.current.rotation.x = -.19;
    if (!notified.current) {
      notified.current = true;
      requestAnimationFrame(() => latestOnReady.current());
    }
  });

  return <points ref={orb} geometry={geometry} material={material} frustumCulled={false} />;
}

async function createRenderer({ canvas }) {
  const renderer = new WebGPURenderer({ canvas, alpha: true, antialias: true });
  await renderer.init();
  return renderer;
}

export default function OrbScene({ onReady, active }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.7], fov: 42 }}
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      gl={createRenderer}
    >
      <Particles onReady={onReady} active={active} />
    </Canvas>
  );
}
