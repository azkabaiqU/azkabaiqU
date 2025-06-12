import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      lazyLoad={false}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.2}
        uStrength={3.4}
        uDensity={1.2}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0.9}
        positionZ={-0.3}
        rotationX={45}
        rotationY={0}
        rotationZ={0}
        color1="#F6F5F1"
        color2="#ebe6da"
        color3="#F6F5F1"
        reflection={0.1}
        cAzimuthAngle={170}
        cPolarAngle={70}
        cDistance={4.4}
        cameraZoom={1}
        lightType="3d"
        brightness={1.2}
        envPreset="city"
        grain="off"
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
}
