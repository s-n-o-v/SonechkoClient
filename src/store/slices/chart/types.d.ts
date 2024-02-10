export interface ChartResponse {
    exchange: string;
    asset: string;
    ask: number | string;
    bid: number | string;
    ts: number | string;
}