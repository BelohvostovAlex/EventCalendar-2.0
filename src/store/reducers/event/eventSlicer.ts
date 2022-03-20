import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {eventInitialState} from './eventTypes'
import {fetchGuests} from './eventFetchGuestsThunk'
import { createEvent } from "./createEvent";
import { fetchEvents } from "./eventFetchEvents";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

const initialState: eventInitialState = {
    guests: [],
    events: []
}

export const eventSlicer = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGuests.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload
        },
        [createEvent.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        },
        [fetchEvents.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        }
    }
})

export default eventSlicer.reducer