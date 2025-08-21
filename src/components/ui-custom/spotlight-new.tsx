import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst,
  gradientSecond,
  gradientThird,
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = true;

  const { firstBg, secondBg, thirdBg } = useMemo(() => {
    // Dark theme defaults (original values)
    const darkDefaults = {
      first:
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
      second:
        "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
      third:
        "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
    } as const;

    // Light theme defaults (slightly stronger/darker tints for visibility on light bg)
    const lightDefaults = {
      first:
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 90%, 35%, .10) 0, hsla(210, 95%, 45%, .05) 50%, hsla(210, 95%, 55%, 0) 80%)",
      second:
        "radial-gradient(50% 50% at 50% 50%, hsla(210, 90%, 35%, .08) 0, hsla(210, 95%, 45%, .04) 80%, transparent 100%)",
      third:
        "radial-gradient(50% 50% at 50% 50%, hsla(210, 90%, 35%, .06) 0, hsla(210, 95%, 45%, .03) 80%, transparent 100%)",
    } as const;

    const themeDefaults = isDark ? darkDefaults : lightDefaults;

    return {
      firstBg: gradientFirst ?? themeDefaults.first,
      secondBg: gradientSecond ?? themeDefaults.second,
      thirdBg: gradientThird ?? themeDefaults.third,
    } as const;
  }, [gradientFirst, gradientSecond, gradientThird, isDark]);

  // Avoid hydration mismatch by rendering after mount
  if (!mounted) return null;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: firstBg,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: secondBg,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: thirdBg,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-0 right-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: firstBg,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: secondBg,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: thirdBg,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};
