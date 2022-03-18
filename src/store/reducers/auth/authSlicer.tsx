import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { authInitialState } from "./authTypes";
import {login} from './authLoginThunk'
import { logout } from "./authLogoutThunk";

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
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.isError = ''
            state.isLoading = false
            state.user = action.payload
        },
        [login.pending.type]: (state) => {
            state.isLoading = true
            state.isError = ''
        },
        [login.rejected.type]: (state) => {
            state.isAuth = false
            state.isLoading = false
            state.isError = 'Error with login'
        },
        [logout.fulfilled.type]: (state) => {
            state.isAuth = false
            state.isError = ''
            state.isLoading = false
            state.user = {} as IUser
        },
        [logout.pending.type]: (state) => {
            state.isLoading = true
            state.isError = ''
        },
        [logout.rejected.type]: (state) => {
            state.isAuth = false
            state.isLoading = false
            state.isError = 'Error with logout'
        }
    },
    initialState
})

export const {setAuth, setLoading, setUser} = authSlicer.actions
export default authSlicer.reducer