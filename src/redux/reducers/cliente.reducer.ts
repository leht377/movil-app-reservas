import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Status from '../../common/utils/enums/status_asynctrunck'
import { ClienteEntity } from '../../dominio/entities'
import { reservaServices } from '@/services/reserva.services'
import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'
import { AxiosError } from 'axios'
import { CancelarReservaClienteDto } from '@/dominio/dtos/cancelar-reserva-cliente.dto'
import { clienteServices } from '@/services/cliente.services'

interface initialStateInterface {
  cliente: ClienteEntity | null
  status_registrar_cliente: Status
  status_reserva: Status
  status_cancelar_reserva: Status
  error: string
}

const clienteSlice = createSlice({
  name: 'cliente',
  initialState: <initialStateInterface>{
    cliente: null,
    status_registrar_cliente: Status.IDLE,
    status_cancelar_reserva: Status.IDLE,
    error: null,
    status_reserva: Status.IDLE
  },
  reducers: {
    set_cliente(state, action: PayloadAction<ClienteEntity>) {
      state.cliente = action.payload
    },
    reset_status_reserva(state) {
      state.status_reserva = Status.IDLE
    },
    reset_status_cancelar_reserva(state) {
      state.status_cancelar_reserva = Status.IDLE
    }
    // agregar_restaurante_favorito(state, action: PayloadAction<string>) {
    //   const idRestaurante = action.payload
    //   const restauranteFavoritosState = state.cliente?.getRestaurantesFavoritosIds() || []
    //   const newStateRestaurantesFavoritos = [
    //     ...new Set([...restauranteFavoritosState, idRestaurante])
    //   ]

    //   const clienteActualizado = new ClienteEntity(
    //     state.cliente.getId(),
    //     state.cliente.getUsuarioId(),
    //     state.cliente.getNombre(),
    //     state.cliente.getApellido(),
    //     state.cliente.getRol(),
    //     state.cliente.getCorreo(),
    //     newStateRestaurantesFavoritos
    //   )

    //   state.cliente = clienteActualizado
    // },
    // eliminar_restaurante_favorito(state, action: PayloadAction<string>) {
    //   const idRestaurantePayload = action.payload
    //   const restauranteFavoritosState = state.cliente?.getRestaurantesFavoritosIds() || []
    //   const newStateRestaurantesFavoritos = restauranteFavoritosState?.filter(
    //     (id) => id != idRestaurantePayload
    //   )

    //   const clienteActualizado = new ClienteEntity(
    //     state.cliente.getId(),
    //     state.cliente.getUsuarioId(),
    //     state.cliente.getNombre(),
    //     state.cliente.getApellido(),
    //     state.cliente.getRol(),
    //     state.cliente.getCorreo(),
    //     newStateRestaurantesFavoritos
    //   )

    //   state.cliente = clienteActualizado
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(solicitarReservaCliente.pending, (state, action) => {
      state.status_reserva = Status.LOADING
    })
    builder.addCase(solicitarReservaCliente.rejected, (state, action) => {
      state.status_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(solicitarReservaCliente.fulfilled, (state, action) => {
      state.status_reserva = Status.SUCCEEDED
    })

    builder.addCase(cancelarReservaCliente.pending, (state, action) => {
      state.status_cancelar_reserva = Status.LOADING
    })
    builder.addCase(cancelarReservaCliente.rejected, (state, action) => {
      state.status_cancelar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(cancelarReservaCliente.fulfilled, (state, action) => {
      state.status_cancelar_reserva = Status.SUCCEEDED
    })
  }
})
export const solicitarReservaCliente = createAsyncThunk(
  'cliente/solicitarReserva',
  async (data: SolicitarReservaDto, { rejectWithValue }) => {
    try {
      const response = await reservaServices.solicitarReserva(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        // Use rejectWithValue to pass AxiosError data to the rejected action payload
        return rejectWithValue(error)
      }
      throw error
    }
  }
)
export const cancelarReservaCliente = createAsyncThunk(
  'cliente/cancelarReservaCliente',
  async (data: CancelarReservaClienteDto, { rejectWithValue }) => {
    try {
      const response = await reservaServices.cancelarReservaCliente(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        // Use rejectWithValue to pass AxiosError data to the rejected action payload
        return rejectWithValue(error)
      }
      throw error
    }
  }
)
export const {
  set_cliente,
  reset_status_reserva,
  reset_status_cancelar_reserva
  // agregar_restaurante_favorito,
  // eliminar_restaurante_favorito
} = clienteSlice.actions
export default clienteSlice.reducer
