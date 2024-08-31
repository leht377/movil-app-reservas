import React from "react";
import { StyleSheet, View } from "react-native";
import { Modal as ModalReactNative } from "react-native";
import theme from "../../common/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";

const Modal = ({ isVisible, children, onClose }) => {
  return (
    <ModalReactNative
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Pressable onPress={onClose}>
              <MaterialIcons
                name="close"
                color={theme.colors.quaternary}
                size={27}
              />
            </Pressable>
          </View>
          
          {children}
        </View>
      </View>
    </ModalReactNative>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "auto",
    minHeight: "60%",
    maxHeight: 300,
    width: "100%",
    backgroundColor: theme.colors.secondary,
    elevation: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});

export default Modal;
