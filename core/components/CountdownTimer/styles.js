import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: 180,
    height: 180,
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  ariaTime: { height: 0, opacity: 0 },
});

export default styles;
