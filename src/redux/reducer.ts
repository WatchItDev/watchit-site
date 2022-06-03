import { connectRouter } from 'connected-react-router'
import { Reducer, combineReducers } from 'redux'
import { History } from 'history'
import MenuReducers from '@state/menu/reducer'

const createRootReducer = (history: History): Reducer => {
  return combineReducers({
    menu: MenuReducers,
    router: connectRouter(history)
  })
}

export default createRootReducer
