import { createSlice } from '@reduxjs/toolkit'
import Status from '../../common/utils/enums/status_asynctrunck'
import { ClienteEntity } from '../../dominio/entities'

interface initialStateInterface {
  cliente: ClienteEntity | null
  status_registrar_cliente: Status
  error: null
}

const clienteSlice = createSlice({
  name: 'cliente',
  initialState: <initialStateInterface>{
    cliente: null,
    status_registrar_cliente: Status.IDLE,
    error: null
  },
  reducers: {}
})

export const {} = clienteSlice.actions
export default clienteSlice.reducer
