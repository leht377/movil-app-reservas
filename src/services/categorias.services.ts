import { envs } from "@/common/config/envs";
import { CategoriaEntity } from "@/dominio/entities";
import axios, { AxiosError } from "axios";

const API_URL = envs.API_URL;

const obtenerCategorias = async (): Promise<CategoriaEntity[]> => {
  try {
    const response = await axios.get(`${API_URL}/categorias`);
    const categorias = response.data.map(
      (categoria: { id: string; nombre: string }) =>
        new CategoriaEntity(categoria.id, categoria.nombre)
    );
    return categorias;
  } catch (error) {
    throw error;
  }
};

export const obtenerCategoriasService = { obtenerCategorias };
