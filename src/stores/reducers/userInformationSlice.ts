import { UserType } from "@/src/libs/validation/userSchemas";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: UserType = {
  fullName: "",
  birthDate: "",
  gender: "",
  phone: "",
  email: "",
  socialContact: "",
  province: "",
  district: "",
  address: "",
  occupation: "",
  company: "",
  income: "",
  note: "",
};

export const userInformationSlice = createSlice({
  name: "userInformation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateUserInformation: (
      state,
      action: PayloadAction<Partial<UserType>>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateUserInformation } = userInformationSlice.actions;

export default userInformationSlice.reducer;
