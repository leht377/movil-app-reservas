export class RegistrarClienteDto {
  private constructor(
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly correo: string,
    public readonly contrasena: string
  ) {}

  static crear(object: { [key: string]: any }): RegistrarClienteDto {
    const { nombre, apellido, correo, contrasena } = object

    if (!nombre) throw new Error('El nombre es requerido')
    if (!apellido) throw new Error('El apellido es requerido')
    if (!correo) throw new Error('El correo es requerido')
    if (!contrasena) throw new Error('La contraseña es requerida')
    if (contrasena?.length < 5) throw new Error('La contraseña es demasiado corta')

    return new RegistrarClienteDto(nombre, apellido, correo, contrasena)
  }
}
