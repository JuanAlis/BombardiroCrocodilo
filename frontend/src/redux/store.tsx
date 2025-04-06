import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import authReducer from "./authSlice"; 
import activitiesReducer from "./activitySlice";

const store = configureStore({
    reducer: {
        auth: authReducer, 
        users: userReducer, 
        activities: activitiesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
