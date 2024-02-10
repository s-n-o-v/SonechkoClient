import {WebSocketState} from "./slices/webSockets/types.ts";
import {BalanceResponse} from "./slices/balances/types";
import {SettingsResponse} from "./slices/settings/types";
import {UptimeResponse} from "./slices/uptime/types";
import {PositionsList} from "./slices/positions/types";
import {ChartResponse} from "./slices/chart/types";

export interface AppState {
    webSocket: WebSocketState,
    positions: PositionsList,
    balances: BalanceResponse,
    settings: SettingsResponse,
    uptime: UptimeResponse,
    chart: ChartResponse,
}