import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RestauranteDetalladoEntity } from '../../dominio/entities'
import Status from '../../common/utils/enums/status_asynctrunck'
import { restauranteServices } from '../../services/restaurante.services'
interface initialStateInterface {
  restaurante_actual: null | RestauranteDetalladoEntity
  top_restaurantes: null | RestauranteDetalladoEntity[]
  status: Status
  error: null | string
}

const restaurantes = createSlice({
  name: 'restaurantes',
  initialState: <initialStateInterface>{
    restaurante_actual: null,
    error: null,
    status: Status.IDLE,
    top_restaurantes: null
  },
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
