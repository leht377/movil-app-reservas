import { Dimensions, PixelRatio } from 'react-native'
const pixelFontScale = PixelRatio.getFontScale()

const theme = {
  colors: {
    primary: '#F23A38',
    secondary: '#FEFEFE',
    tertiary: '#4C5B5C',
    quaternary: '#333333',
    bgScreen: '#D9D9D9',
    quinary: '#FED766',
    green: '#51DE79'
  },
  fonts: {
    main: 'OpenSans',
    bold: 'OpenSansBold'
  },
  fontWeigth: {
    normal: '400',
    bold: '700'
  },
  fontSize: {
    bodymini: PixelRatio.roundToNearestPixel(14 / pixelFontScale),
    body: PixelRatio.roundToNearestPixel(16 / pixelFontScale),
    title: PixelRatio.roundToNearestPixel(19 / pixelFontScale)
  }
}

export default theme
