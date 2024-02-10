import {configureStore} from "@reduxjs/toolkit";
import {AppState} from "./types.ts";
import webSocketReducer from './slices/webSockets/webSocket.slice.ts';
import settingsReducer from './slices/settings/settings.slice.ts';
import balancesReducer from './slices/balances/balances.slice.ts';
import uptimeReducer from './slices/uptime/uptime.slice.ts';
import positionReducer from './slices/positions/positions.slice.ts';
import chartReducer from './slices/chart/chart.slice.ts';

import {webSocketMiddleware} from "./middleware/webSocket.middleware.ts";

export const store = configureStore<AppState>({
    reducer: {
        webSocket: webSocketReducer,
        positions: positionReducer,
        balances: balancesReducer,
        settings: settingsReducer,
        uptime: uptimeReducer,
        chart: chartReducer,
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webSocketMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
