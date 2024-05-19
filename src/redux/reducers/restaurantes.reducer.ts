import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RestauranteDetalladoEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { restauranteServices } from '../../services/restaurante.services'
import { Paginacion } from '../../dominio/interfaces/paginacion.interface'

interface initialStateInterface {
  restaurante_actual: null | RestauranteDetalladoEntity
  top_restaurantes: null | RestauranteDetalladoEntity[]
  restaurantes: [] | RestauranteDetalladoEntity[]
  paginacion: Paginacion
  status: Status
  error: null | string
}

const initialState: initialStateInterface = {
  restaurante_actual: null,
  error: null,
  restaurantes: [],
  status: Status.IDLE,
  top_restaurantes: null,
  paginacion: null
}

const restaurantes = createSlice({
  name: 'restaurantes',
  initialState: initialState,
  reducers: {},
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

      if (paginacion?.page > state?.paginacion?.page) {
        const new_state = [...state.restaurantes, ...restaurantes]
        state.restaurantes = new_state
        state.paginacion = paginacion
      } else {
        state.restaurantes = restaurantes
        state.paginacion = paginacion
      }
    })
  }
})

const {} = restaurantes.actions
export default restaurantes.reducer

export const get_top_restaurantes = createAsyncThunk('restaurantes/top-restaurantes', async () => {
  try {
    const restaurantes = await restauranteServices.obtener_top_resturantes()
    return restaurantes
  } catch (error) {
    console.error(error)
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
