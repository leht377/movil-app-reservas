import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import StyledText from './StyledText'
import theme from '../../common/theme'
import { HashtagEntity, PlatoEntity } from '../../dominio/entities'
interface Props {
  plato: PlatoEntity // TODO implementar logica para plato
}
const CardPlato: React.FC<Props> = ({ plato }) => {
  console.log(JSON.stringify(plato, null, 2))
  return (
    <View style={styles.container}>
      <StyledText fontSize='title' fontWeight='bold'>
        {plato?.getNombre}
      </StyledText>
      <View style={styles.card}>
        {/* SECTION FOTOS */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: plato.getFotoPrincipal
            }}
            style={styles.image}
            resizeMode='cover'
          />
          <View style={styles.imageColumn}>
            {plato.getFotosSecundarias.slice(0, 2).map((i) => {
              return (
                <Image
                  source={{
                    uri: i
                  }}
                  style={styles.image}
                  key={i}
                  resizeMode='cover'
                />
              )
            })}
          </View>
        </View>
        {/* SECTION DATA */}
        <View style={styles.dataContainer}>
          {/* DESCRIPCION */}
          <View style={styles.description}>
            <StyledText align='justify'>
              <StyledText fontWeight='bold'>Descripción: </StyledText>
              {plato && plato?.getDescripcion}
            </StyledText>
          </View>
          {/* HASTAGS */}
          <View style={styles.hashtags}>
            {plato.getHastags.map((hashtag) => (
              <StyledText
                key={hashtag?.getId()}
                color='primary'
                fontWeight='bold'
              >{`#${hashtag?.getNombre()}`}</StyledText>
            ))}
          </View>
          {/* PRECIO */}
          <View>
            <StyledText fontWeight='bold' fontSize='title'>{`$ ${'10000'} COP`}</StyledText>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: theme.colors.secondary,
    minHeight: 120
  },
  card: {
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: theme.colors.quaternary,
    overflow: 'hidden'
  },
  imageContainer: {
    height: 160,
    flexDirection: 'row',
    gap: 2
  },
  image: {
    flex: 1
  },
  imageColumn: {
    flex: 1
  },
  dataContainer: {
    padding: 10,
    gap: 2
  },
  description: {
    flexDirection: 'row'
  },
  hashtags: {
    flexDirection: 'row',
    gap: 5
  }
})

export default CardPlato
