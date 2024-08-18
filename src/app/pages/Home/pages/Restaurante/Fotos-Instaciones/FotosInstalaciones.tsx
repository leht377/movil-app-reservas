import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import StyledText from '@/app/components/StyledText'
import * as ImagePicker from 'expo-image-picker'
import MyIcon from '@/app/components/MyIcon'
import theme from '@/common/theme'

import { useAppSelector } from '@/redux/hooks/useAppSelector'
import useUploadFotoIntalaciones from './hooks/useUploadFotoIntalaciones'
import useEliminarFotoInstalacion from './hooks/useEliminarFotoInstalacion'
import Button from '@/app/components/Button'

const CANTIDAD_DE_FOTOS_PERMITIDAS = 5

const ButtonSelect = ({ onPress, disable }) => {
  return (
    <Button
      containerStyle={[{ flex: 1, marginTop: 5 }]}
      color='tertiary'
      onPress={onPress}
      disabled={disable}
    >
      <MyIcon nombre={'cloud-upload-sharp'} tamano={20} color='white' />
    </Button>
  )
}

const ButtonDelete = ({ onPress, loading, disable }) => {
  return (
    <Button
      containerStyle={[{ flex: 1, marginTop: 5 }]}
      onPress={onPress}
      disabled={disable}
      // loading={loading}
      color='primary'
    >
      <MyIcon nombre={'trash'} tamano={20} color='white' />
    </Button>
  )
}

const ButtonSave = ({ onPress, loading, disable }) => {
  return (
    <Button
      containerStyle={[{ flex: 1, marginTop: 5 }]}
      onPress={onPress}
      disabled={disable}
      loading={loading}
      color='green'
    >
      <MyIcon nombre={'save'} tamano={20} color='white' />
    </Button>
  )
}
type fotoIntalacion = { placeholder: string; uri: string; id: string; enBd: boolean }
const FotosInstalaciones = () => {
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const [imagenesInstalaciones, setImagenesInstalaciones] = useState<fotoIntalacion[]>([])
  const { loading, uploadFotoIntalaciones } = useUploadFotoIntalaciones()
  const { loadingDelete, eliminarFotoIntalaciones } = useEliminarFotoInstalacion()
  const [flat, setFlat] = useState(false)

  const elegirImage = async (index: number) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    })

    if (!resultado.canceled) {
      const nuevaImagenes = [...imagenesInstalaciones]
      nuevaImagenes[index] = {
        id: null,
        uri: resultado.assets[0].uri,
        placeholder: 'https://via.placeholder.com/150',
        enBd: false
      }
      setImagenesInstalaciones(nuevaImagenes)
    }
  }

  const handleEliminarImagen = async (index: number, item: fotoIntalacion) => {
    if (item.enBd) {
      await eliminarFotoIntalaciones(item.id)
    } else {
      setImagenesInstalaciones(imagenesInstalaciones.filter((v, i) => i != index))
    }
  }

  const agregarImagen = () => {
    if (imagenesInstalaciones.length >= CANTIDAD_DE_FOTOS_PERMITIDAS) return
    setImagenesInstalaciones([
      ...imagenesInstalaciones,
      { placeholder: 'https://via.placeholder.com/150', uri: null, id: null, enBd: false }
    ])
  }

  const uploadFoto = async (item: fotoIntalacion) => {
    await uploadFotoIntalaciones({ foto_instalacion: item.uri })
  }

  useEffect(() => {
    setFlat(imagenesInstalaciones.some((f) => !f.id))
  }, [imagenesInstalaciones])

  useEffect(() => {
    if (restaurante) {
      const newState = restaurante.getUrlFotosInstalaciones().map((f) => ({
        placeholder: 'https://via.placeholder.com/150',
        uri: f.uri,
        id: f.id,
        enBd: true
      }))

      setImagenesInstalaciones(newState)
    }
  }, [restaurante])

  return (
    <ScrollView style={styles.container}>
      <StyledText fontSize='body' style={{ marginBottom: 20 }}>
        En este apartado, podrás actualizar y cambiar las fotos de las instalaciones, asegurando que
        la galería refleje siempre la imagen más actual y atractiva del lugar.
      </StyledText>
      <StyledText fontSize='title' style={{ marginBottom: 20 }} fontWeight='bold'>
        Fotos
      </StyledText>
      <View style={styles.grid}>
        {imagenesInstalaciones.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: item.uri ?? item.placeholder }} style={styles.image} />
            <View style={{ flexDirection: 'row', gap: 5 }}>
              {item.uri && !item.enBd && (
                <ButtonSave
                  onPress={() => uploadFoto(item)}
                  loading={loading}
                  disable={loading || loadingDelete}
                />
              )}
              {!item.uri && !item.enBd && (
                <ButtonSelect
                  onPress={() => elegirImage(index)}
                  disable={loading || loadingDelete}
                />
              )}
              {item.uri && (
                <ButtonDelete
                  onPress={() => handleEliminarImagen(index, item)}
                  loading={loadingDelete}
                  disable={loading || loadingDelete}
                />
              )}
            </View>
          </View>
        ))}
        {imagenesInstalaciones.length <= CANTIDAD_DE_FOTOS_PERMITIDAS && !flat && (
          <TouchableOpacity
            onPress={() => agregarImagen()}
            style={[
              styles.imageContainer,
              {
                height: 195,

                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dashed',
                borderWidth: 2
              }
            ]}
          >
            <MyIcon nombre={'add-circle-outline'} tamano={50} color='green' />
            <StyledText fontSize='body' style={{ marginBottom: 20 }}>
              Agregar foto
            </StyledText>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.secondary
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    maxHeight: 200
  },
  image: {
    width: '100%',
    height: 150
  },
  description: {
    textAlign: 'center',
    padding: 5,
    fontSize: 14
  },
  buttonChange: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    gap: 5,
    flex: 1
  }
})

export default FotosInstalaciones
