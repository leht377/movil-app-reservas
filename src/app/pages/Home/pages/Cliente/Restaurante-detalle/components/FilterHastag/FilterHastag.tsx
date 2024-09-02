import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FilterBadge from "./FilterBadge";
import Modal from "@/app/components/Modal";
import { HashtagEntity } from "@/dominio/entities";
import MyIcon from "@/app/components/MyIcon";
import theme from "@/common/theme";

interface FilterHastagProps {
  hashtags: HashtagEntity[];
  selectedHashtags: string[];
  onChange: (selectedItems: string[]) => void;
  placeholder: string;
  label: string;
}

const ModalFiltros = ({
  isVisible,
  onClose,
  hashtags,
  onSelectHashtag,
}: {
  isVisible: boolean;
  onClose: () => void;
  hashtags: HashtagEntity[];
  onSelectHashtag: (id: string) => void;
}) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <FlatList
          data={hashtags}
          renderItem={({ item }) => (
            <FilterBadge
              title={`# ${item?.getNombre()}`}
              onPress={() => onSelectHashtag(item?.getId())}
              isPlus={true}
            />
          )}
          contentContainerStyle={styles.flatListContainer}
          numColumns={2}
          keyExtractor={(item) => item.getId()}
        />
      </View>
    </Modal>
  );
};

const FilterHastag: React.FC<FilterHastagProps> = ({
  hashtags,
  selectedHashtags,
  onChange,
  placeholder,
  label,
}) => {
  const [availableHashtags, setAvailableHashtags] = useState<HashtagEntity[]>([]);
  const [selectedHashtagsState, setSelectedHashtagsState] = useState<HashtagEntity[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const available = hashtags.filter((h) => !selectedHashtags.includes(h.getId()));
    const selected = hashtags.filter((h) => selectedHashtags.includes(h.getId()));
    setAvailableHashtags(available);
    setSelectedHashtagsState(selected);
    // setAvailableHashtags(hashtags);
    // setSelectedHashtagsState(hashtags.filter((h) => selectedHashtags.includes(h.getId())));
  }, [hashtags, selectedHashtags]);

  const handleAddHashtag = (id: string) => {
    const hashtag = availableHashtags.find((h) => h.getId() === id);
    if (!hashtag) return;
    const updatedSelectedHashtags = [...selectedHashtagsState, hashtag];
    setSelectedHashtagsState(updatedSelectedHashtags);
    setAvailableHashtags(availableHashtags.filter((h) => h.getId() !== id));
    onChange(updatedSelectedHashtags.map((h) => h.getId()));
  };

  const handleDeleteHashtag = (id: string) => {
    const hashtag = selectedHashtagsState.find((h) => h.getId() === id);
    if (!hashtag) return;
    const updatedSelectedHashtags = selectedHashtagsState.filter((h) => h.getId() !== id);
    setSelectedHashtagsState(updatedSelectedHashtags);
    setAvailableHashtags([...availableHashtags, hashtag]);
    onChange(updatedSelectedHashtags.map((h) => h.getId()));
  };

  return (
    <View style={styles.container}>
      {selectedHashtagsState.map((item) => (
        <FilterBadge
          title={`# ${item?.getNombre()}`}
          onPress={() => handleDeleteHashtag(item?.getId())}
          key={item?.getId()}
        />
      ))}

      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <MyIcon
          nombre={"add-circle-sharp"}
          tamano={32}
          color={theme.colors.primary}
        />
      </TouchableWithoutFeedback>

      <ModalFiltros
        isVisible={visible}
        onClose={() => setVisible(false)}
        hashtags={availableHashtags}
        onSelectHashtag={handleAddHashtag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flatListContainer: {
    gap: 5,
  },
});

export default FilterHastag;
