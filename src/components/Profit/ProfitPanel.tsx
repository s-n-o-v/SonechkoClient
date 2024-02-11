import {useEffect, useMemo, useState} from "react";
import {Card, CardContent, Typography, CardActions} from "@mui/material";
import {cardLayout} from "../common-styles.ts";
import styles from './ProfitPanel.module.scss';
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {BalanceResponse} from "../../store/slices/balances/types";
import {UptimeResponse} from "../../store/slices/uptime/types";
import {NoContent} from "../NoContent/NoContent.tsx";

const showProfit = (profit: number | string) => {
    const color: string = +profit > 0 ? "#13a310" : "#ba1111";
    return <Typography variant="h5" align="right" component="div" gutterBottom><span style={{ color }}>{(+profit).toFixed(3)}</span> $</Typography>
}
const uptimeToTime = (ms: number): string => {

    const tm = (t: number) => `00${t}`.slice(-2);
    const hh = Math.floor(ms / 1000 / 60 / 60);
    ms -= hh * 1000 * 60 * 60;
    const mm = Math.floor(ms / 1000 / 60);
    ms -= mm * 1000 * 60;
    const ss = Math.floor(ms / 1000);

    return `${tm(hh)}:${tm(mm)}:${tm(ss)}`;
}
interface PnLData {
    profit: number,
    unrealized: number,
    volume: number,
}
const initialState: PnLData = {
    profit: 0,
    unrealized: 0,
    volume: 0
}

export const ProfitPanel = () => {

    const [state, setState] = useState(initialState);
    const [stateUT, setUptime] = useState('');

    const balanceList = useAppSelector<BalanceResponse>(state => state.balances)
    const uptimeData = useAppSelector<UptimeResponse>(state => state.uptime)

    useEffect(() => {
        console.log('calculate profits');
        let profit = 0;
        let volume = 0;

        Object.keys(balanceList).forEach((key: string) => {
            if (balanceList[key]?.profit) {
                profit += (balanceList[key].profit ?? 0)
                volume += (+(balanceList[key].s.fundsInUse ?? 0) + +(balanceList[key].f.fundsInUse ?? 0))
            }
        })

        setState({
            profit,
            volume,
            unrealized: -0.3,
        })

    }, [balanceList]);

    useEffect(() => {

        setUptime(uptimeToTime(uptimeData.uptime))

    }, [uptimeData]);

    const profitContent = useMemo(() => {
        return (
            <>
                <Typography sx={{ fontSize: 14 }}>Profit</Typography>
                { showProfit(state.profit) }
                <Typography sx={{ fontSize: 14 }}>Unrealized</Typography>
                <Typography align="right" sx={{ fontSize: 16 }} gutterBottom><span style={{color: "#ba1111"}}>{state.unrealized.toFixed(3)}</span> $</Typography>
                <Typography sx={{ fontSize: 14 }}>Volume</Typography>
                <Typography align="right" sx={{ fontSize: 16 }}  gutterBottom>$ {state.volume.toFixed(3)}</Typography>
            </>
        )
    }, [balanceList])

    const content = stateUT === '0:0:0'
        ? <NoContent title="No data" />
        : (<>
            {profitContent}

            <CardActions disableSpacing sx={{ p: 0, m: 0 }} className={styles.uptime}>
                {stateUT}
            </CardActions>
        </>)


    return (
        <Card variant="outlined" sx={cardLayout}>
            <CardContent sx={{ paddingBottom: '16px!important' }}>
                {content}
            </CardContent>
        </Card>
    )
}