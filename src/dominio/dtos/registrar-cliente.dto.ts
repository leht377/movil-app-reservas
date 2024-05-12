export class RegistrarClienteDto {
  private constructor(
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly correo: string,
    public readonly contrasena: string
  ) {}

  static crear(object: { [key: string]: any }): RegistrarClienteDto {
    const { nombre, apellido, correo, contrasena } = object

    // if (!nombre) throw CustomErrors.badRequest('El nombre es requerido')
    // if (!apellido) throw CustomErrors.badRequest('El apellido es requerido')
    // if (!correo) throw CustomErrors.badRequest('El correo es requerido')
    // if (!validators.email.test(correo)) throw CustomErrors.badRequest('Correo no valido')
    // if (!contrasena) throw CustomErrors.badRequest('La contraseña es requerida')
    // if (contrasena?.length < 5) throw CustomErrors.badRequest('La contraseña es demasiado corta')

    return new RegistrarClienteDto(nombre, apellido, correo, contrasena)
  }
}
