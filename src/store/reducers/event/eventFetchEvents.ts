import { createAsyncThunk } from "@reduxjs/toolkit"
import { IEvent } from "../../../models/IEvent"

export const fetchEvents = createAsyncThunk(
    'event/fetchEvents',
    async (username: string, thunkAPI) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const newEvents = json.filter((ev => ev.author === 'alex' || ev.guest === 'alex'))
            return newEvents
        } catch (error) {
            if(error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)