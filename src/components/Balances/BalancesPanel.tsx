import {Stack, Card, CardContent, IconButton} from "@mui/material";
import {cardLayout} from "../common-styles.ts";
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SettingsIcon from '@mui/icons-material/Settings';
import {BalanceResponse} from "../../store/slices/balances/types";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {NoContent} from "../NoContent/NoContent.tsx";
import {DisplayBalance} from "./DisplayBalance.tsx";

const w100 = {
    width: '100%'
}
export const BalancesPanel = () => {
    const balanceList = useAppSelector<BalanceResponse>(state => state.balances)
    // const balanceList: BalanceResponse = {
    //     "binance":{
    //         "s":{
    //             "total": 500,
    //             "freeFunds":468.8128055555556,
    //             "fundsInUse":31.838097499999993,
    //             "profit":0.650903055555575
    //         },
    //         "f":{
    //             "total": 1500,
    //             "marginFunds":748.9748652094395,
    //             "freeFunds":22.504386209439517,
    //             "fundsInUse":726.4704790000003,
    //             "profit":-2.0502695811207796
    //         },
    //         profit: 10
    //     },
    //     "bybit":{
    //         "s":{
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         },
    //         "f":{
    //             "marginFunds":0,
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         }
    //     },
    //     "kucoin":{
    //         "s":{
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         },
    //         "f":{
    //             "marginFunds":0,
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         }
    //     },
    //     "okx":{
    //         "s":{
    //             "total": 500,
    //             "freeFunds":489.38078618278644,
    //             "fundsInUse":11.498503999999958,
    //             "profit":0.8792901827863905
    //         },
    //         "f":{
    //             "total": 1500,
    //             "marginFunds":753.9489759473718,
    //             "freeFunds":10.336370007372103,
    //             "fundsInUse":743.6126059400002,
    //             "profit":7.897951894744702
    //         },
    //         profit: 11
    //     },
    //     "gateio":{
    //         "s":{
    //             "total": 0,
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         },
    //         "f":{
    //             "total": 0,
    //             "marginFunds":0,
    //             "freeFunds":0,
    //             "fundsInUse":0,
    //             "profit":0
    //         }
    //     }
    // };

    const content = Object.keys(balanceList).length === 0
        ? <NoContent title="No balances" />
        : Object.keys(balanceList).map((exchange: string) => {
            const exchangeData = balanceList[exchange];
            if ((+exchangeData.s.freeFunds + +exchangeData.s.fundsInUse) === 0 || (+exchangeData.f.freeFunds + +exchangeData.f.fundsInUse) === 0) return null;
            return <DisplayBalance key={exchange} exchange={exchange} balance={exchangeData} />
        });

    return (
        <Stack direction="row" sx={w100}>
            <Card variant="outlined" sx={cardLayout}>
                <CardContent sx={{ paddingBottom: '16px!important' }}>
                    {content}
                </CardContent>
            </Card>
            <Stack>
                <IconButton aria-label="settings" color="warning">
                    <SettingsIcon />
                </IconButton>
                <IconButton aria-label="chart" color="warning">
                    <CandlestickChartIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}