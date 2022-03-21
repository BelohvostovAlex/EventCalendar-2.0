import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../../models/IUser";

export const fetchGuests = createAsyncThunk(
    'event/fetchGuests',
    async(_, thunkAPI) => {
        try {
            const {data} = await axios.get<IUser[]>('./users.json')
            return data
        } catch (error) {
            if(error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)