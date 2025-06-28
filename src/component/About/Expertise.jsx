import "./Expertise.css";
import { Box } from "@mui/system";
import {Tools1, Tools2, Tools3, Tools4, Tools5, Tools6, Tools7} from "./Tools";
import AnimateOnView from "../AnimatOnView";
import { useTheme } from "@mui/material/styles";
import ExpMobile from "./ExpMobile";

export default function Expertise() {
  const theme= useTheme();
  return (
    <>
    <AnimateOnView>  
    <div className="exp" data-animation='animate-allExp'>
      <div className="topE" style={{
        backgroundColor: theme.palette.primary.main,}}>
        <Box className="tools">
          <Tools1/>
        </Box>
        <Box className="tools">
          <Tools2/>
        </Box>
        <Box className="tools">
          <Tools3/>
        </Box>
        <Box className="tools">
          <Tools4/>
        </Box>
        <Box className="tools">
          <Tools5/>
        </Box>
        <Box className="tools">
          <Tools6/>
        </Box>
        <Box className="tools">
          <Tools7/>
        </Box> 
      </div>
      <div className="expMobile">
        <ExpMobile/>
      </div>
      <div className="bottomE"
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        fontWeight:'700'
      }}>
        Expertise
      </div>  
    </div>
    </AnimateOnView>
    </>
  );
}
       