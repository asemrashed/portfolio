import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Freelance from "../link/Freelance";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const scollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const theme= useTheme();
  return (
    <Box
      className="footer"
      sx={{
        height: "4em",
        display: "flex",
        alignItems: "center",
        bgcolor: theme.palette.primary.contrastText,
        color: theme.palette.text.therdly,
        justifyContent: "space-around",
      }}
    >
      <Typography variant="body2" 
        sx={{ 
          ml:'0.4em',
          textAlign:'left'   
        }}>
        © 2024 Crafted with care by AsemRshed. All rights reserved.
      </Typography>
      <Box sx={{display:'flex', alignItems:'center',
        mx:{xs:'1em', md:'0em'}}}>
        <Typography 
          variant="body2" 
          color={theme.palette.text.primary}>
             Back to Top</Typography>
        <button onClick={scollToTop}>
          <Freelance
            maxW="3em" minW="2.3em"
            maxH="3em" minH="2.3em"
            path={
              <svg
                fill="#fdfcfc"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-51.2 -51.2 614.42 614.42"
                xmlSpace="preserve"
                transform="rotate(90)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <path
                    transform="translate(-51.2, -51.2), scale(38.40125)"
                    fill="#0D1321"
                    d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                    strokeWidth="0"
                  ></path>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M271.094,368.925L158.176,256.007L271.093,143.09c6.101-6.101,7.936-15.275,4.629-23.253 c-3.307-7.979-11.093-13.163-19.712-13.163H147.872c-5.717,0-11.179,2.283-15.168,6.336l-126.528,128 c-8.235,8.32-8.235,21.675,0,29.995l126.528,128c3.989,4.053,9.451,6.336,15.168,6.336h108.139 c8.619,0,16.405-5.184,19.712-13.163S277.195,375.026,271.094,368.925z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M505.761,368.925L392.843,256.007L505.76,143.09c6.101-6.101,7.936-15.275,4.629-23.253 c-3.307-7.979-11.093-13.163-19.712-13.163H382.539c-5.717,0-11.179,2.283-15.168,6.336l-126.528,128 c-8.235,8.32-8.235,21.675,0,29.995l126.528,128c3.989,4.053,9.451,6.336,15.168,6.336h108.139 c8.619,0,16.405-5.184,19.712-13.163S511.862,375.026,505.761,368.925z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
        </button>
      </Box>
    </Box>
  );
}
