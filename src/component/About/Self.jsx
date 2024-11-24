import { Card, Paper, Typography } from "@mui/material";
import "./Self.css";
import AnimateOnView from "../AnimatOnView";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function Self() {
  const theme = useTheme();
  return (
    <AnimateOnView delay={200}>
      <Card
        className="self"
        data-animation="animate-self"
        sx={{ bgcolor: theme.palette.primary.main }}
      >
        <Typography
          variant="h4"
          className="topS"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          About My-Self
        </Typography>
        <Box
          className="bottomS"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6" sx={{ mt: { xs: 1.5, md:0} }}>
            I'm <b>MOHAMMAD ASEM RASHED</b>
          </Typography>
          <Typography variant="body1" sx={{ mt: { xs: 0, md: 0 } }}>
            - A passionate <b>front-end developer</b> with expertise in creating{" "}
            <b>responsive</b>, <b>interactive</b> websites. I also have
            experience with <b>backend technologies</b> to build complete web
            solutions.
          </Typography>
          <Typography variant="body1" sx={{ mt: { xs: 0, md: 0.8 } }}>
            - In <b>2022</b>, I discovered the magic of turning imagination into 
            visual reality through the art of <b>coding</b>, sparking my journey into <b>programming</b>.
          </Typography>
          <Typography variant="body1" sx={{ mt: { xs: 0, md: 0.8 } }}>
            - I am a diploma graduate in <b>Mechanical Engineering</b>, now
            channeling my analytical and creative skills into the tech industry.
          </Typography>
          <Typography variant="body2" sx={{ mt: { xs: 0, md: 0.8 } }}>
            - Originally from <b>Chittagong</b>, I currently reside in{" "}
            <b>Dhaka, Bangladesh</b>.
          </Typography>
        </Box>
      </Card>
    </AnimateOnView>
  );
}
