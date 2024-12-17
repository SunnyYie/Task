import { GestureHandlerRootView } from "react-native-gesture-handler";
import EmojiSticker from "@/components/EmojiSticker";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet } from "react-native";
import EmojiList from "@/components/EmojiList";
import { type ImageSource } from "expo-image";
import Button from "@/components/Button";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!res.canceled) {
      setSelectedImage(res.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("没有选择图片");
    }
  };

  const onReset = () => {};
  const onSave = () => {};
  const AddSticker = () => {
    setShowModal(true);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {selectedEmoji && (
          <EmojiSticker stickerSource={selectedEmoji} imageSize={40} />
        )}
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton label="刷新" icon="refresh" onPress={onReset} />
            <CircleButton onPress={AddSticker} />
            <IconButton label="保存" icon="save-alt" onPress={onSave} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label="选择图片" theme="primary" onPress={pickImageAsync} />
          <Button
            label="使用这张图片"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

      <EmojiPicker isVisible={showModal} onClose={() => setShowModal(false)}>
        <EmojiList
          onSelect={(item) => setSelectedEmoji(item)}
          onCloseModal={() => setShowModal(false)}
        />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
