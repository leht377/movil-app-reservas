import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RestauranteDetalladoEntity, RestauranteEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { restauranteServices } from '../../services/restaurante.services'
import { Paginacion } from '../../dominio/interfaces/paginacion.interface'
import { RegistrarRestauranteDto } from '@/dominio/dtos/registrat-restaurante.dtos'
import { CalificarRestauranteDto } from '@/dominio/dtos/calificar-restaurante-dto'
import { AxiosError } from 'axios'
import { ActualizarRestauranteDto } from '@/dominio/dtos/actualizar-restaurante.dto'
import { AceptarReservaDto } from '@/dominio/dtos/aceptar-restaurante.dto'
import { reservaServices } from '@/services/reserva.services'
import { UploadFotoIntalacionDto } from '@/dominio/dtos/upload-foto-instalacion.dto'
import { DeleteFotoIntalacionDto } from '@/dominio/dtos/delete-foto-instalacion.dto'
import { RechazarReservaRestauranteDto } from '@/dominio/dtos/rechazar-reserva-restaurante.dto'
import { RestauranteMapper } from '@/common/utils/mappers/restaurante.mapper'
import { CancelarReservaRestauranteDto } from '@/dominio/dtos/cancelar-reserva-restaurante.dto'

interface initialStateInterface {
  restaurante_actual: RestauranteDetalladoEntity | null
  top_restaurantes: null | RestauranteDetalladoEntity[]
  restaurantes: [] | RestauranteDetalladoEntity[]
  restaurante: RestauranteDetalladoEntity | null
  paginacion: Paginacion | null
  status: Status
  status_calificar_restaurante: Status
  status_actualizar_restaurante: Status
  status_cancelar_reserva: Status
  error: null | string
  status_aceptar_reserva: Status
  status_rechazar_reserva: Status
}

const initialState: initialStateInterface = {
  restaurante_actual: null,
  error: null,
  restaurantes: [],
  restaurante: null,
  status: Status.IDLE,
  status_calificar_restaurante: Status.IDLE,
  status_actualizar_restaurante: Status.IDLE,
  status_cancelar_reserva: Status.IDLE,
  top_restaurantes: null,
  paginacion: null,
  status_aceptar_reserva: Status.IDLE,
  status_rechazar_reserva: Status.IDLE
}

