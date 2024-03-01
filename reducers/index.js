import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import StyleReducer from "./style";
import authReducer from "./auth";

export default configureStore({
    reducer:{
        counter: counterReducer,
        style: StyleReducer,
        auth: authReducer,
    }
})