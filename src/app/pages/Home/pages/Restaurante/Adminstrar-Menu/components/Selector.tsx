import MyIcon from "@/app/components/MyIcon";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import React, { useState } from "react";
import { Touchable } from "react-native";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export interface SelectorProps {
  titulo: string;
  options: string[];
}

const Selector: React.FC<SelectorProps> = ({ titulo, options }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todo");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "red",
        overflow: "hidden",
        alignSelf: "flex-start",
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: theme.colors.primary,
        }}
      >
        <StyledText color="secondary" fontWeight="bold">
          {titulo}
        </StyledText>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: theme.colors.tertiary,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <StyledText color="secondary" fontWeight="bold">
              {selectedOption}
            </StyledText>

            <MyIcon
              nombre={"caret-down"}
              color={theme.colors.secondary}
              tamano={18}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalContent}>
            <View style={styles.optionsContainer}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.option}
                    onPress={() => handleSelectOption(option)}
                  >
                    <StyledText color="secondary" fontWeight="bold">{option}</StyledText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap:10
  },
  option: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderRadius:9,
    backgroundColor:theme.colors.primary
    
  },
 
});
export default Selector;
