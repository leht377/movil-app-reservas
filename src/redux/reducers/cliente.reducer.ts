import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Status from '../../common/utils/enums/status_asynctrunck'
import { ClienteEntity } from '../../dominio/entities'
import { reservaServices } from '@/services/reserva.services'
import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'
import { AxiosError } from 'axios'

interface initialStateInterface {
  cliente: ClienteEntity | null
  status_registrar_cliente: Status
  status_reserva: Status
  error: string
}

const clienteSlice = createSlice({
  name: 'cliente',
  initialState: <initialStateInterface>{
    cliente: null,
    status_registrar_cliente: Status.IDLE,
    error: null,
    status_reserva: Status.IDLE
  },
  reducers: {
    set_cliente(state, action: PayloadAction<ClienteEntity>) {
      state.cliente = action.payload
    },
    reset_status_reserva(state) {
      state.status_reserva = Status.IDLE
    }
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
export const { set_cliente, reset_status_reserva } = clienteSlice.actions
export default clienteSlice.reducer
