import { Box } from "@mui/system";
import './ExpMobile.css'
import AnimateOnView from "../AnimatOnView";
import { Typography } from "@mui/material";
  
export default function ExpMobile() {
return(
    <Box className="technology">
        <AnimateOnView delay={100}>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech o1'>
                    HTML
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/html-5-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className="tech t2">
                    css
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/css-3-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech t3' >
                    Bootstrap
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/bootstrap-4-logo-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech f4'>
                    JavaScript
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/js-official-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech f5'>
                    ReactJs
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/react-1-logo-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech s6'>
                    MaterialUI
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/material-ui-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech s7' >
                    NodeJs
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/nodejs-icon-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech e8'>
                    Express
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/express-svgrepo-com.svg" alt="" />
            </Box>
            <Box className="skillBox" data-animation='animateTech'>
                <Typography variant="h5" className='tech n9'>
                    MongoDB
                </Typography>
                <img style={{height:'1.5em'}} src="/exp/mongodb-opened-svgrepo-com.svg" alt="" />
            </Box>
        </AnimateOnView>
    </Box>
)
}