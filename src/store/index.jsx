import { configureStore } from '@reduxjs/toolkit';
import aaa from './modules/aaaSlice';

export const store = configureStore({
    reducer: { aaa },
});
