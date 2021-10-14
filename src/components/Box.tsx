import {
  useRef, useState, useEffect,
} from 'react';

import {
  Engine, Scene, ILoadedModel,
} from 'react-babylonjs';
import {
  Vector3, Color4,
} from '@babylonjs/core';

import '@babylonjs/loaders';

import AppStage from '../utils/AppStage';

import styles from './Box.module.scss';
import ScaledModelWithProgress from './ScaledModelWithProgress';

interface BoxProps {
  stage: AppStage,
  setStage: Function,
}

const Box: React.FC<BoxProps> = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const resize = () => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }
  };

  useEffect(() => {
    resize();
    if (window) { window.onresize = resize; }
  }, []);

  const onModelLoaded = (model: ILoadedModel) => {
    const { animationGroups } = model;
    animationGroups?.forEach((ani) => {
      ani.play();
      // eslint-disable-next-line no-param-reassign
      ani.loopAnimation = true;
      if (ani.name !== 'Armature|Take 001|BaseLayer') {
        ani.stop();
      }
    });
  };

  return (
    <div className={styles.box} ref={ref}>
      <Engine height={height} width={width} antialias adaptToDeviceRatio canvasId="scene">
        <Scene clearColor={new Color4(0, 0, 0, 0)}>
          <arcRotateCamera
            name="camera1"
            target={new Vector3(0, 1, 0)}
            alpha={Math.PI / 2.6}
            beta={Math.PI * 0.4}
            radius={8}
            upperRadiusLimit={10}
            lowerRadiusLimit={6}
            panningSensibility={0}
            wheelPrecision={1000}
            angularSensibilityX={5000}
            angularSensibilityY={10000}
          />
          <hemisphericLight name="light1" intensity={1.4} direction={Vector3.Up()} />
          <ScaledModelWithProgress
            rootUrl="/glb/"
            sceneFilename="chest.glb"
            scaleTo={2}
            center={Vector3.Zero()}
            onModelLoaded={onModelLoaded}
          />
        </Scene>
      </Engine>
    </div>
  );
};

export default Box;
