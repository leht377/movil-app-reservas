import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './reducers/usuario.reducer'
import restaurantesReducer from './reducers/restaurantes.reducer'

export const store = configureStore({
  reducer: { usuario: usuarioReducer, restaurante: restaurantesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
