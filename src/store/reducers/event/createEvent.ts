import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEvent } from "../../../models/IEvent";

export const createEvent = createAsyncThunk(
    'event/createEvent',
    async(event: IEvent, thunkAPI) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            localStorage.setItem('events',JSON.stringify(json))
            return json
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)