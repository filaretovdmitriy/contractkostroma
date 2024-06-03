import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import apiClient from "../api/axios"

interface User {
  username: string;
}

interface AuthState {
  isAuthentificated: boolean;
  user: User | null;
  token: string | null;
}

const initialState = {
  isAuthentificated: false,
  user: null,
  token: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }) => {
    const response = await apiClient.post("/auth/login/", credentials);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.isAuthentificated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.isAuthentificated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    );
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;