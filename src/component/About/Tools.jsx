import Tool from "./Tool";
import './Tools.css'
import AnimateOnView from "../AnimatOnView";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Tools1 = () => {
  const theme= useTheme();
  return (
      <div className="items"> 
        <AnimateOnView delay={400}>      
        <div className="details one" data-animation='animate-exp'>
        <img style={{height:'1.5em', backgroundColor: theme.palette.primary.main}} src="/exp/html-5-svgrepo-com.svg" alt="" />
          <Tool v={"Structure"} />
          <Tool v={"Syntax"} />
          <Tool v={"Text Format"} />
          <Tool v={"Links"} />
          <Tool v={"Navigation"} />
          <Tool v={"Multimedia"} />
          <Tool v={"Input"} />
          <Tool v={"Tables"} />
          <Tool v={"Attribute"} />
          <Tool v={"GeoCoding"} b={"0rem"} />
        </div>
        </AnimateOnView> 
        <div className="title">
          <b>HTML</b>
        </div>
      </div>
  );
};

export const Tools2 = () => {
  const theme= useTheme();
  return (
      <div className="items">
        <AnimateOnView delay={400}>
        <div className="details two" data-animation='animate-exp'>
        <img style={{height:'1.5em', backgroundColor: theme.palette.primary.main}} src="/exp/css-3-svgrepo-com.svg" alt="" />
          <Tool v={"Syntex"} />
          <Tool v={"Selectors"} />
          <Tool v={"Box model"} />
          <Tool v={"Typography"} />
          <Tool v={"Colors"} />
          <Tool v={"Backgroud"} />
          <Tool v={"Positioning"} />
          <Tool v={"Flexbox"} />
          <Tool v={"Grid"} />
          <Tool v={"Transform"} />
          <Tool v={"Animation"} />
          <Tool v={"Layout"} />
          <Tool v={"Responsive"} />
          <Tool v={"Media"} b={"0rem"} />
        </div>
        </AnimateOnView>
        <div className="title">
          <b>css</b>
        </div>
      </div>
  );
};
export const Tools3 = () => {
  const theme= useTheme();
  return (
      <div className="items">
      <AnimateOnView delay={400}>
        <div className="details three" data-animation='animate-exp'>
        <img style={{height:'1.5em', backgroundColor: theme.palette.primary.main}} src="/exp/js-official-svgrepo-com.svg" alt="" />
          <Tool v={"Variables"} />
          <Tool v={"DataTypes"} />
          <Tool v={"Operators"} />
          <Tool v={"Conditions"} />
          <Tool v={"Scope"} />
          <Tool v={"Functions"} />
          <Tool v={"=> Functions"} />
          <Tool v={"Objects"} />
          <Tool v={"Arrays"} />
          <Tool v={"Loops"} />
          <Tool v={"Destructuring"} />
          <Tool v={"DOM"} />
          <Tool v={"Events"} />
          <Tool v={"Prototypes"} />
          <Tool v={"Classes"} />
          <Tool v={"Promises"} />
          <Tool v={"Async"} />
          <Tool v={"ErrorHandling"} />
          <Tool v={"Git"} b={"0rem"} />
        </div>
      </AnimateOnView>
        <div className="title">
          <b>JavaScript</b>
        </div>
      </div>
  );
};
export const Tools4 = () => {
  const theme= useTheme();
  return (
      <div className="items">
      <AnimateOnView delay={400}>
        <div className="details four" data-animation='animate-exp'> 
        <img style={{height:'1.5em', backgroundColor: theme.palette.primary.main}} src="/exp/nodejs-icon-svgrepo-com.svg" alt="" />
          <Tool v={"Module"} />
          <Tool v={"npm"} />
          <Tool v={"Json"} />
          <Tool v={"Async"} />
          <Tool v={"HTTP"} />
          <Tool v={"WebServer"} />
          <Tool v={"Express.js"} />
          <Tool v={"ErroHandling"} />
          <Tool v={"Security"} />
          <Tool v={"Hash"} />
          <Tool v={"Bcrypt"} />
          <Tool v={"Passport"} />
          <Tool v={"dotENV"} />
          <Tool v={"Helmet"} b={"0rem"} />
        </div>
      </AnimateOnView>
        <div className="title">
          <b>NodeJS</b>
        </div>
      </div>
  );
};
export const Tools5 = () => {
  const theme= useTheme();
  return (
      <div className="items">
      <AnimateOnView delay={400}>
        <div className="details five" data-animation='animate-exp'>
        <img style={{height:'1.8em', backgroundColor: theme.palette.primary.main}} src="/exp/express-svgrepo-com.svg" alt="" />
          <Tool v={"Routing"} />
          <Tool v={"Middleware"} />
          <Tool v={"EJS"} />
          <Tool v={"Parsing"} />
          <Tool v={"Authentication"} />
          <Tool v={"Authorization"} />
          <Tool v={"RESTful APIs"} />
          <Tool v={"MongoDB Basic"} />
          <Tool v={"ErroHandling"} />
          <Tool v={"Security"} />
          <Tool v={"Session"} />
          <Tool v={"Cookies"} />
          <Tool v={"Deployment"} b={"0rem"} />
        </div>
      </AnimateOnView>
        <div className="title">
          <b>Express</b>
        </div>
      </div>
  );
};
export const Tools6 = () => {
  const theme= useTheme();
  return (
      <div className="items">
      <AnimateOnView delay={400}>
        <div className="details six" data-animation='animate-exp'>
        <img style={{height:'1.5em', backgroundColor: theme.palette.primary.main}} src="/exp/mongodb-opened-svgrepo-com.svg" alt="" />
          <Tool v={"CRUD"} />
          <Tool v={"Mongoose"} />
          <Tool v={"Schema & Model"} />
          <Tool v={"Static Methods"} />
          <Tool v={"MIddleware"} />
          <Tool v={"JoiSchema"} />
          <Tool v={"Relation"} />
          <Tool v={"Denormalization"} />
          <Tool v={"mongoosInject"} />
          <Tool v={"MongoAtlas"} />
          <Tool v={"Error"} b={"0rem"} />
        </div>
      </AnimateOnView>
        <div className="title">
          <b>MongoDB</b>
        </div>
      </div>
  );
};
export const Tools7 = () => {
  const theme= useTheme();
  return (
      <div className="items">
      <AnimateOnView delay={400}>
        <div className="details seven" data-animation='animate-exp'>
          <Box sx={{backgroundColor: theme.palette.primary.main}}>
          <img style={{height:'1.5em'}} src="/exp/react-1-logo-svgrepo-com.svg" alt="" />
          <img style={{height:'1.5em'}} src="/exp/material-ui-svgrepo-com.svg" alt="" />
          <img style={{height:'1.5em'}} src="/exp/bootstrap-4-logo-svgrepo-com.svg" alt="" />
          </Box>
          <Tool v={"Bootstrap"} />
          <b><Tool v={"React.js"} /></b>
          <Tool v={"MUI"} b={"0rem"} />
        </div>
        </AnimateOnView>
        <div className="title">
          <b>FramWork</b>
        </div>
      </div>
  );
};
