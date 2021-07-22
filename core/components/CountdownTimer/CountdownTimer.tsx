import React, { useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";
import useCountdown from "hooks/useCountdown";
import Props from "./CountdownTimer.type";
import styles from "./styles";

export default function CountdownTimer({ children, duration, isPlaying, onComplete, ariaLabel }: Props) {
  const {
    animatedElapsedTime,
    durationMilliseconds,
  } = useCountdown({
    isPlaying,
    duration,
    onComplete,
  });

  const [timeProps, setTimeProps] = useState({
    remainingTime: duration,
    elapsedTime: 0,
  });

  useEffect(() => {
    const animatedListenerId = animatedElapsedTime.addListener(({ value }) => {
      const elapsedTime = value / 1000;
      setTimeProps({
        remainingTime: Math.ceil(duration - elapsedTime),
        elapsedTime,
      });
    });

    return () => {
      animatedElapsedTime.removeListener(animatedListenerId);
    };
  }, [animatedElapsedTime, duration]);

  return (
    <View
      style={styles.wrapper}
      accessible
      accessibilityLabel={ariaLabel}
    >
      {children !== null && (
        <Animated.View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.time}
        >
          {React.isValidElement(children)
            ? React.cloneElement(React.Children.only(children), timeProps)
            : children(timeProps)}
        </Animated.View>
      )}
    </View>
  );
}
