import { HorasServicioRestaurante } from '../utils/enums'
function convertirHoraMilitar(horaMilitar) {
  let [horas, minutos] = horaMilitar.split(':').map(Number)
  const periodo = horas >= 12 ? 'PM' : 'AM'

  horas = horas % 12 || 12 // Convierte las horas a formato 12 horas y ajusta 0 a 12

  const horasStr = horas.toString().padStart(2, '0')
  const minutosStr = minutos.toString().padStart(2, '0')

  return `${horasStr}:${minutosStr} ${periodo}`
}

// Ejemplos de uso

const horasOrdenandas = Object.values(HorasServicioRestaurante) as string[]
export const agruparHorasServicio = (arrayHora: string[]): string[] => {
  const arrayOrdenado = arrayHora?.sort(
    (a, b) => horasOrdenandas.indexOf(a) - horasOrdenandas.indexOf(b)
  )

  const horasAgrupados = arrayOrdenado?.reduce((acc, curr, index, array) => {
    if (index === 0) return [[curr]]
    if (horasOrdenandas.indexOf(array[index - 1]) === horasOrdenandas.indexOf(curr) - 1) {
      let arrayCopi = [...acc]
      arrayCopi[arrayCopi.length - 1] = [...arrayCopi[arrayCopi.length - 1], curr]
      return arrayCopi
    }

    return [...acc, [curr]]
  }, [])

  return horasAgrupados?.map((e) => e?.map(convertirHoraMilitar))
}
