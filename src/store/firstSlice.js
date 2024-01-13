import {createSlice} from '@reduxjs/toolkit';

const initialState = {

}

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        exampleAction: (state, action) => {
            // обработка действия
            // например, state.someValue = action.payload
            console.log(action);
          },
    }
})

export const myReducer = mySlice.reducer;
export const {exampleAction} = mySlice.actions;