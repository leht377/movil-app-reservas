import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RestauranteDetalladoEntity } from "../../dominio/entities";
import Status from "../../common/utils/enums/status_asynctrunck";
import { restauranteServices } from "../../services/restaurante.services";
import { Paginacion } from "../../dominio/interfaces/paginacion.interface";
import { RegistrarRestauranteDto } from "@/dominio/dtos/registrat-restaurante.dtos";

interface initialStateInterface {
  restaurante_actual: null | RestauranteDetalladoEntity;
  top_restaurantes: null | RestauranteDetalladoEntity[];
  restaurantes: [] | RestauranteDetalladoEntity[];
  paginacion: Paginacion;
  status: Status;
  error: null | string;
}

const initialState: initialStateInterface = {
  restaurante_actual: null,
  error: null,
  restaurantes: [],
  status: Status.IDLE,
  top_restaurantes: null,
  paginacion: null,
};

const restaurantes = createSlice({
  name: "restaurantes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_top_restaurantes.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(get_top_restaurantes.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED;
      state.top_restaurantes = action.payload;
    });
    builder.addCase(get_top_restaurantes.rejected, (state, action) => {
      state.status = Status.FAILED;
    });

    builder.addCase(get_restaurantes.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED;
      const { paginacion, restaurantes } = action.payload;
      const isFirtsRequest = !state.paginacion;

      if (paginacion?.page > state?.paginacion?.page) {
        const new_state = [...state.restaurantes, ...restaurantes];
        state.restaurantes = new_state;
        state.paginacion = paginacion;
      } else {
        state.restaurantes = restaurantes;
        state.paginacion = paginacion;
      }
    });

    // Agregar manejo de resgistrarRestaurante
    builder.addCase(resgistrarRestaurante.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(resgistrarRestaurante.fulfilled, (state, action) => {
      state.status = Status.SUCCEEDED;
      state.restaurante_actual = action.payload;
    });
    builder.addCase(resgistrarRestaurante.rejected, (state, action) => {
      state.status = Status.FAILED;
    });
  },
});

const {} = restaurantes.actions;
export default restaurantes.reducer;

export const get_top_restaurantes = createAsyncThunk(
  "restaurantes/top-restaurantes",
  async () => {
    try {
      const restaurantes = await restauranteServices.obtener_top_resturantes();
      return restaurantes;
    } catch (error) {
      console.error(error);
    }
  }
);
export const get_restaurantes = createAsyncThunk(
  "restaurantes/restaurantes",
  async (page: number) => {
    try {
      const response = await restauranteServices.obtener_resturantes(page);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const resgistrarRestaurante = createAsyncThunk(
  "restaurante/registrar_restaurante",
  async (data: RegistrarRestauranteDto, { rejectWithValue }) => {
    try {
      const restaurante = await restauranteServices.registrarRestaurante(data);
      return restaurante;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue({
        data: error.response.data,
        code: error.response?.status,
      });
    }
  }
);
