import { PlatoEntity } from '@/dominio/entities';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';

interface Props {
  dishes: PlatoEntity[];
  onSelectedDishIds: (selectedIds: string[]) => void;
}

const MenuSelection: React.FC<Props> = ({ dishes, onSelectedDishIds }) => {
  // Estado para almacenar los IDs de los platos seleccionados
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>([]);

  // Maneja la selección y deselección de platos
  const handleSelectDish = (dishId: string) => {
    setSelectedDishIds((prevSelectedDishIds) => {
      let updatedSelectedDishIds;
      if (prevSelectedDishIds.includes(dishId)) {
        // Deseleccionar el plato si ya está seleccionado
        updatedSelectedDishIds = prevSelectedDishIds.filter((id) => id !== dishId);
      } else {
        // Agregar el plato si no está seleccionado
        updatedSelectedDishIds = [...prevSelectedDishIds, dishId];
      }
      // Notificar al componente padre con los IDs seleccionados actualizados
      onSelectedDishIds(updatedSelectedDishIds);
      return updatedSelectedDishIds;
    });
  };

  // Notificar al componente padre cuando cambian los platos seleccionados;

  // Renderizado de cada plato en la lista
  const renderDishItem = ({ item }: { item: PlatoEntity }) => (
    <TouchableOpacity
      style={[
        styles.dishContainer,
        selectedDishIds.includes(item.getId()) && styles.selectedDish,
      ]}
      onPress={() => handleSelectDish(item.getId())}
    >
      <Image source={{ uri: item.getFotoPrincipal }} style={styles.dishImage} />
      <Text style={styles.dishName}>{item.getNombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.getId().toString()}
        renderItem={renderDishItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        horizontal={true}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};
// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  list: {
    flexGrow: 0,
    maxHeight: '65%',
  },
  dishContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  selectedDish: {
    borderColor: '#5cb85c',
    backgroundColor: '#e6f7e6'
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10
  },
  dishName: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  counter: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#555'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
});

export default MenuSelection;
