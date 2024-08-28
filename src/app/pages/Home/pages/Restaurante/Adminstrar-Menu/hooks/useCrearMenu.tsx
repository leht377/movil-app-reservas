import Status from '@/common/utils/enums/status_asynctrunck'
import { RegistrarMenuDto } from '@/dominio/dtos/registrar-menu.dto'
import { MenuEntity } from '@/dominio/entities'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { cambiar_id_menu } from '@/redux/reducers/restaurantes.reducer'
import { menuServices } from '@/services/menu.services'
import { useState } from 'react'

const useCrearMenu = () => {
  const [menu, setMenu] = useState<MenuEntity | null>(null)
  const [status, setStatus] = useState<Status>(Status.IDLE)
  const [error, setError] = useState<string | null>(null)
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispacth = useAppDispatch()
  const crearMenu = async () => {
    setStatus(Status.LOADING)
    setError(null)

    try {
      const token = usuario.getTokent()

      if (!token) {
        throw new Error('El token no está disponible.')
      }

      const dto = RegistrarMenuDto.crear({
        restaurante_id: restaurante.getId(),
        token: token
      })

      const nuevoMenu = await menuServices.registrarMenu(dto)
      dispacth(cambiar_id_menu(nuevoMenu.getId()))
      setMenu(nuevoMenu)
      setStatus(Status.SUCCEEDED)

      setTimeout(() => {
        resetStatus()
      }, 2000)
    } catch (error: any) {
      console.error(error)
      setError(error.message || 'Error al crear el menú')
      setStatus(Status.FAILED)
      setTimeout(() => {
        resetStatus()
      }, 2000)
    }
  }

  const resetStatus = () => {
    setStatus(Status.IDLE)
    setError(null)
  }

  return {
    menu,
    status,
    error,
    crearMenu,
    resetStatus
  }
}

export default useCrearMenu
