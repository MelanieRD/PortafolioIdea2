import { useSpring, animated } from "@react-spring/web";

export const OpacityDiv = ({ children, durationSec, opacityFrom, opacityTo }) => {
  const [opacity, opacityApi] = useSpring(
    () => ({
      from: { opacity: opacityFrom },
      to: { opacity: opacityTo },
      config: { duration: durationSec },
    }),
    []
  );

  return <animated.div style={opacity}>{children}</animated.div>;
};
