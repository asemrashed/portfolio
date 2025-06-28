import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, height, positions } from "@mui/system";
import "./List.css";
  
export default function List({ projects, activeProject, setActiveProject }) {
  const theme = useTheme();
  return (
    <>
      {projects.map((project, index) => (
        <Card
        key={index}
          className="card"
          variant="scaled"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "95%", md: "95%" },
            my: { xs: 0.5, md: 0.8 },
            textAlign: "left",
            bgcolor: theme.palette.primary.main,
            ":hover": {
              transform: "scale(1.01)",
              transition: "0.2s",
            },
          }}
        >
          <Box
            onClick={() => setActiveProject(project)}
            className={`project-item ${
              project === activeProject ? "active" : ""
            }`}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center'
            }}
          >
            <CardContent
              className="data"
              sx={{
                width: "70%",
                lineHeight: { md: 1.3 },
                color: theme.palette.secondary.main,
                ":hover": {
                  color: theme.palette.text.secondary,
                },
              }}
            >
              <h2>{project.name}</h2> <hr />
              {/* <p><b>Tools: </b>{project.tools}</p> */}
              <p style={{ marginTop: 3 }}>
                {project.description}
              </p>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: { xs: "150px", md: "200px", lg:'40%' }}}
              image={project.image}
              alt=""
            />
          </Box>
        </Card>
      ))}
    </>
  );
}
