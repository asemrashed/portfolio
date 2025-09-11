import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography} from "@mui/material";
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
            my: { xs: 0.7, md: 0.8 },
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
              <Typography
                variant="body2" 
                sx={{
                  lineHeight:{xs:'1.2em', md:'1.5em'},
                  color: theme.palette.primary.contrastText,
                  mt: 0.5,
                  fontSize:{xs:'0.85rem', md:'1rem'}
                }}>
                  
              <p>
                <b>Project Type :</b> {project.projectType}
              </p>
              <p>
                <b>TechStack :</b> {project.tools}
              </p>
                </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: { xs: "150px", md: "200px", lg:'40%'}, borderRadius:'5px'}}
              image={project.image}
              alt="project image"
            />
          </Box>
        </Card>
      ))}
    </>
  );
}
