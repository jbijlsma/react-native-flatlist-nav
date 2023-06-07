import { Text, View, StyleSheet } from "react-native";
import { Theme } from "../Theme";

function Header({ scrollY }) {
  const offset = Platform.OS === "ios" ? Theme.sizing.headerHeight : 0;

  return (
    <View
      style={[
        styles.header,
        {
          height: Theme.sizing.headerHeight,
          marginTop: Math.min(0, -scrollY - offset),
        },
      ]}
    >
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    width: "100%",
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
    height: Theme.sizing.headerHeight,
    paddingHorizontal: 40,
  },

  headerText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Header;
