import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Position, PositionResponse, PositionsList} from "./types";

const initialState: PositionsList = {
    list: []
}

const comparePositions = (pos1: Position, pos2: Position) => {
    return pos1.takeProfit === pos2.takeProfit
        && pos1.spread === pos2.spread
        && pos1.realizedPnL === pos2.realizedPnL
        && pos1.unrealizedPnLTotal === pos2.unrealizedPnLTotal
        && pos1.buyerBuyQuoteAmount === pos2.buyerBuyQuoteAmount
        && pos1.sellerSellQuoteAmount === pos2.sellerSellQuoteAmount
}

const PositionsSlice = createSlice({
    name: 'Position',
    initialState,
    reducers: {
        attach ( state, action: PayloadAction<PositionResponse> ) {
            if (action.payload) {
                // Remove closed positions
                const list = Object.keys(action.payload).filter(idKey => !state.list.some(l => l.idKey === idKey));
                if (list.length > 0 && state.list.length > 0) {
                    while (list.length > 0) {
                        const idx = state.list.findIndex(s => s.idKey === list[0])
                        delete state.list[idx]
                        delete list[0]
                    }
                }

                // Update positions
                Object.keys(action.payload).forEach((item: string) => {

                    const idx = state.list.findIndex(s => s.idKey === item)

                    if (idx >= 0) {

                        if (!comparePositions(action.payload[item], state.list[idx])) {
                            return // do not update record if nothing changed
                        } else {
                            console.log('update ');
                            state.list[idx] = { ...action.payload[item], idKey: item }

                        }

                    } else {
                        const newSignal: Position = action.payload[item]
                        newSignal.idKey = item
                        state.list.push(newSignal)
                    }
                })
            }
        },
    }
})

export const { attach } = PositionsSlice.actions
export default PositionsSlice.reducer
