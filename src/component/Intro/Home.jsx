import { Box, Typography, Button } from "@mui/material";
import "./Home.css";
import { useSpring, animated } from "@react-spring/web";
import TimeDelay from "../TimeDelay";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ResumeBtn from "../ResumeBtn";

export default function Home() {
  const theme = useTheme();
  const styles = useSpring({
    from: { opacity: 0.4 },
    to: { opacity: 1 },
    config: { duration: 200 }, // 1.2 seconds animation
  });
  const Delay = TimeDelay(1000);
  const DelayG2 = TimeDelay(250);
  const DelayName = TimeDelay(500);
  const Delayimg = TimeDelay(300);

  const [text, setText] = useState("");
  const fullText = "<ASEM RASHED/>";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 80); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <animated.div
      style={{
        styles,
        backgroundColor: theme.palette.primary.main,
      }}
      className="main"
    >
      <Box
        className="left"
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "left",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          className="tab"
          sx={{
            color: theme.palette.primary.contrastText,
            width: { xs: "100%", lg: "80%" },
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "center", md: "left" },
            ml: { xs: "", md: "1em" },
          }}
        >
          <Typography
            variant="h4"
            className="greet1"
            style={{ lineHeight: "60px" }}
          >
            Hey there
          </Typography>
          {DelayG2 && (
            <Typography
              variant="h4"
              className="greet2"
              sx={{
                color: theme.palette.primary.contrastText,
                display: { xs: "block", md: "none" },
              }}
            >
              I'm
            </Typography>
          )}
          <Box
            sx={{
              overflow: { xs: "", md: "hidden" },
              display: "flex",
              alignItems: "center",
              height: "4em",
            }}
          >
            {DelayName && (
              <Typography
                variant="h1"
                // fontFamily={"Algerian"}
                className="typing-effect"
                sx={{
                  color: theme.palette.primary.contrastText,
                  display: "flex",
                  alignItems: "center",
                  height: { xs: "1.5em"},
                  fontWeight: "700",
                }}
              >
                <Typography
                  variant="h4"
                  className="greet2"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    mr: "0.5em",
                    mt: "0.4em",
                    fontFamily: ' "Saira", sans-serif',
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {" "}
                  I'm
                </Typography>
                {text}
              </Typography>
            )}
          </Box>
          {Delay && (
            <Box className="skills">
              <Box className="skill">
                <div className="sName">Front-End Web Developer</div>
                <div className="sName">Web Designer</div>
                <div className="sName">Knowledgeable in Back-End Development</div>
              </Box>
            </Box>
          )}
          {Delay && (
            <Box className="btn">
              <ResumeBtn />
            </Box>
          )}
        </Box>
      </Box>
      {Delayimg && (
        <Box
          className="right"
          sx={{
            display: "flex",
          }}
        >
          <div className="box">
            <div className="background"></div>
            <img className="img" src="/hero/Hand coding-amico.svg" alt="" />
          </div>
        </Box>
      )}
    </animated.div>
  );
}
