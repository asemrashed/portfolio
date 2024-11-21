import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default function Head(){
    const theme= useTheme();
    return(
        <Box>
            <Typography variant="h2"
            sx={{
                color:theme.palette.primary.contrastText, 
                fontWeight:600,
                marginBottom:{xs:'0.7em', md:'0em'}
            }}>
                Make Contact
            </Typography>
        </Box>
    )
}