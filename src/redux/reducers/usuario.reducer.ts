import {
  CaseReducer,
  PayloadAction,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import { UsuarioEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { usuarioServices } from '../../services/usuario.services'
import { RegistrarClienteDto } from '../../dominio/dtos/registrar-cliente.dto'
import { clienteServices } from '../../services/cliente.services'
import { LoginDto } from '@/dominio/dtos/login.dto'

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
    },
    set_usuario(state, action: PayloadAction<UsuarioEntity>) {
      state.usuario = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registrarCliente.pending, (state, action) => {
      state.status = Status.LOADING
    })
    builder.addCase(registrarCliente.rejected, (state, action) => {
      state.status = Status.FAILED
      if ((action.payload as any)?.code === 400) {
        state.error = (action.payload as any)?.data?.error
      } else {
        state.error = 'Ocurrio un error desconocido'
      }
    })
    builder.addCase(registrarCliente.fulfilled, (state, action) => {
      state.usuario = action.payload
      state.status = Status.SUCCEEDED
    })
  }
})

export const { reset_status, set_usuario } = usuarioSlice.actions
export default usuarioSlice.reducer

// export const autenticarUsuario = createAsyncThunk(
//   'usuario/autenticar',
//   async (data: LoginDto, { rejectWithValue }) => {
//     try {
//       const usuario = await usuarioServices.atutenticarUsuario(data)
//       return usuario
//     } catch (error) {
//       if (!error.response) {
//         throw error
//       }
//       return rejectWithValue({
//         data: error.response.data,
//         code: error.response?.status
//       })
//     }
//   }
// )

export const registrarCliente = createAsyncThunk(
  'usuario/registrar_cliente',
  async (data: RegistrarClienteDto, { rejectWithValue }) => {
    try {
      const usuario = await clienteServices.registrarCliente(data)
      return usuario
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue({
        data: error.response.data,
        code: error.response?.status
      })
    }
  }
)
