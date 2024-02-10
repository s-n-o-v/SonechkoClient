import {ChartResponse} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ChartResponse = {
    exchange: '',
    asset: '',
    ask: 0,
    bid: 0,
    ts: 0
}

const ChartSlice = createSlice({
    name: "Chart",
    initialState,
    reducers: {
        addChartData (state, action: PayloadAction<ChartResponse>) {
            state.ask = action.payload.ask;
            state.bid = action.payload.bid;
            state.ts = action.payload.ts;
            state.exchange = action.payload.exchange;
            state.asset = action.payload.asset;
        }
    }
})

export const { addChartData } = ChartSlice.actions
export default ChartSlice.reducer
