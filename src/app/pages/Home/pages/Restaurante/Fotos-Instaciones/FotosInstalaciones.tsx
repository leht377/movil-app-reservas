// import React from "react";
// import { View, Image, StyleSheet, ScrollView } from "react-native";
// import StyledText from "@/app/components/StyledText";

// const imagenesInstalaciones = [
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   // Agrega más URLs de imágenes
// ];

// const FotosInstalaciones = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <StyledText style={styles.title}>
//         Instalaciones del Restaurante
//       </StyledText>
//       <View style={styles.grid}>
//         {imagenesInstalaciones.map((url, index) => (
//           <View key={index} style={styles.imageContainer}>
//             <Image source={{ uri: url }} style={styles.image} />
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   imageContainer: {
//     width: "48%",
//     height: 150,
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });
// export default FotosInstalaciones;
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import StyledText from "@/app/components/StyledText";
import * as ImagePicker from "expo-image-picker";
import MyIcon from "@/app/components/MyIcon";
import theme from "@/common/theme";

const FotosInstalaciones = () => {
  const [imagenesInstalaciones, setImagenesInstalaciones] = useState([
    { uri: "https://via.placeholder.com/150", description: "Zona de Comidas" },
    { uri: "https://via.placeholder.com/150", description: "Área de Cocina" },
    { uri: "https://via.placeholder.com/150", description: "Barra de Bebidas" },
  ]);

  const elegirImage = async (index: number) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!resultado.canceled) {
      const nuevaImagenes = [...imagenesInstalaciones];
      nuevaImagenes[index] = {
        uri: resultado.assets[0].uri,
        description: nuevaImagenes[index].description,
      };
      setImagenesInstalaciones(nuevaImagenes);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StyledText style={styles.title}>
        Instalaciones del Restaurante
      </StyledText>
      <View style={styles.grid}>
        {imagenesInstalaciones.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <View  style={{borderEndWidth:2}}>
              <StyledText style={styles.description}>
                {item.description}
              </StyledText>
              <TouchableOpacity
                style={styles.buttonChange}
                onPress={() => elegirImage(index)}
              >
                <MyIcon
                  nombre={"cloud-upload-sharp"}
                  tamano={20}
                  color="white"
                />
                <StyledText color="secondary">Cambiar imagen</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  description: {
    textAlign: "center",
    padding: 5,
    fontSize: 14,
  },
  buttonChange: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default FotosInstalaciones;
