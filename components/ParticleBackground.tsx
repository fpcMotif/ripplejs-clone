
import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <>
      <div className="particle particle-1 absolute top-[20%] left-[15%] w-1 h-1 bg-[rgba(120,219,226,0.6)] rounded-full pointer-events-none"></div>
      <div className="particle particle-2 absolute top-[60%] right-[20%] w-[6px] h-[6px] bg-[rgba(255,119,198,0.4)] rounded-full pointer-events-none"></div>
      <div className="particle particle-3 absolute top-[80%] left-[70%] w-[3px] h-[3px] bg-[rgba(120,119,198,0.7)] rounded-full pointer-events-none"></div>
      <div className="particle particle-4 absolute top-[30%] left-[80%] w-[5px] h-[5px] bg-[rgba(120,219,226,0.3)] rounded-full pointer-events-none"></div>
      <div className="particle particle-5 absolute top-[10%] right-[30%] w-[2px] h-[2px] bg-[rgba(255,119,198,0.8)] rounded-full pointer-events-none"></div>
    </>
  );
};

export default ParticleBackground;
