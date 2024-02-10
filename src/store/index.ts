import {configureStore} from "@reduxjs/toolkit";
import {AppState} from "./types.ts";
import webSocketReducer from './slices/webSockets/webSocket.slice.ts';
import settingsReducer from './slices/settings/settings.slice.ts';
import balancesReducer from './slices/balances/balances.slice.ts';
// import MessagesReducer from './slices/messages/messages.slice.ts';
import {webSocketMiddleware} from "./middleware/webSocket.middleware.ts";

export const store = configureStore<AppState>({
    reducer: {
        webSocket: webSocketReducer,
        balances: balancesReducer,
        settings: settingsReducer,
        // messages: MessagesReducer
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webSocketMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
