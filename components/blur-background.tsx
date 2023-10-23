import React from "react";
import { Image } from "@nextui-org/image";

const BlurBackground = () => {
  return (
    <>
      <div className="fixed -right-[60%] -top-[10%] z-0 rotate-12 opacity-70 2xl:-right-[40%] 2xl:-top-[60%]">
        <Image
          alt="docs right"
          src="/docs-right.png"
          isBlurred
          isZoomed
          className="relative z-10 rounded-large opacity-0 shadow-none shadow-black/5 !duration-300 transition-transform-opacity data-[loaded=true]:opacity-100 motion-reduce:transition-none"
        />
      </div>
      <div className="fixed -bottom-[40%] -left-[20%] z-0 opacity-70">
        <Image
          alt="docs left"
          src="/docs-left.png"
          isBlurred
          isZoomed
          className="relative z-10 rounded-large opacity-0 shadow-none shadow-black/5 !duration-300 transition-transform-opacity data-[loaded=true]:opacity-100 motion-reduce:transition-none"
        />
      </div>
    </>
  );
};

export default BlurBackground;
