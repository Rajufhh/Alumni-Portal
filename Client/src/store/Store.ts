import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import configSlice from './configSlice'

const Store = configureStore({
    reducer: {
        user: userReducer,
        config: configSlice
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export default Store;