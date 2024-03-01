import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import StyleReducer from "./style";

export default configureStore({
    reducer:{
        counter: counterReducer,
        style: StyleReducer,
    }
})