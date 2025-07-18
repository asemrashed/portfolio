import { Box } from "@mui/system";
import "./Projects.css";
import WebCard from "../Web";
import { useState } from "react";
import List from "../List";
import { useTheme } from "@mui/material/styles";
import AnimateOnView from "../AnimatOnView.jsx";

// eslint-disable-next-line react/prop-types
export default function Projects({ projects }) {
  const theme = useTheme();
  // const Delay = TimeDelay(500);
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <Box sx={{
      bgcolor: theme.palette.secondary.main,
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
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
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
                    my:3,
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
