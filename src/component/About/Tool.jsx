import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Tool({ v, b=('0.1rem')}) {
  return (
    <Box className="topic" >
      <p style={{
        padding:'0.1em 0.2em',
        borderBottom:` ${b} solid black`,
      }}>{v}</p>
    </Box>
  );
}
   