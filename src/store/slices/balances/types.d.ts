interface ExchangeFuturesBalance {
    freeFunds: number|string;
    fundsInUse: number|string;
    marginFunds: number|string;
    profit: number|string;
}
interface ExchangeSpotBalance {
    freeFunds: number|string;
    fundsInUse: number|string;
    profit: number|string;
}

export interface Balance {
    f: ExchangeFuturesBalance;
    s: ExchangeSpotBalance;
}

export interface BalanceResponse {
    [key: string]: Balance
}