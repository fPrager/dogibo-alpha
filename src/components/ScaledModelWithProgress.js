import React, { Suspense } from 'react';

import { Model, SceneLoaderContextProvider } from 'react-babylonjs';

const ScaledModelWithProgress = ({
  center, rootUrl,
  scaleTo, sceneFilename, onModelLoaded,
}) => (
  <SceneLoaderContextProvider>
    <Suspense fallback="Loading...">
      <Model
        reportProgress
        position={center}
        rootUrl={rootUrl}
        sceneFilename={sceneFilename}
        scaleToDimension={scaleTo}
        onModelLoaded={onModelLoaded}
      />
    </Suspense>
  </SceneLoaderContextProvider>
);

export default ScaledModelWithProgress;
