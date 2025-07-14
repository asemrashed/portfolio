/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Typography, Box } from "@mui/material";
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
            my: { xs: "0em", md: "0.3em" },
          }}
        >
          Getting in touch is easy
        </Typography>
        <Typography
          className="txt"
          variant="body1"
          sx={{
            my: "2em",
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
        <Box className="freelance" sx={{ gap: { xs: "0.5em", md: "0em" } }}>
          <Freelance
            bg={"#1e92ccff"}
            link={"https://www.upwork.com/freelancers/~01af870ab1a4e7d71a"}
            path={
              <svg
                width="100%"
                viewBox="0 -179.5 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M140.106589,96.6278184 C131.785652,96.6278184 123.989458,93.1045388 116.905417,87.3698389 L118.629575,79.2737921 L118.704539,78.9739385 C120.241288,70.3531479 125.113909,55.8852123 140.106589,55.8852123 C151.351098,55.8852123 160.496633,65.0307467 160.496633,76.2752562 C160.459151,87.482284 151.313616,96.6278184 140.106589,96.6278184 L140.106589,96.6278184 Z M140.106589,35.2327965 C120.953441,35.2327965 106.110688,47.6767204 100.076135,68.1417277 C90.8556369,54.310981 83.884041,37.7065886 79.7985359,23.7259151 L59.1836018,23.7259151 L59.1836018,77.3622255 C59.1836018,87.9320644 50.5628111,96.5528551 39.9929722,96.5528551 C29.4231332,96.5528551 20.8023426,87.9320644 20.8023426,77.3622255 L20.8023426,23.7259151 L0.187408492,23.7259151 L0.187408492,77.3622255 C0.112445095,99.3265007 17.9912152,117.355198 39.9554905,117.355198 C61.9197657,117.355198 79.7985359,99.3265007 79.7985359,77.3622255 L79.7985359,68.3666179 C83.8090776,76.7250366 88.7191801,85.1584187 94.6787701,92.6547584 L82.0474378,152.025769 L103.149634,152.025769 L112.295168,108.959297 C120.316252,114.09429 129.53675,117.317716 140.106589,117.317716 C162.708053,117.317716 181.111567,98.801757 181.111567,76.2002928 C181.111567,53.6363104 162.708053,35.2327965 140.106589,35.2327965 L140.106589,35.2327965 Z"
                      fill="#6cf137ff"
                    ></path>
                    <path
                      d="M244.043338,37.5566618 L257.349341,91.1929722 L272.004685,37.5566618 L289.471157,37.5566618 L266.944656,115.068814 L249.478184,115.068814 L235.647438,61.0951684 L221.854173,115.031332 L204.387701,115.031332 L181.861201,37.5191801 L199.327672,37.5191801 L213.983016,91.1554905 L227.289019,37.5191801 L244.043338,37.5191801 L244.043338,37.5566618 Z M331.26325,35.2327965 C308.586823,35.2327965 290.220791,53.6363104 290.220791,76.2752562 C290.220791,98.9516837 308.624305,117.317716 331.26325,117.317716 C353.939678,117.317716 372.343192,98.9516837 372.343192,76.2752562 C372.343192,53.5988287 353.939678,35.2327965 331.26325,35.2327965 Z M331.26325,100.450952 C317.919766,100.450952 307.125037,89.6562225 307.125037,76.3127379 C307.125037,62.9692533 317.957247,52.1745242 331.26325,52.1745242 C344.606735,52.1745242 355.401464,62.9692533 355.401464,76.3127379 C355.401464,89.6187408 344.606735,100.450952 331.26325,100.450952 Z M422.231332,54.9106881 C410.499561,54.9106881 401.016691,64.4310395 401.016691,76.1253294 L401.016691,115.031332 L383.437775,115.031332 L383.437775,37.5566618 L401.016691,37.5566618 L401.016691,49.4758419 C401.016691,49.4758419 408.513031,37.5191801 423.918009,37.5191801 L429.315373,37.5191801 L429.315373,54.9106881 L422.231332,54.9106881 Z M481.227526,73.2767204 C493.708931,66.2301611 502.179795,52.8491947 502.179795,37.5191801 L484.600878,37.5191801 C484.600878,50.450366 474.106003,60.9452416 461.174817,60.9452416 L458.81347,60.9452416 L458.81347,0.149926794 L441.234553,0.149926794 L441.234553,115.031332 L458.81347,115.031332 L458.81347,78.5241581 L460.912445,78.5241581 C462.636603,78.5241581 464.885505,79.6486091 465.897511,81.0354319 L490.860322,115.031332 L511.925037,115.031332 L481.227526,73.2767204 Z"
                      fill="#000000"
                    ></path>
                  </g>
                </g>
              </svg>
            }
          />
          <Freelance
            bg={"rgba(144, 144, 145, 0.405)"}
            link={"https://www.freelancer.com/u/AsemRashed"}
            path={
              <svg
                width="100%"
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
