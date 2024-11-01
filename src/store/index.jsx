import { configureStore } from '@reduxjs/toolkit';
import aaa from './modules/aaaSlice';
import menu from './modules/menuDataSlice';

export const store = configureStore({
    reducer: {
        aaa, 
        menu, 
    },
});
