import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import axios from "axios";

export const login = createAsyncThunk(
    'auth/login',
    async (user: IUser, thunkAPI) => {
        const {username, password} = user
        try {
            const { data } = await axios.get<IUser[]>('./users.json');
            const candidate = data.find(
                (user) => user.username === username && String(user.password) === password,
              );
              if (candidate) {
                localStorage.setItem('username', username)
                localStorage.setItem('auth', 'true')
                  return candidate
              } else {
                  throw Error('incorrect')
              }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