const restaurantes = createSlice({
  name: 'restaurantes',
  initialState: initialState,
  reducers: {
    reset_status_calificar_restaurate(state) {
      state.status_calificar_restaurante = Status.IDLE
    },
    reset_status_actualizar_restaurate(state) {
      state.status_actualizar_restaurante = Status.IDLE
    },
    reset_status_cancelar_reserva(state) {
      state.status_cancelar_reserva = Status.IDLE
    },
    set_restaurante_actual(state, action: PayloadAction<RestauranteDetalladoEntity>) {
      state.restaurante_actual = action.payload
    },
    set_restaurante(state, action: PayloadAction<RestauranteDetalladoEntity>) {
      state.restaurante = action.payload
    },

    reset_status_aceptar_reserva_restaurante(state) {
      state.status_aceptar_reserva = Status.IDLE
    },

    cambiar_id_menu(state, action) {
      state.restaurante = RestauranteMapper.RestauranteDetalladoEntityFromObject({
        ...state.restaurante,
        menu_id: action.payload
      })
    },
    reset_status_rechazar_reserva_restaurante(state) {
      state.status_rechazar_reserva = Status.IDLE
    }
  },
  extraReducers: (builder) => {
    builder.addCase(get_top_restaurantes.pending, (state, action) => {
      state.status = Status.LOADING
    })
    builder.addCase(get_top_restaurantes.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED
      state.top_restaurantes = action.payload
    })
    builder.addCase(get_top_restaurantes.rejected, (state, action) => {
      state.status = Status.FAILED
    })

    builder.addCase(get_restaurantes.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED
      const { paginacion, restaurantes } = action.payload
      const isFirtsRequest = !state.paginacion

      if (paginacion?.page > (state?.paginacion?.page || 0)) {
        state.restaurantes = [...state.restaurantes, ...restaurantes]
        state.paginacion = paginacion
      } else {
        state.restaurantes = restaurantes
        state.paginacion = paginacion
      }
    })

    builder.addCase(calificarRestaurante.pending, (state, action) => {
      state.status_calificar_restaurante = Status.LOADING
    })
    builder.addCase(calificarRestaurante.fulfilled, (state, action) => {
      state.status_calificar_restaurante = Status.SUCCEEDED
      const restauranteCalificado = action.payload
      state.restaurante_actual = restauranteCalificado
    })
    builder.addCase(calificarRestaurante.rejected, (state, action) => {
      state.status_calificar_restaurante = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })

    builder.addCase(actualizarRestauranteAsy.pending, (state, action) => {
      state.status_actualizar_restaurante = Status.LOADING
    })
    builder.addCase(actualizarRestauranteAsy.fulfilled, (state, action) => {
      state.status_actualizar_restaurante = Status.SUCCEEDED
      const restauranteAc = action.payload
      state.restaurante = restauranteAc
    })
    builder.addCase(actualizarRestauranteAsy.rejected, (state, action) => {
      state.status_actualizar_restaurante = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response?.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })

    // Agregar manejo de registrarRestaurante

    builder.addCase(aceptarReservaRestaurante.pending, (state, action) => {
      state.status_aceptar_reserva = Status.LOADING
    })
    builder.addCase(aceptarReservaRestaurante.rejected, (state, action) => {
      state.status_aceptar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(aceptarReservaRestaurante.fulfilled, (state, action) => {
      state.status_aceptar_reserva = Status.SUCCEEDED
    })

    builder.addCase(rechazarReservaRestaurante.pending, (state, action) => {
      state.status_rechazar_reserva = Status.LOADING
    })
    builder.addCase(rechazarReservaRestaurante.rejected, (state, action) => {
      state.status_rechazar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(rechazarReservaRestaurante.fulfilled, (state, action) => {
      state.status_rechazar_reserva = Status.SUCCEEDED
    })

    builder.addCase(uploadFotoInstalacionRestaurante.pending, (state, action) => {
      state.status_aceptar_reserva = Status.LOADING
    })
    builder.addCase(uploadFotoInstalacionRestaurante.rejected, (state, action) => {
      // state.status_aceptar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response?.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(uploadFotoInstalacionRestaurante.fulfilled, (state, action) => {
      // state.status_aceptar_reserva = Status.SUCCEEDED
      state.restaurante = action.payload
    })

    builder.addCase(deleteFotoInstalacionRestaurante.pending, (state, action) => {
      // state.status_aceptar_reserva = Status.LOADING
    })
    builder.addCase(deleteFotoInstalacionRestaurante.rejected, (state, action) => {
      // state.status_aceptar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response?.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(deleteFotoInstalacionRestaurante.fulfilled, (state, action) => {
      // state.status_aceptar_reserva = Status.SUCCEEDED
      state.restaurante = action.payload
    })

    builder.addCase(cancelarReservaRestaurante.pending, (state, action) => {
      state.status_cancelar_reserva = Status.LOADING
    })
    builder.addCase(cancelarReservaRestaurante.rejected, (state, action) => {
      state.status_cancelar_reserva = Status.FAILED
      if (action.payload instanceof AxiosError) state.error = action.payload.response.data?.error
      else state.error = 'Ocurrio un error desconocido'
    })
    builder.addCase(cancelarReservaRestaurante.fulfilled, (state, action) => {
      state.status_cancelar_reserva = Status.SUCCEEDED
    })
  }
})

export const {
  reset_status_calificar_restaurate,
  set_restaurante_actual,
  set_restaurante,
  reset_status_actualizar_restaurate,
  reset_status_aceptar_reserva_restaurante,
  reset_status_rechazar_reserva_restaurante,
  reset_status_cancelar_reserva,
  cambiar_id_menu
} = restaurantes.actions
export default restaurantes.reducer

export const cancelarReservaRestaurante = createAsyncThunk(
  'cliente/cancelarReservaRestaurante',
  async (data: CancelarReservaRestauranteDto, { rejectWithValue }) => {
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
export const get_top_restaurantes = createAsyncThunk('restaurantes/top-restaurantes', async () => {
  try {
    const restaurantes = await restauranteServices.obtener_top_resturantes()
    return restaurantes
  } catch (error) {
    console.error(error)
    throw error
  }
})
export const get_restaurantes = createAsyncThunk(
  'restaurantes/restaurantes',
  async (page: number) => {
    try {
      const response = await restauranteServices.obtener_resturantes(page)
      return response
    } catch (error) {
      console.error(error)
    }
  }
)

export const calificarRestaurante = createAsyncThunk(
  'restaurantes/calificarRestaurante',
  async (data: CalificarRestauranteDto, { rejectWithValue }) => {
    try {
      const response = await restauranteServices.calificarRestaurante(data)
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

export const actualizarRestauranteAsy = createAsyncThunk(
  'restaurantes/actualizarRestaurante',
  async (data: ActualizarRestauranteDto, { rejectWithValue }) => {
    try {
      const response = await restauranteServices.actualizarRestaurante(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error)
      }
      throw error
    }
  }
)

export const aceptarReservaRestaurante = createAsyncThunk(
  'restaurante/aceptarReservaRestaurante',
  async (data: AceptarReservaDto, { rejectWithValue }) => {
    try {
      const response = await reservaServices.aceptarReservaRestaurante(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error)
      }
      throw error
    }
  }
)

export const rechazarReservaRestaurante = createAsyncThunk(
  'restaurante/rechazarReservaRestaurante',
  async (data: RechazarReservaRestauranteDto, { rejectWithValue }) => {
    try {
      const response = await reservaServices.rechazarReservaRestaurante(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error)
      }
      throw error
    }
  }
)

export const uploadFotoInstalacionRestaurante = createAsyncThunk(
  'restaurante/uploadFotoInstalacionRestaurante',
  async (data: UploadFotoIntalacionDto, { rejectWithValue }) => {
    try {
      const response = await restauranteServices.uploadFotoIntalacion(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error)
      }
      throw error
    }
  }
)
export const deleteFotoInstalacionRestaurante = createAsyncThunk(
  'restaurante/deleteFotoInstalacionRestaurante',
  async (data: DeleteFotoIntalacionDto, { rejectWithValue }) => {
    try {
      const response = await restauranteServices.deleteFotoIntalacion(data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error)
      }
      throw error
    }
  }
)
