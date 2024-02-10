import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Position, PositionResponse, PositionsList} from "./types";

const initialState: PositionsList = {
    list: []
}

const PositionsSlice = createSlice({
    name: 'Position',
    initialState,
    reducers: {
        attach ( state, action: PayloadAction<PositionResponse> ) {
            if (action.payload) {
                Object.keys(action.payload).forEach((item: string) => {

                    const idx = state.list.findIndex(s => s.idKey === item);

                    if (idx >= 0) {

                        state.list[idx] = { ...action.payload[item], idKey: item };

                    } else {
                        const newSignal: Position = action.payload[item];
                        newSignal.idKey = item;
                        state.list.push(newSignal)
                    }
                })
            }
        },
    }
})

export const { attach } = PositionsSlice.actions
export default PositionsSlice.reducer
