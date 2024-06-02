import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import StyledText from './StyledText'
import theme from '../../common/theme'
import { HashtagEntity, PlatoEntity } from '../../dominio/entities'
interface Props {
  plato?: PlatoEntity // TODO implementar logica para plato
}
const CardPlato: React.FC<Props> = ({ plato }) => {
  return (
    <View style={styles.container}>
      <StyledText fontSize='title' fontWeight='bold'>
        Spagetti
      </StyledText>
      <View style={styles.card}>
        {/* SECTION FOTOS */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://bigoven-res.cloudinary.com/image/upload/w_300,c_fill,h_250/spagetti-120fed.jpg'
            }}
            style={styles.image}
            resizeMode='cover'
          />
          <View style={styles.imageColumn}>
            <Image
              source={{
                uri: 'https://thecozycook.com/wp-content/uploads/2019/08/Bolognese-Sauce.jpg'
              }}
              style={styles.image}
              resizeMode='cover'
            />
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHJjuW8sGlgUa6_5TECh6VPW3BWIPnw4_jgYTYOPKnu_UWWfEkxei61cfDe8lCahPLDw&usqp=CAU'
              }}
              style={styles.image}
              resizeMode='cover'
            />
          </View>
        </View>
        {/* SECTION DATA */}
        <View style={styles.dataContainer}>
          {/* DESCRIPCION */}
          <View style={styles.description}>
            <StyledText align='justify'>
              <StyledText fontWeight='bold'>Descripción: </StyledText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati maiores repellat adipisci dolorem dignissimos, sit quis
              esse? Veritatis laudantium dolorum culpa.
            </StyledText>
          </View>
          {/* HASTAGS */}
          <View style={styles.hashtags}>
            {[
              new HashtagEntity('1', 'piza'),
              new HashtagEntity('2', 'tomate')
            ].map((hashtag) => (
              <StyledText
                key={hashtag.getId()}
                color='primary'
                fontWeight='bold'
              >{`#${hashtag.getNombre()}`}</StyledText>
            ))}
          </View>
          {/* PRECIO */}
          <View>
            <StyledText
              fontWeight='bold'
              fontSize='title'
            >{`$ ${'10000'} COP`}</StyledText>
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
