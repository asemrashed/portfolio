/* eslint-disable react/prop-types */
import { Box} from "@mui/system";
import "./Freelance.css";

export default function Freelance({path, bg, link, minW='3.3em', maxW="5em", minH='3.3em', maxH="5em"}) {
  return (
    <a href={link}>
      <Box className="link" 
        sx={{
          bgcolor: bg,
          width: {
            xs: minW, 
            md: maxW,
          },
          height:{
            xs: minH,
            md: maxH,
          }
        }}>
        <Box className="linkBtn ">
          {path}
        </Box>
      </Box>
    </a>
  );
}
