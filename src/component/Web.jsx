import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Btn from "./Btn";
import { useTheme } from '@mui/material/styles';

export default function WebCard({ project }) {
  const [isMobile, setIsMobile]= useState(false);
  const [currentImage, setCurrentImage]= useState(project.image);

  const theme= useTheme();

  useEffect(()=>{
    setIsMobile(false);
    setCurrentImage(project.image)
  },[project])
  const toggleView =()=>{
    setIsMobile((prev)=> !prev) // toggle the view
    setCurrentImage((prevImage)=> 
      prevImage === project.image ? project.mobileImage : project.image
    )
  }
  return (
    <>
      <Card
        sx={{
          bgcolor: "rgba(250, 252, 249, 0)",
          boxShadow: "0.2em 0.2em 0.2em 0.1em #817f7f",
          mt:'0.5em',
          width:{xs:'95%',sm:'none'}
        }}
      >
        <CardMedia
          sx={{
            height:{xs: isMobile ? '275px' : '190px', md: isMobile ? '355px':'190px',lg: isMobile ? '360px' : '255px'},
            width: {xs: isMobile ? "130px" : "400px", md: isMobile ? '168px':'400px', lg: isMobile ? '170px' : '550px'},
            borderRadius:{xs:'0.3em', sm:"none"},
            border:'4px solid #f0f0f0',
            overflow: "auto",
            left:'50%',
            right:'50%',
            margin:'auto',
          }}
          image= {currentImage}
        />
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          gap: isMobile ? 'none':'0.5em',
          mt:{xs:'0.4em', sm:'0.7em'},
          textAlign:'left'
        }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            color: theme.palette.primary.contrastText,
            ml:'0.2em'
          }}
        >
          {project.name}
        </Typography>
        <Typography variant="body2" 
          sx={{ mx:{xs:0.8, sm:1}, 
          lineHeight: isMobile ? '1.2em': '1.5em',
          color:'white'
         }}>
          <b>Description : </b>
          {project.description}
          <br/>
          <b>Project Role : </b>
          {project.role}
          <br />
          <b>Tech : </b>
          {project.tools}
          <br/>
          <b>Achievements : </b>
          {project.achievements}
        </Typography>
        <Box
          sx={{
            mt:{xs:0.3, md:1},
            display: "flex",
            justifyContent: "center",
            columnGap: "0.7em",
            alignItems:'center',
            mb:{xs:'0.5em', md:'0.8em'}
          }}
        >
          <Btn
            variant="filled"
            value="GitHub"
            href={project.gitHub}
            width="10em"
            height="2em"
            size="large"
            bg="#fff"
            hoverBg= {theme.palette.secondary.main}
          />
          <Btn
            variant="filled"
            value="visit"
            href={project.visit}
            width="10em"
            height="2em"
            size="large"
            bg="#fff"
            hoverBg= {theme.palette.secondary.main}
          />
          <a onClick={toggleView} style={{cursor:'pointer', display:'flex', alignItems:'center'}}>
            <img 
              src= {isMobile ? "/screen/computer-svgrepo-com.svg":"/screen/mobile-phone-svgrepo-com.svg"}
              alt={isMobile ? "Switch to PC View" : "Switch to Mobile View"}
              style={{height:'1.8em', color:'white'}}
            />
          </a>
        </Box>
        </Box>
        
      </Card>
    </>
  );
}
