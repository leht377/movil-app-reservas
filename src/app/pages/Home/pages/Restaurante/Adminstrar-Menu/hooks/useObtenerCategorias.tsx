import { CategoriaEntity } from "@/dominio/entities";
import { obtenerCategoriasService } from "@/services/categorias.services";
import { useEffect, useState } from "react";

const useObtenerCategorias = () => {
  const [categorias, setCategorias] = useState<CategoriaEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const obtenerCategorias = async () => {
    try {
      const categorias = await obtenerCategoriasService.obtenerCategorias();
      setCategorias(categorias);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);
  return { loading, categorias, obtenerCategorias, refetch: obtenerCategorias };
};

export default useObtenerCategorias;
