export interface Position {
    idKey?: string;
    asset: string;
    buyer: string;
    buyerBuyBaseAmount?: number|string;
    buyerBuyFee?: number|string;
    buyerBuyPrice?: number|string;
    buyerBuyQuoteAmount?: number|string;
    buyerSellBaseAmount?: number|string;
    buyerSellFee?: number|string;
    buyerSellPrice?: number|string;
    buyerSellQuoteAmount?: number|string;
    event: string;
    id: number;
    initialSpread?: number|string;
    iterations?: number;
    positionDecreased?: number|string;
    realizedPnL?: number|string;
    seller: string;
    sellerBuyBaseAmount?: number|string;
    sellerBuyFee?: number|string;
    sellerBuyPrice?: number|string;
    sellerBuyQuoteAmount?: number|string;
    sellerSellBaseAmount?: number|string;
    sellerSellFee?: number|string;
    sellerSellPrice?: number|string;
    sellerSellQuoteAmount?: number|string;
    spotInitialSpread?: number|string;
    spotSpread?: number|string;
    spread?: number|string;
    status?: string;
    takeProfit?: any;
    type: string;
    unrealizedPnLFutures?: number|string;
    unrealizedPnLSpot?: number|string;
    unrealizedPnLTotal?: number|string;
}

export interface PositionResponse {
    [key: string]: Position
}

export interface PositionsList {
    list: Position[]
}