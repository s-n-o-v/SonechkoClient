import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BalanceResponse} from "./types";

const initialState: BalanceResponse = {}

const BalancesSlice = createSlice({
    name: 'Balances',
    initialState,
    reducers: {
        load ( state, action: PayloadAction<BalanceResponse> ) {
            if (action.payload) {
                Object.keys(action.payload).forEach(key => {

                    state[key] = {...action.payload[key]}
                    state[key].s.total = +state[key].s.freeFunds + +state[key].s.fundsInUse
                    state[key].f.total = +state[key].f.freeFunds + +state[key].f.fundsInUse
                    state[key].profit = +state[key].s.profit + +state[key].f.profit
                })
            }
        },
    }
})

export const { load } = BalancesSlice.actions
export default BalancesSlice.reducer
