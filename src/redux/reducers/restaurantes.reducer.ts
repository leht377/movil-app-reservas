import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RestauranteDetalladoEntity, RestauranteEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { restauranteServices } from '../../services/restaurante.services'
import { Paginacion } from '../../dominio/interfaces/paginacion.interface'
import { RegistrarRestauranteDto } from '@/dominio/dtos/registrat-restaurante.dtos'
import { CalificarRestauranteDto } from '@/dominio/dtos/calificar-restaurante-dto'
import { AxiosError } from 'axios'

interface initialStateInterface {
  restaurante_actual: RestauranteDetalladoEntity | null
  top_restaurantes: null | RestauranteDetalladoEntity[]
  restaurantes: [] | RestauranteDetalladoEntity[]
  restaurante:RestauranteEntity | null
  paginacion: Paginacion | null
  status: Status
  status_calificar_restaurante: Status
  error: null | string
}

const initialState: initialStateInterface = {
  restaurante_actual: null,
  error: null,
  restaurantes: [],
  restaurante: null,
  status: Status.IDLE,
  status_calificar_restaurante: Status.IDLE,
  top_restaurantes: null,
  paginacion: null
}

const restaurantes = createSlice({
  name: 'restaurantes',
  initialState: initialState,
  reducers: {
    reset_status_calificar_restaurate(state) {
      state.status_calificar_restaurante = Status.IDLE
    },
    set_restaurante_actual(state, action: PayloadAction<RestauranteDetalladoEntity>) {
      state.restaurante_actual = action.payload
    },
    set_restaurante(state, action: PayloadAction<RestauranteEntity>) {
      state.restaurante = action.payload
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

    // Agregar manejo de registrarRestaurante
    
    
  }
})

export const { reset_status_calificar_restaurate, set_restaurante_actual, set_restaurante} = restaurantes.actions
export default restaurantes.reducer

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

