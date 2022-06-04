import { ThunkAction as AsyncThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '@state/store'

export type ThunkAction<R> = AsyncThunkAction<R, RootState, any, AnyAction>
export type ThunkDispatcher = ThunkDispatch<RootState, any, AnyAction>
