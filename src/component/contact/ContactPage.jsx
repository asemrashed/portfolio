import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import "./ContactPage.css";
import Contact from "./Contact";
import Email from "./Email";
import Head from "./Head";
import AnimateOnView from "../AnimatOnView";

export default function ContactPage() {
  const emailInputRef = useRef(null);
  const theme = useTheme();
  return (
    <Box className="page" sx={{ bgcolor: theme.palette.primary.main }}>
      <AnimateOnView delay={100}>
        <Box className="subPage" >
          <Box data-animation="animate-head"> 
            <Head />
          </Box>
          <Box className="contact" 
            data-animation="animate-contact"
            sx={{width:{md:'95%', lg:'100%'}}}
          >
            <Box className="dtls">
              <Contact emailInputRef={emailInputRef} />
            </Box>
            <Box className="emailBox" data-animation="animate-email">
              {<Email ref={emailInputRef} />}
            </Box>
          </Box>
        </Box>
      </AnimateOnView>
    </Box>
  );
}
