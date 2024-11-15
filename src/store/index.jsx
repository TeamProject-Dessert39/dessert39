import { configureStore } from '@reduxjs/toolkit';
import aaa from './modules/aaaSlice';
import menu from './modules/menuDataSlice';
import storeSlice from './modules/storeSlice';

export const store = configureStore({
    reducer: {
        aaa, 
        menu, 
        storeSlice,
    },
});
