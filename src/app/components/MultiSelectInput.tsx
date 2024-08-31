import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Button,
} from "react-native";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Option {
  label: string;
  value: any;
}

interface MultiSelectInputProps {
  options: Option[];
  selectedValues: any[];
  onSelect: (selectedItems: any[]) => void;
  label?: string;
  placeholder?: string;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  options,
  selectedValues = [],
  onSelect,
  label,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: any) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onSelect(newValues);
  };

  const renderOption = ({ item }: { item: Option }) => {
    const isSelected = selectedValues.includes(item.value);
    return (
      <TouchableOpacity
        style={[styles.optionItem, isSelected && styles.selectedOption]}
        onPress={() => handleSelect(item.value)}
      >
        <StyledText>{item.label}</StyledText>
        {isSelected && (
          <Icon name="check" size={20} color={theme.colors.primary} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {label && (
        <StyledText fontWeight="bold" fontSize="title">
          {label}
        </StyledText>
      )}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selector}
      >
        <StyledText style={styles.selectorText}>
          {selectedValues.length > 0
            ? selectedValues
                .map((val) => options.find((opt) => opt.value === val)?.label)
                .join(", ")
            : placeholder}
        </StyledText>
        <Icon name="chevron-down" size={24} color={theme.colors.primary} />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={renderOption}
            />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    padding: 12,
    borderRadius: 5,
    marginTop: 8,
  },
  selectorText: {
    color: theme.colors.text,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:20,
    paddingTop:20,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 10,
  },
  optionItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#D2D9DF",
  },
});

export default MultiSelectInput;
