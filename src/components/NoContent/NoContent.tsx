import GppMaybeTwoToneIcon from '@mui/icons-material/GppMaybeTwoTone';
import {Stack} from "@mui/material";
export const NoContent = (props: any) => {
    return (
        <Stack direction="row" spacing={1}>
            <GppMaybeTwoToneIcon />
            <p>{props.title}</p>
        </Stack>
    )
}