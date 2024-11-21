import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Typography, Box, Button } from "@mui/material";
import "./Contact.css";
import Btn from "../Btn";
import { Modal } from "@mui/material";
import Email from "./Email";
import Link from "../link/Link";
import Freelance from "../link/Freelance";
import { useTheme } from "@mui/material/styles";

export default function Contact({ emailInputRef }) {
  const emailRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => {
    if (!isMobile) {
      setTimeout(() => {
        if (emailInputRef.current) {
          emailInputRef.current.focus();
        }
      }, 200);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box className="full">
      <Box className="contant" sx={{ color: theme.palette.text.secondary }}>
        <Typography
          variant="h3"
          sx={{ 
            fontWeight: 700, 
            my: { xs: "0em", md: "0.3em" }
          }}
        >
          Getting in touch is easy
        </Typography>
        <Typography
          className="txt"
          variant="body1"
          sx={{
            my: '2em',
            lineHeight: { xs: "1.8em" },
          }}
        >
          If you need a modern and powerful website for your business, startup
          or yourself, I am available for work.
        </Typography>
      </Box>
      <Box>
        <Btn
          variant="filled"
          value="Start a Project"
          width="13em"
          minWidth="10em"
          height="2em"
          size="large"
          onClick={handleOpen}
        />
        {isMobile && (
          <Modal open={open} onClose={handleClose}>
            <Box sx={{ padding: 2 }}>
              <Email ref={emailRef} cancel={handleClose} />
            </Box>
          </Modal>
        )}
      </Box>
      <Box
        sx={{
          mt: "01.5em",
          textAlign: { xs: "center", md: "left" },
          borderLeft: {
            xs: "none",
            md: `2px solid ${theme.palette.secondary.main}`,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, ml: "1em" }}
        >
          Or hire me on
        </Typography>
        <Box className="freelance" sx={{gap:{xs:'0.5em', md:'0em'}}}>
          <Freelance
            bg={"rgb(37, 243, 54)"}
            link={"https://www.fiverr.com/asem_rashed"}
            path={
              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>fiverr</title>{" "}
                  <path d="M2.139 20.299h2.002v-4.446h1.904v4.446h1.988v-6.091h-3.893v-0.377c-0-0.003-0-0.006-0-0.010 0-0.368 0.298-0.666 0.666-0.666 0.032 0 0.064 0.002 0.095 0.007l-0.004-0h1.147v-1.645h-1.48c-0.068-0.008-0.148-0.012-0.228-0.012-1.215 0-2.2 0.985-2.2 2.2 0 0.002 0 0.004 0 0.005v-0 0.5h-1.133v1.645h1.135v4.445zM10.387 20.299h1.769l2.208-6.091h-2.024l-1.075 3.545-1.097-3.545h-2.016l2.233 6.091zM18.074 16.549c-0.034-0.566-0.501-1.013-1.073-1.013-0.013 0-0.027 0-0.040 0.001l0.002-0c-0.030-0.003-0.065-0.005-0.101-0.005-0.565 0-1.024 0.453-1.034 1.016v0.001zM20.026 17.73h-4.198c0.048 0.604 0.55 1.076 1.163 1.076 0.033 0 0.066-0.001 0.099-0.004l-0.004 0c0.039 0.005 0.083 0.008 0.128 0.008 0.41 0 0.761-0.252 0.907-0.61l0.002-0.007 1.781 0.5c-0.474 1.017-1.488 1.709-2.663 1.709-0.055 0-0.109-0.002-0.163-0.004l0.008 0c-0.035 0.001-0.077 0.002-0.118 0.002-1.694 0-3.068-1.373-3.068-3.068 0-0.027 0-0.054 0.001-0.081l-0 0.004c-0.003-0.050-0.005-0.108-0.005-0.166 0-1.638 1.328-2.966 2.966-2.966 0.035 0 0.070 0.001 0.105 0.002l-0.005-0c0.060-0.004 0.13-0.007 0.2-0.007 1.596 0 2.89 1.294 2.89 2.89 0 0.044-0.001 0.088-0.003 0.132l0-0.006c0 0.28-0.012 0.462-0.025 0.596zM28.506 15.854h-1.062c-0.682 0-1.050 0.512-1.050 1.365v3.082h-2.012v-4.446h-0.855c-0.684 0-1.050 0.512-1.050 1.365v3.082h-2.012v-6.091h2.012v0.925c0.199-0.547 0.714-0.931 1.32-0.931 0.047 0 0.094 0.002 0.139 0.007l-0.006-0h2.464v0.925c0.198-0.547 0.714-0.931 1.319-0.931 0.047 0 0.093 0.002 0.139 0.007l-0.006-0h0.659zM29.751 20.484c0 0 0.001 0 0.001 0 0.687 0 1.243-0.557 1.243-1.243s-0.557-1.243-1.243-1.243c-0.687 0-1.243 0.557-1.243 1.243 0 0.228 0.062 0.443 0.169 0.627l-0.003-0.006c0.219 0.375 0.618 0.622 1.076 0.623h0z"></path>{" "}
                </g>
              </svg>
            }
          />
          <Freelance
            bg={"rgba(144, 144, 145, 0.405)"}
            link={"https://www.freelancer.com/u/AsemRashed"}
            path={
              <svg
                fill="#2db6fb"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Freelancer icon</title>
                  <path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z"></path>
                </g>
              </svg>
            }
          />
        </Box>
        <Box
          sx={{
            mt: "0.5em",
            borderTop: `2px solid ${theme.palette.secondary.main}`,
          }}
        >
          <Link />
        </Box>
      </Box>
    </Box>
  );
}
