/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ParticlesComponent.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { useCallback, useRef } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const { particlesOptions, className, id } = props;

  const isInitialized = useRef(false);

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized.current) {
      await loadFull(engine);
      isInitialized.current = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;
