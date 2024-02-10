import {io, Socket} from "socket.io-client";
import {Action, Middleware} from "@reduxjs/toolkit";
import {AppState} from "../types.ts";
import {WebSocketState} from "../slices/webSockets/types.ts";
import {typeConnect} from "../../types/typeConnect.ts";
import appConfig from '../../app.config.json';

import {BalanceResponse} from "../slices/balances/types";
import {SettingsResponse} from "../slices/settings/types";
import {load} from "../slices/balances/balances.slice.ts";
import {loadSettings} from "../slices/settings/settings.slice.ts";
// import {PositionResponse} from "../slices/positions/types";

// let socket: Socket<ServerToClientListen, ClientToServerListen>

let socket: Socket;

export const webSocketMiddleware: Middleware<{}, AppState> = store => {

    return next => action => {

        const webSocketState: WebSocketState = store.getState().webSocket

        if (webSocketState.connect === typeConnect.Disconnected && !socket) {

            socket = io(appConfig.webSocket.connect);
            socket.on('connect', () => console.log('Client connected'));
            socket.on('connect_error', () => console.log('Connection error'));

            // socket.on('Positions', (message: PositionResponse) => {
            //
            //     console.log(message)
            // })
            socket.on('Balances', (message: BalanceResponse) => {
                // console.log('Balances', message)
                store.dispatch(load(message))
            })
            socket.on('Settings', (message: SettingsResponse) => {
                // console.log('Settings', message)
                store.dispatch(loadSettings(message))
            })

        } else if (webSocketState.connect === typeConnect.Connected && socket) {

            console.log('action', action)
            if ((action as Action).type === 'WebSocket/connect') {
                console.log('Connect action found', action)
            }
        }
        next(action);
    }
}


