import {UptimeResponse} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UptimeResponse = {
    uptime: 0,
    bot: false,
}

const UptimeSlice = createSlice({
    name: 'Uptime',
    initialState,
    reducers: {
        setUptimeData (state, action: PayloadAction<UptimeResponse>) {
            state.uptime = action.payload.uptime;
            state.bot = action.payload.bot;
        },
    }
})

export const { setUptimeData } = UptimeSlice.actions
export default UptimeSlice.reducer