import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "404" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.link}>
          回到首页
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 18,
  },
});
