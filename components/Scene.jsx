import React, { useRef, useState, Suspense } from "react";

import css from "../styles/Canvas.module.css";
import { Canvas, events } from "@react-three/fiber";
// import { Html, OrbitControls, useFrame, Environment } from "@react-three/drei";
import { Html, Loader, ScrollControls, Scroll, Environment, OrthographicCamera } from "@react-three/drei";
import { useControls } from "leva";

export default function Scene({ children, as, className }) {



  return (
    <Canvas
      shadows={true}
      className={css.canvas}
      dpr={[1, 1.5]}
      camera={{ position: [7, 3, 75], fov: 45 }}
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
    // onUpdate={(self) => self.camera.updateProjectionMatrix()}
    >
      {/* <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} /> */}
      <OrthographicCamera position={[1, 1, 1]}>

          <ScrollControls pages={3} html>
            <Scroll>

              <Html as={as} className={className} fullscreen transform>
                {children}
              </Html>
            </Scroll>
          </ScrollControls>
          <Loader />
        <Environment
          preset="city"
          scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
          encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
        />
        {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} /> */}
      </OrthographicCamera>
    </Canvas>
  );
}
