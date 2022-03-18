import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {eventInitialState} from './eventTypes'
import {fetchGuests} from './eventFetchGuestsThunk'
import { IUser } from "../../../models/IUser";

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
        }
    }
})

export default eventSlicer.reducer