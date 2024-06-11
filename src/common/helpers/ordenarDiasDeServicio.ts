const dias_servicio_ordenado = [
  'LUNES',
  'MARTES',
  'MIÉRCOLES',
  'JUEVES',
  'VIERNES',
  'SÁBADO',
  'DOMINGO'
]

export const agruparDiasDeServicio = (arrayDias: string[]): string[] => {
  let diasOrdenados = arrayDias.sort(
    (a, b) => dias_servicio_ordenado.indexOf(a) - dias_servicio_ordenado.indexOf(b)
  )

  const diasAgrupados = diasOrdenados?.reduce((acc, curr, index, array) => {
    if (index === 0) {
      return [[curr]]
    }

    if (
      dias_servicio_ordenado.indexOf(array[index - 1]) ===
      dias_servicio_ordenado.indexOf(curr) - 1
    ) {
      // console.log('entre')
      let arrayCopi = [...acc]
      arrayCopi[arrayCopi.length - 1] = [...arrayCopi[arrayCopi.length - 1], curr]
      return arrayCopi
    }

    return [...acc, [curr]]
  }, [])

  return diasAgrupados
}
