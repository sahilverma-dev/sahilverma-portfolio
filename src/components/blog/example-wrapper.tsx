"use client";

import AnimationContainer from "../animated/animated-container";

const ExampleWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <AnimationContainer
      invert
      className="relative w-full bg-white/10 backdrop-blur rounded-xl px-4 py-8 overflow-hidden flex items-center justify-center mb-8"
    >
      {children}
    </AnimationContainer>
  );
};

export default ExampleWrapper;
