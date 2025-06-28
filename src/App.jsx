import "./App.css";
import { createTheme, ThemeProvider, Container } from "@mui/material";
import Home from "./component/Intro/Home";
import ResponsiveAppBar from "./component/AppBar";
import ProjectsPage from "./component/work/ProjectPage";
import About from "./component/About/About";
import ContactPage from "./component/contact/ContactPage";
import Footer from "./component/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D1321',
      contrastText: '#FFDB58'
    },
    secondary: {
      main: '#FFDB58',
      contrastText: '#0D1321'
    },
    text:{
      primary:'#000',
      secondary:'#fff',
      therdly:'#565756',
    },
    background:{
      default:'#b7b8b7',
      primary:'#228808'
    }
  },
  
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '#root': {
            backgroundColor: "#e0a96d", // Applies theme background color to root
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiFilledInput-root': {
              '&:before': {
                borderBottom: '1px solid gray', // Initial underline
                transition: 'border-color 0.3s', // Smooth transition
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottom: '1px solid black', // On hover
              },
              '&:after': {
                borderBottom: '2px solid #228808', // On focus
              },
            },
            '& .MuiInputLabel-root': {
              color: '#1c421c', // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#228808', // Label color when focused
            },
          },
        },
      },
    },
    

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 895,
      lg: 1200,
      xl: 1536,
    },
  },
});
theme.typography.h1={
  fontSize:'4.5rem',
  '@media(max-width:895px)':{
    fontSize:"3rem"
  }
}
theme.typography.h2={
  fontSize:'3.2em',
  '@media(max-width:895px)':{
    fontSize:"2.5rem"
  }
}
theme.typography.h3={
  fontSize:'2.3rem',
  '@media(max-width:895px)':{
    fontSize:"1.8rem"
  }
}
theme.typography.h4={
  fontSize:'1.7rem',
  '@media(max-width:895px)':{
    fontSize:"1.37rem"
  }
}
theme.typography.h5={
  fontSize:'1.5rem',
  '@media(max-width:895px)':{
    fontSize:"1.1rem"
  }
}
theme.typography.h6={
  fontSize:'1.4rem',
  '@media(max-width:895px)':{
    fontSize:"1rem"
  }
}
theme.typography.subtitle1={
  fontSize:'1.4rem',
  fontWeight:'normal',
  '@media(max-width:895px)':{
        wordSpacing: '-0.2em',
        fontSize:"1rem",
  }
}
theme.typography.body1={
  fontSize:'1.2rem',
  '@media(max-width:1200px)':{
    fontSize:"1rem"
  },
  '@media(max-width:895px)':{
    fontSize:"1rem"
  }
}
theme.typography.body2={
  fontSize:'1.1rem',
  '@media(max-width:1200px)':{
    fontSize:"0.93rem"
  },
  '@media(max-width:895px)':{
    fontSize:"0.83rem"
  }
}
// theme.typography= {
//   fontFamily: [

//   ].join(',')
// }


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline/> */}
      <Container maxWidth="xl">
        <ResponsiveAppBar />
        <div id="home" style={{ paddingTop: "4em" }}>
          <Home />
        </div>
        <div id="projects">
          <ProjectsPage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <ContactPage />
          <Footer/>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
