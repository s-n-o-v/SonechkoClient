interface ExchangeFuturesBalance {
    total?: number;
    freeFunds: number|string;
    fundsInUse: number|string;
    marginFunds: number|string;
    profit: number|string;
}
interface ExchangeSpotBalance {
    total?: number;
    freeFunds: number|string;
    fundsInUse: number|string;
    profit: number|string;
}

export interface Balance {
    f: ExchangeFuturesBalance;
    s: ExchangeSpotBalance;
    profit?: number;
}

export interface BalanceResponse {
    [key: string]: Balance
}

