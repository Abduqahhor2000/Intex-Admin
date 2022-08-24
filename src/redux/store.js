import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './userReducer'
import errorSlice from './errorReducer'
import categoryReducer from "./categoryReducer"
import consultationReducer from "./consultationReducer"
import productStatusReducer from './productStatusReducer'
import orderReducer from './orderReducer'
import productReducer from './productReducer'
import siteInfoReducer from './siteInfoReducer'
import storage from 'redux-persist/lib/storage'
import { persistStore,
         persistReducer,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST,
         PURGE,
         REGISTER,
 } from 'redux-persist'

const rootReducer = combineReducers({
  user: userSlice,
  error: errorSlice,
  siteInfo: siteInfoReducer,
  category: categoryReducer,
  consultation: consultationReducer,
  order: orderReducer,
  product: productReducer,
  productStatus: productStatusReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store =  configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store;