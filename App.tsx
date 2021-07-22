import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/Home";

export default function App() {
  // const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor="white" />
      <HomeScreen />
    </SafeAreaView>
    // eslint-disable-next-line react/jsx-filename-extension
    // <View style={styles.container}>
    //   <CountdownTimer
    //     isPlaying={isPlaying}
    //     duration={90}
    //   >
    //     {({ remainingTime }) => (
    //       <Animated.Text style={{ color: "#004777", fontSize: 48 }}>
    //         {remainingTime}
    //       </Animated.Text>
    //     )}
    //   </CountdownTimer>
    //   <View style={{
    //     // flex: 1,
    //     marginTop: 30,
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "flex-start",
    //     backgroundColor: "#fff" }}
    //   >

  //     <Button title={isPlaying ? "STOP" : "START"} onPress={() => setIsPlaying((prev) => !prev)} />
  //     <Button
  //       title="RESET"
  //       onPress={() => {
  //         console.log("abc");
  //       }}
  //     />
  //   </View>

  // </View>
  );
}
