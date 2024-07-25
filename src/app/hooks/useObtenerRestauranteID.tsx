import React from "react";
import { restauranteServices } from "@/services/restaurante.services";


const useObtenerRestauranteID = () => {
    const obtenerRestaurante = async(restauranteId: string)=>{
        try {
            const restaurante = await restauranteServices.obetenerRestaurantePorId(restauranteId)
        return restaurante
        } catch (error) {
            throw error
            
        }
    }
    return {obtenerRestaurante}
}

export default useObtenerRestauranteID