import { Container, Grid } from '@mui/material';
import {ProfitPanel} from "../../components/Profit/ProfitPanel.tsx";
import {BalancesPanel} from "../../components/Balances/BalancesPanel.tsx";

export const MainPage = () => {

    return (
        <Container maxWidth={false} >
            <Grid container>
                <Grid container xs={12} sm={4} md={2}>
                    <ProfitPanel />
                </Grid>
                <Grid container xs={12} sm={8} md={10}>
                    <BalancesPanel />
                </Grid>
                <Grid container xs={12} sx={{ backgroundColor: 'green' }}>
                    <h4>Positions</h4>
                </Grid>
            </Grid>
        </Container>
    )
}