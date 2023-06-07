import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingTop: 12,
    paddingBottom: 32,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
});

export default Footer;
