import { useAppSelector } from '@/redux/hooks/useAppSelector'
import React, { useEffect, useState } from 'react'

const useHayUsuarioLogeado = () => {
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)

  const [hayUsuarioLogeado, setHayUsuarioLogeado] = useState<boolean>(false)

  useEffect(() => {
    setHayUsuarioLogeado(!!cliente && !!usuario)
  }, [cliente, usuario])

  return hayUsuarioLogeado
}

export default useHayUsuarioLogeado
