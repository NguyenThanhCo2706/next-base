import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterSlice";
import userInformationReducer from "./reducers/userInformationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInformation: userInformationReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
