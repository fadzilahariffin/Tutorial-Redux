import { createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)