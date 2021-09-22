import counterReducer from '../features/Counter/CounterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    count: counterReducer,
    user: userReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;