import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Btn from './Btn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  overflow: 'auto', // enables scrolling for small screens
};

export default function Resume({ resumeClose }) {
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile
  const isTablet = useMediaQuery('(min-height:1000px) and (max-height:1400px)'); // Detect tablet

  return (
    <Box
      sx={{
        ...style,
        width: isMobile ? '90vw' : isTablet ? '80vw' : 600,
        height: isMobile ? '70vh' : isTablet ? '85vh' : '98vh',
      }}
    >  
      {isMobile ? (
        <Box
          sx={{
            textAlign: 'center',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="/resume/Mohammad Asem Rashed.jpg"
            width="100%"
            alt="Resume"
          />
          <a
            href="/resume/Mohammad Asem Rashed (portfolio).pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            PDF
          </a>
          <p>(PDF will open in a new tab)</p>
          <Btn
            variant="text"
            bg="none"
            value="cancel"
            color="red"
            onClick={resumeClose}
          />
        </Box>
      ) : isTablet ? (
        <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            p: 2,
          }}
        >
          <img
            src="/resume/Mohammad Asem Rashed.jpg"
            width="100%"
            alt="Tablet View Resume"
          />
          <a
            href="/resume/Mohammad Asem Rashed (portfolio).pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline', fontSize:'1.3em' }}
          >
            PDF
          </a>
          <p>(PDF will open in a new tab)</p>
          <Btn
            variant="text"
            bg="none"
            value="cancel"
            color="red"
            onClick={resumeClose}
          />
        </Box>
      ) : (
        <iframe
          src="/resume/Mohammad Asem Rashed (portfolio).pdf"
          width="100%"
          height="100%"
          title="PDF Viewer"
          style={{
            border: 'none',
          }}
        ></iframe>
      )}
    </Box>
  );
}
