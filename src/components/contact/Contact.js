import React from "react";
import { useRef, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";
import validation from "./validation";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },

  formMessage: {
    width: "100%",    
    marginBottom: "1rem",
  },
  typography: {
    fontSize: theme.typography.pxToRem(9),
    marginBottom: "1rem",
  }
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  const [input, setInput] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  console.log(errors);
  const changeHandler = (event) => {
    //CONTROLA EL FORMULARIO
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
    setErrors({
      ...errors,
      [property]: validation({ ...input, [property]: value })[property],
    }); //validaciones por cada onchange de cada input
  };

  const resetForm = () => {
    setInput({
      from_name: "",
    from_email: "",
    message: ""

    });

    setErrors({
      from_name: "",
    from_email: "",
    message: ""
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "react_contact_detail",
        "portfolio_message",
        form.current,
        "WxzkLxoK17I5X9Ccn"
      )
      .then(
        (result) => {
          resetForm();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
            
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="from_name"
                value={input.from_name}
                onChange={changeHandler}
                className={classes.formfield}
              />
              
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="from_email"
                value={input.from_email}
                onChange={changeHandler}
                className={classes.formfield}
              />
              
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                value={input.message}
                onChange={changeHandler}
                className={classes.formMessage}
              />
              {!input.from_name && !input.from_email && !input.message ? (<Typography component="span" className={classes.typography}> Please complete all the fields.</Typography>) : null }
              {input.from_name && input.from_email && input.message ? (
                <button type="submit" value="Send" className="submit-btn">
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Send Message</Typography>
                </button>
              ) : (
                <button
                  type="submit"
                  value="Send"
                  className="submit-btn"
                  disabled
                >
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Send Message</Typography>
                </button>
              )}
              
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
