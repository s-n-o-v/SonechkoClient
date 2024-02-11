import {Balance} from "../../store/slices/balances/types";
import {Grid, Typography} from "@mui/material";

interface PropsType {
    exchange: string;
    balance: Balance;
}

const coloredAmount = (amount: number | string) => {
    const color: string = +amount > 0 ? "#13a310" : "#ba1111";
    return <span style={{ color }}>{amount}</span>
}
const showProfit = (profit: number | string) => {
    return <Typography variant="h5" align="right" component="div" gutterBottom>$ {coloredAmount(profit)}</Typography>
}

export const DisplayBalance = (props: PropsType) => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={10} sx={{borderBottom: 1}}><Typography variant="h5" align="left" component="div">{props.exchange}</Typography></Grid>
            <Grid item xs={2} sx={{borderBottom: 1}}>{showProfit(props.balance.profit ? (+props.balance.profit).toFixed(2) : 0)}</Grid>

            <Grid item xs={4}><Typography align="right" variant="caption" display="block" color="primary">Balance</Typography></Grid>
            <Grid item xs={2}><Typography align="right" variant="caption" display="block" color="primary">Margin Funds</Typography></Grid>
            <Grid item xs={2}><Typography align="right" variant="caption" display="block" color="primary">Free funds</Typography></Grid>
            <Grid item xs={2}><Typography align="right" variant="caption" display="block" color="primary">Funds in use</Typography></Grid>
            <Grid item xs={2}><Typography align="right" variant="caption" display="block" color="primary">Profit</Typography></Grid>

            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>Spot</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{props.balance.s.total ? (+props.balance.s.total).toFixed(2) : 0}</Typography></Grid>
            <Grid item xs={4}><Typography align="right" sx={{ fontSize: 14 }}>{(+props.balance.s.freeFunds).toFixed(2)}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{(+props.balance.s.fundsInUse).toFixed(2)}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }} gutterBottom>{coloredAmount((+props.balance.s.profit).toFixed(2))}</Typography></Grid>

            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>Futures</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{props.balance.f.total ? (+props.balance.f.total).toFixed(2) : 0}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{(+props.balance.f.marginFunds).toFixed(2)}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{(+props.balance.f.freeFunds).toFixed(2)}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }}>{(+props.balance.f.fundsInUse).toFixed(2)}</Typography></Grid>
            <Grid item xs={2}><Typography align="right" sx={{ fontSize: 14 }} gutterBottom>{coloredAmount((+props.balance.f.profit).toFixed(2))}</Typography></Grid>

        </Grid>
    )
}