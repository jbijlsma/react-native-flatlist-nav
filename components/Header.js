import { Text, View, StyleSheet } from "react-native";
import { Theme } from "../Theme";

function Header({ scrollY }) {
  return (
    <View
      style={[
        styles.header,
        { height: Theme.headerHeight, marginTop: -scrollY },
      ]}
    >
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Header;
