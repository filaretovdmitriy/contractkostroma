import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
}

interface AuthState {
  isAudhentificated: boolean;
  user: User | null;
  token: string | null;
}

const initialState = {
  isAudhentificated: false,
  user: null,
  token: null,
};

const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }) => {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.isAudhentificated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.isAudhentificated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    );
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;