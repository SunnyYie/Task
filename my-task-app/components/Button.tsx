import { Pressable, View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({
  label,
  theme,
  onPress,
}: {
  label: string;
  theme?: "primary";
  onPress?: () => void;
}) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderRadius: 18,
            borderColor: "#ffd33d",
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonText, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("click")}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    marginHorizontal: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
