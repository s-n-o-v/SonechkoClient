import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BalanceResponse} from "./types";

const initialState: BalanceResponse = {}

const BalancesSlice = createSlice({
    name: 'Balances',
    initialState,
    reducers: {
        load ( state, action: PayloadAction<BalanceResponse> ) {
            if (action.payload) {
                Object.keys(action.payload).forEach(key => state[key] = {...action.payload[key]})
            }
        },
    }
})

export const { load } = BalancesSlice.actions
export default BalancesSlice.reducer
