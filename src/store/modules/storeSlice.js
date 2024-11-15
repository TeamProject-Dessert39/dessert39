import { createSlice } from '@reduxjs/toolkit';
import storeData from '../../assets/api/store'

const initialState = {
    modalData : null,
    Modal : false,
    storeData,
    filterData : storeData,
};

export const getDataSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        onModalData : (state , action) => {
            state.modalData = action.payload
            state.Modal = true
        },
        onModalClose : (state , action) => {
            state.Modal = false
        },
        filterOn : (state , action) => {
            const serviceFiltered = state.storeData.filter(store => {
                const hasService = store.service.some(service => action.payload.serviceName.includes(service.service));
            
                const matchesText = action.payload.text ? store.name.includes(action.payload.text) || store.addr.includes(action.payload.text) : true;
                if (action.payload.text === '') {
                    matchesText = state.storeData
                }
                return hasService && matchesText;
              });
            
              state.filterData = serviceFiltered;
        },
    }
});

export const { onModalData ,onModalClose, filterOn } = getDataSlice.actions;
export default getDataSlice.reducer;
