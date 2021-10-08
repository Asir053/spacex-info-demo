import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./missions";
import api from "./middleware/api";

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
    });
}
