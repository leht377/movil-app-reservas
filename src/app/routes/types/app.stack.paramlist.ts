import { NavigatorScreenParams } from '@react-navigation/native'
import { AutenticacionStackParamList } from './autenticacion.stack.paramslist'

export type AppStackParamList = {
  Autenticacion: NavigatorScreenParams<AutenticacionStackParamList>
}
