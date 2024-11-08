import { createSlice } from '@reduxjs/toolkit';
import dessertData from '../../assets/api/menu_dessert';
import coffeeData from '../../assets/api/menu_coffee';
import mdData from '../../assets/api/menu_md';
import newMenu from '../../assets/api/menu_newMenu';
import clickMenu from '../../assets/api/menu_clickMenu';

const initialState = {
    dessertData,
    coffeeData,
    mdData,
    newMenu,
    clickMenu,
    productItem : [],
    newMenuItem : [],
    clickMenuItem : [],
    currentModal : [],
    Modal : false,
    filteredByCategory : [],
};


export const getDataSlice = createSlice({
    name: 'menudata',
    initialState,
    reducers: {
        onLoadingData: (state, action) => {
            state.productItem = [];
            state.newMenuItem = [];
            state.clickMenuItem = [];
            switch (action.payload) {
                case 'dessert':
                    state.productItem.push(...state.dessertData)
                    state.newMenuItem = state.newMenu.filter(item => item.category === action.payload)
                    state.clickMenuItem = state.clickMenu.filter(item => item.category === action.payload)
                    break;
                case 'beverage':
                    state.productItem.push(...state.coffeeData)
                    state.newMenuItem = state.newMenu.filter(item => item.category === 'coffee')
                    state.clickMenuItem = state.clickMenu.filter(item => item.category === 'coffee')
                    break;
                case 'mdproduct':
                    state.productItem.push(...state.mdData)
                    state.newMenuItem = state.newMenu.filter(item => item.category === 'MD')
                    state.clickMenuItem = state.clickMenu.filter(item => item.category === 'MD')
                    
                    break;
            
                default:
                    break;
            }
        },
        onModalData: (state, action) => {
            state.currentModal = action.payload
            state.Modal = true
        },
        onModalClose: (state, action) => {
            state.Modal = false
        },
        onBeverageFilter: (state, action) => {
            state.productItem = state.coffeeData
            state.filteredByCategory = []
            state.filteredByCategory = state.productItem.filter(item => item.category === action.payload);
            state.productItem = state.productItem.filter(item => item.category !== action.payload);
        },
        onTemFilter : (state, action) => {
            if (action.payload === 'all') {
                state.productItem = state.coffeeData
            }else{
                const filterItem = state.filteredByCategory.filter(item => item.tem === action.payload);
                state.productItem = [...state.productItem, ...filterItem];
            }
        },
    },
});

export const { onModalData , onLoadingData , onModalClose ,onBeverageFilter , onTemFilter } = getDataSlice.actions;
export default getDataSlice.reducer;
