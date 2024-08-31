import Button from '@/app/components/Button'
import FormikMultilineTextInput from '@/app/components/FormikMultilineTextInput'
import FormikTextInput from '@/app/components/FormikTextInput'
import SelectInput from '@/app/components/SelectInput'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import StyledText from '@/app/components/StyledText'
import MyIcon from '@/app/components/MyIcon'
import theme from '@/common/theme'
import MenuRestaurantes from '../../../Cliente/Restaurante-detalle/components/MenuRestaurantes'
import useObtenerCategorias from '../../Adminstrar-Menu/hooks/useObtenerCategorias'
import MultiSelectInput from '@/app/components/MultiSelectInput'
import FilterHastag from '../../../Cliente/Restaurante-detalle/components/FilterHastag/FilterHastag'
import useObtenerHashtag from '../hooks/useObtenerHashtag'
import { string } from 'yup'
import useRegistrarPlato from '../hooks/useRegistrarPlato'
import * as Yup from 'yup'
const FormularioRegistroPlato = () => {
  const { categorias, loading } = useObtenerCategorias()
  const { hashtag, loading: loadingHashtags } = useObtenerHashtag()
  const { registrarPlato, status, error } = useRegistrarPlato()
  const [images, setImages] = useState({
    fotoPrincipal: null,
    foto2: null,
    foto3: null
  })

  const initialValues = {
    nombre: '',
    descripcion: '',
    categorias_ids: [],
    hashtags_ids: [],
    url_foto_principal: '',
    url_fotos_secundarias: []
  }

  const RegistroPlatoSchema = Yup.object().shape({
    nombre: Yup.string()
      .max(50, 'Nombre demasiado largo!')
      .min(3, 'Nombre demasiado corto!')
      .required('El nombre es requerido'),

    descripcion: Yup.string()
      .max(200, 'Descripción demasiado larga!') // Aumenté el límite para permitir descripciones más largas
      .min(2, 'Descripción demasiado corta!')
      .required('La descripción es requerida'),

    categorias_ids: Yup.array()
      .of(Yup.string()) // Asumiendo que `categorias_ids` es un array de strings
      .required('Las categorías son requeridas'),

    hashtags_ids: Yup.array()
      .of(Yup.string()) // Asumiendo que `hashtags_ids` es un array de strings
      .required('Los hashtags son requeridos'),

    url_foto_principal: Yup.string()
      .url('La URL de la foto principal debe ser una URL válida')
      .required('La URL de la foto principal es requerida'),

    url_fotos_secundarias: Yup.array()
      .of(Yup.string().url('Cada URL de foto secundaria debe ser válida'))
      .notRequired() // Opcional, ya que puede que no siempre haya fotos secundarias
  })

  const elegirImagenes = async (key) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    })
    if (!resultado.canceled) {
      setImages((prevImages) => ({
        ...prevImages,
        [key]: resultado.assets[0].uri
      }))
    }
  }

  const handleSubmit = async (values) => {
    try {
      const data = {
        nombre: values.nombre,
        descripcion: values.descripcion,
        categorias_ids: values.categorias_ids,
        hashtags_ids: values.hashtags_ids,
        url_foto_principal: images.fotoPrincipal || '',
        url_fotos_secundarias: [images.foto2, images.foto3].filter(Boolean)
      }

      await registrarPlato(data)
      alert('Plato registrado con éxito!')
    } catch (error) {
      console.error(error)
      alert('Error al registrar el plato')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistroPlatoSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, handleSubmit, errors }) => (
        <View>
          <View style={styles.input}>
            <FormikTextInput
              name='nombre'
              placeholder='Nombre del plato'
              label='Nombre del plato'
            />
            {console.error(errors && errors)}
            {loading ? (
              <StyledText>Cargando categorías...</StyledText>
            ) : (
              <MultiSelectInput
                options={categorias.map((categoria) => ({
                  label: categoria.getNombre(),
                  value: categoria.getId()
                }))}
                selectedValues={values.categorias_ids}
                onSelect={(selectedItems) => setFieldValue('categorias_ids', selectedItems)}
                placeholder='Selecciona varias categorías'
                label='Categorías'
              />
            )}
            {/* <SelectInput
              data={hashtag.map((hashtag) => ({
                label: hashtag.getNombre(), // Ajusta al nombre del campo correspondiente en tu entidad
                value: hashtag.getId(), // Ajusta al ID o campo que prefieras usar como valor
              }))}
              value={values.hashtag} // Utiliza el valor actual de Formik
              placeholder="Selecciona una opción"
              onSelect={(selectedItem) =>
                setFieldValue("hashtag", selectedItem.value)
              }
              label="Hashtag"
            /> */}

            <FormikMultilineTextInput
              name='descripcion'
              placeholder='Descripción'
              label='Descripción'
            />
            <View>
              <StyledText fontWeight='bold' fontSize='title'>
                Hashtag
              </StyledText>
              {loadingHashtags ? (
                <StyledText>Cargando hashtags...</StyledText>
              ) : (
                <FilterHastag
                  hashtags={hashtag}
                  selectedHashtags={values.hashtags_ids}
                  onChange={(selectedItems) => setFieldValue('hashtags_ids', selectedItems)}
                  placeholder='Selecciona hashtags'
                  label='Hashtags'
                />
              )}
              {/* <MenuRestaurantes /> */}
            </View>
          </View>
          <View style={styles.imageContainer}>
            {['fotoPrincipal', 'foto2', 'foto3'].map((key, index) => (
              <View key={key} style={styles.imageSection}>
                <StyledText style={styles.text}>Foto {index + 1}</StyledText>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  {images[key] && (
                    <Image source={{ uri: images[key] }} style={styles.imagePreview} />
                  )}

                  <TouchableOpacity
                    onPress={() => elegirImagenes(key)}
                    style={styles.buttonImageSelect}
                  >
                    <MyIcon nombre='cloud-upload-sharp' tamano={20} color='white' />
                    <StyledText color='secondary'>Seleccionar</StyledText>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.Button}>
            <Button
              color='primary'
              title='Registrar'
              fontWeight='bold'
              onPress={
                handleSubmit as (
                  values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined
                ) => void
              }
            />
          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    gap: 10
  },
  Button: {
    margin: 10,
    paddingBottom: 10
  },
  imageContainer: {
    margin: 10
  },
  imageSection: {
    marginBottom: 20
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.quaternary
  },
  buttonImageSelect: {
    marginTop: 40,
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: '50%'
  },
  text: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
export default FormularioRegistroPlato
