const { createSlice } = require('@reduxjs/toolkit');

const CounterSlice = createSlice({
    name: 'todos',
    initialState: 0,
    reducers: {
        increse(state, action){
            return state + 1;
        },
        decrease(state, action){
            return state - 1
        }
    }
});

const {actions, reducer} = CounterSlice;
export const {increse, decrease} = actions; // named export
export default reducer; // default export