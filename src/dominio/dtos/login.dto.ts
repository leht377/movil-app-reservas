export class LoginDto {
  private constructor(
    public readonly correo: string,
    public readonly contrasena: string
  ) {}

  static crear(object: { [key: string]: any }): LoginDto {
    const { correo, contrasena } = object

    if (!correo) throw new Error('El correo es requerido')
    if (!contrasena) throw new Error('La contraseña es requerida')
    if (contrasena?.length < 5)
      throw new Error('La contraseña es demasiado corta')

    return new LoginDto(correo, contrasena)
  }
}
