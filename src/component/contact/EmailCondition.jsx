import React, { useRef, forwardRef, useState, useEffect } from "react";
import "./Email.css";
import emailjs from "emailjs-com";

const EmailCondition = () => {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");

  const nameRef = useRef(null)
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleNameChange = (e) => {
    const inputName= e.target.value.trim();
    setName(e.target.value);
    if (e.target.validity.valid && inputName.length !== 0 && inputName.length > 2) {
        setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else{
      setEmailError(true)
    }
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmaiBlur = (e) => {
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleKeyDown = (event, nextFieldRef, isMultiLine = false) => {
    if (event.key === "Enter") {
      if (!isMultiLine) {
        event.preventDefault();
        nextFieldRef?.current?.focus();
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();  

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    alert("Email configuration is missing. Please check your setup.");
    return;
  }

  if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          alert("Email sent successfully");

          setName("");
          setEmail("");
          setMessage("");

          e.target.reset(); // Reset the form if necessary
        },
        (error) => {
          alert("Failed to send email");
        }
      );
  } else {
    alert(`All input fields need to be filled.`);
  }
  };

  return{
    name, nameError, email, emailError, message,
    handleNameChange,handleEmailChange, handleEmaiBlur, handleMessage,
    handleKeyDown, sendEmail,
    nameRef, emailRef, messageRef,
  }
}

export default EmailCondition;
