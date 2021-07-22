import React from "react";
import { StyleSheet, Animated, View, Pressable, Text } from "react-native";
import CountdownTimer from "components/CountdownTimer/CountdownTimer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  /**
   * for Top
   */
  tabs: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 54,
  },
  buttonTab: {
    height: 48,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#eee", // transparent
  },
  buttonTabActive: {
    borderColor: "#F6C134",
  },

  /**
   * for Bottom
   */
  btnGr: {
    marginBottom: "20%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonAction: {
    height: 48,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2%",
    borderRadius: 2,
    backgroundColor: "#C8E138",
  },
  buttonReset: {
    height: 48,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2%",
    borderRadius: 2,
    backgroundColor: "#FFDB56",
  },
});

export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [duration, setDuration] = React.useState(90);
  // 1:ss --- 2:mm --- 3:mm:ss
  const [countdowntimerType, setCountdowntimerType] = React.useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable
          style={[styles.buttonTab, ...(countdowntimerType === 2) ? [styles.buttonTabActive] : []]}
          onPress={() => setCountdowntimerType(2)}
        >
          <Text>mm</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonTab, ...(countdowntimerType === 3) ? [styles.buttonTabActive] : []]}
          onPress={() => setCountdowntimerType(3)}
        >
          <Text>mm:ss</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonTab, ...(countdowntimerType === 1) ? [styles.buttonTabActive] : []]}
          onPress={() => setCountdowntimerType(1)}
        >
          <Text>ss</Text>
        </Pressable>

      </View>

      <View style={styles.main}>
        <CountdownTimer
          isPlaying={isPlaying}
          duration={duration}
        >
          {({ remainingTime }) => (
            <Animated.Text style={{ color: "#004777", fontSize: 48 }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownTimer>
      </View>

      <View style={styles.btnGr}>

        <Pressable
          style={styles.buttonAction}
          // title={isPlaying ? "STOP" : "START | RESUME"}
          onPress={() => setIsPlaying((prev) => !prev)}
        >
          <Text>STOP</Text>
        </Pressable>
        <Pressable
          style={styles.buttonReset}
          onPress={() => {
            console.log("abc");
          }}
        >
          <Text>RESET</Text>
        </Pressable>
      </View>

    </View>
  );
}
