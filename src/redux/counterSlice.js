import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment:(state)=>{
            state.count += 1;
        },
        decrese: (state)=> {
            state.count -= 1
        },
        reset: (state)=> {
            state.count = 69
        }
    }
});

export const {increment,decrese,reset} = counterSlice.actions;
export default counterSlice.reducer;