import { CaseReducer, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UsuarioEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { usuarioServices } from '../../services/usuario.services'
import { RegistrarClienteDto } from '../../dominio/dtos/registrar-cliente.dto'
import { clienteServices } from '../../services/cliente.services'
import { LoginDto } from '@/dominio/dtos/login.dto'
import { RegistrarRestauranteDto } from '@/dominio/dtos/registrat-restaurante.dtos'
import { restauranteServices } from '@/services/restaurante.services'

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
    reset_status(state) {
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

    builder.addCase(registrarRestaurante.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(registrarRestaurante.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED
      state.usuario = action.payload
    })

    builder.addCase(registrarRestaurante.rejected, (state, action) => {
      state.status = Status.FAILED
      if ((action.payload as any)?.code === 400) {
        state.error = (action.payload as any)?.data?.error
      } else {
        state.error = 'Ocurrio un error desconocido'
      }
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

export const registrarRestaurante = createAsyncThunk(
  'restaurante/registrar_restaurante',
  async (data: RegistrarRestauranteDto, { rejectWithValue }) => {
    try {
      const restaurante = await restauranteServices.registrarRestaurante(data)
      return restaurante
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue({
        data: error.response?.data,
        code: error.response?.status
      })
    }
  }
)
