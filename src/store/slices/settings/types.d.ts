interface FeeData {
    maker: number;
    taker: number;
}
interface ExchangeFee {
    f: FeeData;
    s: FeeData;
}
interface ExchangesFeeList {
    [key: string]: ExchangeFee
}
interface ScannerData {
    FF_entryThreshold: number|string;
    FF_exitThresholdPercentage: number|string;
    SF_entryThreshold: number|string;
    SF_exitThresholdPercentage: number|string;
    SS_entryThreshold: number|string;
    liveEnvironment: boolean;
    maxTradingAmount: number|string;
    maxTradingAmountPerAsset: number|string;
    minTradingAmount: number|string;
    rateLimiterDuration: number|string;
    rateLimiterPoints: number|string;
    tradingAmountPercentage: number|string;
}
export interface SettingsResponse {
    bot?: any;
    chart?: any;
    fees?: ExchangesFeeList;
    scanner?: ScannerData;
}