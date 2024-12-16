import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

export default function ImageViewer({
  imageSource,
  selectedImage,
}: {
  imageSource: ImageSource;
  selectedImage?: string;
}) {
  return (
    <Image
      source={selectedImage ? { uri: selectedImage } : imageSource}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
