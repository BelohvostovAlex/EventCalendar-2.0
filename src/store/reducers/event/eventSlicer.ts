import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {eventInitialState} from './eventTypes'
import {fetchGuests} from './eventFetchGuestsThunk'
import { createEvent } from "./createEvent";
import { fetchEvents } from "./eventFetchEvents";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

const initialState: eventInitialState = {
    guests: [],
    events: [],
    isLoading: false,
    isError: ''
}

export const eventSlicer = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGuests.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload
            state.isError = ''
            state.isLoading = false
        },
        [fetchGuests.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchGuests.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isError = action.payload
            state.isLoading = false
        },
        [createEvent.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
            state.isError = ''
            state.isLoading = false
        },
        [createEvent.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isError = action.payload
            state.isLoading = false
        },
        [fetchEvents.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
            state.isError = ''
            state.isLoading = false
        },
        [fetchEvents.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchEvents.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isError = action.payload
            state.isLoading = false
        }
    }
})

export default eventSlicer.reducer