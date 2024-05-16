export class UsuarioEntity {
  constructor(
    private readonly id: string,
    private rol: string,
    private correo: string,
    private readonly token: string
  ) {}
  getId(): string {
    return this.id
  }

  getRol(): string {
    return this.rol
  }

  getCorreo(): string {
    return this.correo
  }

  getTokent(): string {
    return this.token
  }
}