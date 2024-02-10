import {WebSocketState} from "./slices/webSockets/types.ts";
import {BalanceResponse} from "./slices/balances/types";
import {SettingsResponse} from "./slices/settings/types";

// import {MessagesState} from "./slices/messages/types.ts";

export interface AppState {
    webSocket: WebSocketState,
    balances: BalanceResponse,
    settings: SettingsResponse,
    // messages: MessagesState
}