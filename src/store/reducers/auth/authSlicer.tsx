import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { authInitialState } from "./authTypes";

const initialState: authInitialState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    isError: ''
}

export const authSlicer = createSlice({
    name: 'auth',
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
            state.isLoading = false
            state.isError = ''
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isError = action.payload
            state.isLoading = false
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    },
    initialState
})

export const {setAuth, setError, setLoading, setUser} = authSlicer.actions
export default authSlicer.reducer