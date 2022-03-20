import { createAsyncThunk } from "@reduxjs/toolkit"
import { IEvent } from "../../../models/IEvent"

export const fetchEvents = createAsyncThunk(
    'event/fetchEvents',
    async (username: string, thunkAPI) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const newEvents = json.filter((ev => ev.author === username && ev.guest === username))
            return newEvents
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)