import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            localStorage.removeItem('username')
            localStorage.removeItem('auth')
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)