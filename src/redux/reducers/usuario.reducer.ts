import { CaseReducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UsuarioEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { usuarioServices } from '../../services/usuario.services'
import { RegistrarClienteDto } from '../../dominio/dtos/registrar-cliente.dto'
import { clienteServices } from '../../services/cliente.services'

interface initialStateInterface {
  usuario: null | UsuarioEntity
  status: Status
  error: null | string
}

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: <initialStateInterface>{
    usuario: null,
    status: Status.IDLE,
    error: null
  },
  reducers: {
    reset_status(state, action) {
      state.status = Status.IDLE
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registrarCliente.pending, (state, action) => {
      state.status = Status.LOADING
    })

    builder.addCase(registrarCliente.rejected, (state, action) => {
      state.status = Status.FAILED
    })

    builder.addCase(registrarCliente.fulfilled, (state, action) => {
      state.usuario = action.payload
      state.status = Status.SUCCEEDED
    })
  }
})

const { reset_status } = usuarioSlice.actions
export default usuarioSlice.reducer

export const autenticarUsuario = createAsyncThunk(
  'usuario/autenticar',
  async (data: { correo: string; contrasena: string }) => {}
)

export const registrarCliente = createAsyncThunk(
  'usuario/registrar_cliente',
  async (data: RegistrarClienteDto) => {
    const usuario = await clienteServices.registrarCliente(data)
    console.log(usuario)
    return usuario
  }
)
