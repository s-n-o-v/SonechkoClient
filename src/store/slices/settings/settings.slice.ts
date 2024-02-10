import {SettingsResponse} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: SettingsResponse = {}

const SettingsSlice = createSlice({
    name: 'Settings',
    initialState,
    reducers: {
        loadSettings ( state, action: PayloadAction<SettingsResponse> ) {
            if (action.payload) {
                state.bot = {...action.payload.bot}
                state.chart = {...action.payload.chart}
                state.scanner = action.payload.scanner
                state.fees = {...action.payload.fees}
            }
        },

    }
})

export const { loadSettings } = SettingsSlice.actions
export default SettingsSlice.reducer
