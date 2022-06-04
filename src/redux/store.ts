import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router/immutable'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@state/reducer'
import { createHashHistory, History } from 'history'

export const createStore = (history: History, initialState = {}): Store => {
  // Array of all middlewares to be applied.
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history)
  ]

  return configureStore({
    reducer: rootReducer(history),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares)
  })
}

export const history = createHashHistory()
export const store = createStore(history)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
