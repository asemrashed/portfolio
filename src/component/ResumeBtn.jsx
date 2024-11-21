import React from "react";
import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import Resume from "./Resume";
import Btn from "./Btn";
import { height } from "@mui/system";

export default function ResumeBtn({
  bg='secondary.main', 
  color='secondary.contrastText', 
  hbg, 
  hText,
  variant='filled',
  height='2em'
}) {
  const [open, setOpen] = useState(false);
  const resumeOpen = () => setOpen(true);
  const resumeClose = () => setOpen(false);

  return (
    <Box sx={{my:'0.2em'}}>
      <Btn
        variant={variant} 
        value="Resume"
        width="6em"   
        minWidth="5em"    
        height={height}
        size="large"
        bg={bg}
        color={color}
        hoverBg={hbg}
        hoverText={hText}
        onClick={resumeOpen}
      />
      <Modal
        open={open}
        onClose={resumeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box><Resume resumeClose={resumeClose} open={open} /></Box>
      </Modal>
    </Box>
  );
}
