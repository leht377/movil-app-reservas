export class RegistrarRestauranteDto {
  private constructor(
    public readonly nombre: string,
    public readonly locacion: string,
    public readonly correo: string,
    public readonly contrasena: string
  ) {}

  static crear(object: { [key: string]: any }): RegistrarRestauranteDto {
    const { nombre, locacion, correo, contrasena } = object;

    if (!nombre) throw new Error("El nombre es requerido")
    if (!locacion) throw new Error("La Dirección es requerido")
    if (!correo) throw new Error("El correo es requerido")
    if (!contrasena) throw new Error("La contraseña es requerido")
    if (contrasena?.length < 5) throw new Error("La contraseña es demasiado corta")

    return new RegistrarRestauranteDto(nombre, locacion, correo, contrasena);
  }
}
