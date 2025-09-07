import * as React from "react";
import { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@emotion/react";
import ResumeBtn from "./ResumeBtn";

const pages = [
  { name: 'Home', path: 'home' },
  { name: 'Projects', path: 'projects' },
  { name: 'About', path: 'about' },
  { name: 'Contact', path: 'contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [showNavbar, setShowNavbar]= useState(true)
  const [lastScrollY, setLastScrollY]= useState(0)
  const [activePage, setActivePage]= useState('home')

  const sectionRefs= useRef({})

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id) => {
    setActivePage(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll=()=>{
    if(window.scrollY > lastScrollY){
      setShowNavbar(false);
    }else{
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[lastScrollY]);

  useEffect(()=>{
    const obvserber = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setActivePage(entry.target.id);
          }
        });
      },{threshold:0.8}
    );
    pages.forEach((page)=>{
      const element= document.getElementById(page.path);
      if(element){
        sectionRefs.current[page.path]= element;
        obvserber.observe(element)
      }
    })
    return()=>{
      Object.values(sectionRefs.current).forEach((element) =>{
        obvserber.unobserve(element)
      });
    };
  },[]);

  const theme= useTheme()
  const nameLogo= " <Asem Rashed/>"

  return (
    <AppBar position="fixed" sx={{ 
      height:{xs:'2.5em', md:'3em'}, 
      bgcolor: '#0A1828',display:'flex',
      justifyContent:'center', 
      top: showNavbar ? '0':'-3em', 
      transition:'top 0.3s' }}>
      <Toolbar disableGutters sx={{ 
        width: '95%', margin: 'auto', 
        display:'flex', justifyContent:{md:'center'} }}>
        <Box 
          sx={{ display: 'flex', width:{xs:'100%',lg: '1200px'}, 
          justifyContent: 'space-between', 
          color: theme.palette.text.secondary,
         }}>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flex: 5,
              fontWeight: 700,
              color:theme.palette.secondary.main,
              textDecoration: "none",
              cursor:'default',
              alignItems:'center'
            }}
          >
            <img src="/logo/LOGOultimate.png" alt="" style={{height:'30px'}}/>
            {nameLogo}
          </Typography>

          <Box sx={{ flex: 1, display: { xs: "flex", md: "none"}, justifyContent:'right'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={handleOpenNavMenu}
              sx={{
                width:"1em",
                color: theme.palette.secondary.main,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{marginTop:1}}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => {
                  handleCloseNavMenu();
                  scrollToSection(page.path);
                }}
                sx={{
                  width:'95dvw',
                  height:'4em',
                  bgcolor:'#002349',
                  color:'#fff',
                  display:'flex',
                  justifyContent:'center',
                  transitionDuration:'0.4s',
                  borderBottom:'1px solid',
                  ':hover':{bgcolor:'#333'},
                }}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',
                bgcolor:'#002349', height:'4em'}}>
              <ResumeBtn 
                height='3em' 
                variant="outlined" 
              />
              </Box>
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            component="a"
            fontFamily=' "Saira Stencil One", sans-serif'
            sx={{
              mr: 2,
              textDecoration: "none",
              flex: 1,
              display: { xs: "none", md: "flex" },
              color:theme.palette.secondary.main,
              cursor:'pointer',
              alignItems:'center'
            }}
          > <img src="/logo/LOGOultimate.png" alt="" style={{height:'40px'}}/>
            {nameLogo}
          </Typography>
          <Box sx={{ flexGrow: 0.3, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => scrollToSection(page.path)}
                sx={{ 
                  mx: 1, 
                  color: "white",
                  borderBottom: activePage === page.path ? 
                    `0.2em solid ${theme.palette.secondary.main}`
                    :'none',
                  ':hover':{
                    borderBottom:`0.2em solid ${theme.palette.secondary.main}`,
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ color: "white", flex:1, display:{xs:'none',md:'flex'}, justifyContent:"right"}}>
          <ResumeBtn
            variant="outlined"
            hbg='white'
            hText="text.main"
            bg="secondary.main"
          />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
