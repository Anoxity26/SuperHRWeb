import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay?: number;
  team?: boolean;
}

export const Reveal: React.FC<Props> = ({
  children,
  delay = 0,
  team = false,
}) => {
  const divRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    let lastY = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;
        const isScrollingDown = currentY < lastY;
        lastY = currentY;

        if (entry.isIntersecting) {
          if (team) {
            controls.start("visibleTeam");
          } else {
            controls.start("visible");
          }
        } else {
          if (team) {
            controls.start(isScrollingDown ? "hiddenUpTeam" : "hiddenDownTeam");
          }
          //  else {
          //   controls.start(isScrollingDown ? "hiddenUp" : "hiddenDown");
          // }
        }
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      className="mb-4"
      variants={{
        hiddenDown: {
          opacity: 0.5,
          y: 30,
        },
        hiddenUp: {
          opacity: 0.5,
          y: -30,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
        hiddenDownTeam: {
          opacity: 0.4,
          scale: 0.9,
        },
        hiddenUpTeam: {
          opacity: 0.4,
          scale: 0.9,
        },
        visibleTeam: {
          opacity: 1,
          scale: 1,
        },
      }}
      initial="hiddenDown"
      animate={controls}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
    >
      {children}
    </motion.div>
  );
};
