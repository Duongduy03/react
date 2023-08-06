import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../api/auth";
const initialState = {
  user: [],
  accessToken: "",
  error: "",
  isLoading: false,
};
type RegisterForm = {
  name: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  num_phone: string;
};
export const signup = createAsyncThunk(
  "register",
  async (arg: RegisterForm, thunkAPI) => {
    try {
      const res = await registerUser(arg);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action: any) => {
      state.isLoading = false;
      //   state.user.push(action.payload);
    });
    builder.addCase(signup.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
