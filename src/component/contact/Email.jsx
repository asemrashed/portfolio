import React, { useRef, forwardRef, useState, useEffect } from "react";
import { Box } from "@mui/system";
import "./Email.css";
import emailjs from "emailjs-com";
import { Paper, TextField } from "@mui/material";
import Btn from "../Btn";
import { useTheme } from "@mui/material/styles";
import EmailCondition from "./EmailCondition";

const Email = forwardRef((props, ref) => {
  const theme= useTheme();
  const { cancel, mobile } = props;

  const {
    name, nameError, email, emailError, message,
    handleNameChange,handleEmailChange, handleEmaiBlur, handleMessage,
    handleKeyDown, sendEmail,
    nameRef, emailRef, messageRef,
  }= EmailCondition()

  return (
    <Box className="email"> 
      <Paper
        elevation={10}
        component="form"
        noValidate
        autoComplete="off"
        className="input"
        onSubmit={sendEmail}
        data-animation="Animate-email"
        sx={{width:{md:'400px',lg:'450px'}}}
      >
        <TextField
          required
          id="filled-basic"
          label="name"
          variant="filled"
          size="small"
          onChange={handleNameChange}
          error={nameError}
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
          helperText={nameError ? "Please use more the 3 letters & space only" : ""}
          inputRef={ref}
          onKeyDown={(e) => handleKeyDown(e, emailRef)}
        />
        <TextField
          required
          id="filled-basic"
          label="email"
          variant="filled"
          value={email}
          onBlur={handleEmaiBlur}
          onChange={handleEmailChange}
          inputProps={{
            type: "email",
          }}
          error={emailError}
          helperText={emailError ? "please enter a valid eamil" : ""}
          inputRef={emailRef}
          onKeyDown={(e) => handleKeyDown(e, messageRef)}
          onFocus={() => emailRef.current.focus()}
          sx={{ mt: { xs: "0.3em", md: "0.5em", } }}
        />
        <TextField
          required
          id="filled-basic"
          label="message"
          variant="filled"
          onChange={handleMessage}
          multiline
          rows={5}
          inputRef={messageRef}
          onKeyDown={(e) => handleKeyDown(e, null, true)}
          onFocus={() => messageRef.current.focus()}
          sx={{ mt: { xs: "0.3em", md: "0.5em" } }}
        />
        <Box
          sx={{
            alignSelf: { xs: "center", md: "end" },
            mt: { xs: "0.2em", md: "0.3em" },
            display: "flex",
            columnGap: "0.2em",
          }}
        >
          <Btn
            onClick={cancel}
            variant="outlined"
            value="cancel"
            width="6em"
            maxD="none"
            bg="none"
            color="red"
            hoverBg="#910"
            hoverText="white"
          />
          <Btn variant="filled" value="send" width="6em" 
            bg={theme.palette.primary.main} 
            color={theme.palette.secondary.main}
            hoverBg={theme.palette.secondary.main}
            hoverText={theme.palette.primary.main}
          />
        </Box>
      </Paper>
    </Box>
  );
});

export default Email;
