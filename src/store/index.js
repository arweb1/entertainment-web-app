// index.js
import { configureStore } from '@reduxjs/toolkit';
import { myReducer } from './firstSlice';

const store = configureStore({
  reducer: {
    // добавляем созданный редюсер в хранилище
    myReducer,
  },
  devTools: true
});

export default store