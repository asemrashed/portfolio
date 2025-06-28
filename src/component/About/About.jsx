import { Box } from "@mui/system";
import "./About.css";
import Self from "./Self";
import Expertise from "./Expertise";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      className="mainA"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Box className='subMain' sx={{width:{xs:'98%',md:'95%',lg:'90%'}}}>
        <Box className="leftA">
          <Box className="A"  sx={{width:'95%'}}>
            <Self />
          </Box>
        </Box>
        <Box className="rightA">
          <Box className="B" sx={{width:'100%'}}>
            <Expertise />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
