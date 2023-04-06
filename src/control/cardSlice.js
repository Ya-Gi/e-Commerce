import { createSlice } from "@reduxjs/toolkit"
import courseItems from "../coursItems"

const initialState = {
    cardItems:courseItems,
    quantity:0,
    total:0
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        clearCard:(state) => {
            state.cardItems = [];
        },
        removeItem: (state,action) => {
           const itemId = action.payload;
           state.cardItems=state.cardItems.filter(( item )=> item.id !== itemId)
        },
        increase: (state, action) => {
        const cardItem = state.cardItems.find((item) => item.id == action.payload)
        cardItem.quantity += 1;
        },
        downrease: (state,action) => {
        const cardItem = state.cardItems.find((item) => item.id == action.payload)
        cardItem.quantity -= 1;

        },  
        calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
        state.cardItems.forEach((item) => {
           total += item.quantity * item.price;
           quantity += item.quantity
        });
        state.quantity=quantity;
        state.total=total;
        },
    },

})
export const { clearCard,removeItem,increase,downrease,calculateTotal } = cardSlice.actions;

export default cardSlice.reducer;