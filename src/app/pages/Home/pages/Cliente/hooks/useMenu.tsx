import { useEffect, useState } from 'react'
import { menuServices } from '@/services/menu.services'
import { ObtenerMenuDto } from '@/dominio/dtos/obtener-menu.dto'
import { MenuEntity, PlatoEntity } from '@/dominio/entities'
import { useAppSelector } from '@/redux/hooks/useAppSelector'

const useMenu = () => {
  const [menu, setMenu] = useState<MenuEntity>(null)
  const [platos, setPlatos] = useState<PlatoEntity[]>([])
  
  const { restaurante_actual } = useAppSelector((state) => state.restaurante)

  const obtenerMenu = async () => {
    try {
      const dto = ObtenerMenuDto.crear({
        menu_id: restaurante_actual?.getMenuId()
      })
      const menu = await menuServices.obtenerMenu(dto)
      setMenu(menu)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (restaurante_actual && restaurante_actual?.getMenuId()) {
      obtenerMenu()
    }
  }, [restaurante_actual])

  useEffect(() => {
    if (menu) setPlatos(menu.getPlatos())
  }, [menu])

  return { platos, obtenerMenu }
}

export default useMenu
