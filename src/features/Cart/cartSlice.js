import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state) {
            return state.showMiniCart = true
        },

        hideMiniCart(state) {
            return state.showMiniCart = false
        },
        addToCart(state, action){
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if(index >= 0){
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            }else{
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action){
            const {id, quantity} = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if(index >= 0){
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action){
            const idNeedToRemote = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemote.id);
        }
    }
})

const {actions , reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;