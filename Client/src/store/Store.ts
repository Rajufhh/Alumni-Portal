import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import configSlice from './configSlice'
import socketSlice from './socketSlice'

const Store = configureStore({
    reducer: {
        user: userReducer,
        config: configSlice,
        socket: socketSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // <-- disable serializable check for socket
        }),
});

export type RootState = ReturnType<typeof Store.getState>;
export default Store;