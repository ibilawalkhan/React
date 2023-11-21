import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo';

export const store = configureStore({
    reducer: todoReducer
})