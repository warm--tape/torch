import Torch from "react-native-torch";
import { Platform, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function App() {

  const [torchOn, setTorchOn] = useState(false);
 
  // Toggle the torch when button is pressed
  const handleTorchToggle = async () => {
    if (Platform.OS === "ios") {
      setTorchOn(!torchOn);
      Torch.switchState(this.isTorchOn);
    } else {
      const cameraAllowed = await Torch.requestCameraPermission(
        "Camera Permissions", // dialog title
        "We require camera permissions to use the torch on the back of your phone." // dialog body
        );
        
        if (cameraAllowed) {
        setTorchOn(!torchOn);
        Torch.switchState(this.isTorchOn);
      }
    }
  };

  // Render
  return (
    <View style={styles.container}>
      <Ionicons name={torchOn ? "md-flashlight-outline" : "md-flashlight"}  size={90} color="black" onPress={handleTorchToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
