import Status from '@/common/utils/enums/status_asynctrunck'
import { RegistrarPlatoDto } from '@/dominio/dtos/regsitrar-plato.dto'
import { PlatoEntity } from '@/dominio/entities'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { menuServices } from '@/services/menu.services'
import { useState } from 'react'

const useRegistrarPlato = () => {
  const [platos, setPlatos] = useState<PlatoEntity | null>(null)
  const [status, setStatus] = useState<Status>(Status.IDLE)
  const [error, setError] = useState<string | null>(null)
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)

  const resetStatus = () => {
    setStatus(Status.IDLE)
    setError(null)
  }

  const registrarPlato = async (data: {
    nombre: string
    descripcion: string
    categorias_ids: string[]
    hashtags_ids: string[]
    url_foto_principal: string
    url_fotos_secundarias: string[]
  }) => {
    setStatus(Status.LOADING)
    setError(null)

    try {
      const dto = RegistrarPlatoDto.crear({
        ...data,
        restaurante_id: restaurante.getId(),
        menu_id: restaurante.getMenuId(),
        token: usuario.getTokent()
      })

      const nuevoPlato = await menuServices.registrarPlato(dto)
      setPlatos(nuevoPlato)
      setStatus(Status.SUCCEEDED)
      setTimeout(() => {
        resetStatus()
      }, 2000)
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error al registrar el plato')
      setStatus(Status.FAILED)
    }
    setTimeout(() => {
      resetStatus()
    }, 2000)
  }

  return {
    platos,
    status,
    error,
    registrarPlato,
    resetStatus
  }
}

export default useRegistrarPlato
