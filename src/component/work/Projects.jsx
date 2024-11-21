import { Box, height } from "@mui/system";
import "./Projects.css";
import WebCard from "../Web";
import { useState, useEffect, useRef } from "react";
import List from "../List";
import { useTheme } from "@mui/material/styles";
import TimeDelay from "../TimeDelay";
import AnimateOnView from "../AnimatOnView.jsx";

export default function Projects({ projects }) {
  const theme = useTheme();
  // const Delay = TimeDelay(500);
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <Box sx={{
      bgcolor: theme.palette.primary.main,
      overflow: "hidden",
      display:'flex',
      justifyContent:'center'
    }}>
        <Box
          className='mul'
        >
          <div>
          <AnimateOnView delay={0}>
            <h1
              className="heading"
              data-animation='animate-heading'
              style={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              Projects
            </h1>
            </AnimateOnView>
          </div>
            <AnimateOnView delay={200}>
            <div className="overview">
              <div className="list" data-animation='animate-list'>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "left",
                    borderRadius: 2,
                  }}
                >
                  <List
                    projects={projects}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                    dataAnimation='animate-item'
                  />
                </Box>
              </div>
              <div className="project" data-animation="animate-project">
                <WebCard project={activeProject} />  
              </div>
            </div>
            </AnimateOnView>
        </Box>
    </Box>
  );
}
