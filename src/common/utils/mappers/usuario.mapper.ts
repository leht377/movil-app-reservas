import { UsuarioEntity } from '../../../dominio/entities'

export class UsuarioMapper {
  static UsuarioEntityFromObject(object: {
    [key: string]: any
  }): UsuarioEntity {
    const { token, usuario } = object
    const { id, correo, rol, rol_usuario_id } = usuario

    return new UsuarioEntity(id, rol, correo, rol_usuario_id, token)
  }
}
