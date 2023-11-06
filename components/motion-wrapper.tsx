import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
};
const MotionWrapper = (props: Props) => {
  const ref = React.useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="w-full relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default MotionWrapper;
