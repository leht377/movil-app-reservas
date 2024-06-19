import { AgregarRestauranteFavoritoDto } from '@/dominio/dtos/agregar-restaurante-favorito.dto'
import { ClienteEntity, RestauranteDetalladoEntity } from '@/dominio/entities'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { set_cliente } from '@/redux/reducers/cliente.reducer'
import { clienteServices } from '@/services/cliente.services'
import { AxiosError } from 'axios'

const useAgregarFavorito = () => {
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispatch = useAppDispatch()
  const agregarFavorito = async (restauranteid: string): Promise<ClienteEntity> => {
    try {
      const dto = AgregarRestauranteFavoritoDto.crear({
        cliente_id: cliente?.getId(),
        restaurante_id: restauranteid,
        token: usuario?.getTokent()
      })

      const clienteResponse = await clienteServices.agregarRestauranteFavorito(dto)
      dispatch(set_cliente(clienteResponse))
      return clienteResponse
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.response)
      else console.error(error)
    }
  }

  return { agregarFavorito }
}

export default useAgregarFavorito
