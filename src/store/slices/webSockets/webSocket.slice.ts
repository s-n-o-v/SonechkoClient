import {createSlice} from '@reduxjs/toolkit';
import {WebSocketState} from "./types.ts";
import {typeConnect} from "../../../types/typeConnect.ts";

const initialState: WebSocketState = {
    connect: typeConnect.Disconnected
}

const WebSocketSlice = createSlice({
    name: 'WebSocket',
    initialState,
    reducers: {
        connect ( state ) {
            state.connect = typeConnect.Connected
        },
        disconnect ( state) {
            state.connect = typeConnect.Disconnected
        },
        send (){}
    }
})

export const { connect, disconnect, send } = WebSocketSlice.actions
export default WebSocketSlice.reducer
