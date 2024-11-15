import { configureStore } from '@reduxjs/toolkit';
import aaa from './modules/aaaSlice';
import menu from './modules/menuDataSlice';
import storeSlice from './modules/storeSlice';
import comupagination from './modules/comupageSlice';
import comuSearch from './modules/comuSearchSlice';
import comuData from './modules/comuDataSlice';

export const store = configureStore({
    reducer: {
        aaa,
        menu,
        storeSlice,
        comuData,
        comupagination,
        comuSearch,
    },
});
