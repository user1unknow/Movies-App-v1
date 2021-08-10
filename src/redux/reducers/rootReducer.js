import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { moviesReducer } from './moviesReducer'
import { uiReducer } from './uiReducer'

export const reducers = combineReducers({
        auth: authReducer,
        ui: uiReducer,
        movies: moviesReducer,
})