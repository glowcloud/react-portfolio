import { Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const onSubmit = async () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
      mx={{md: 10, sm: 0}}
      id="contact"
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        Contact Me
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <form ref={formRef} style={{ width: "100%" }}>
          <TextField
            label="Name"
            sx={{ label: { color: "text.primary" }, width: "100%", my: 1 }}
            required={true}
            type="text"
            name="user_name"
          />
          <TextField
            label="Email"
            sx={{ label: { color: "text.primary" }, width: "100%", my: 1 }}
            required={true}
            type="email"
            name="user_email"
          />
          <TextField
            label="Message"
            sx={{ label: { color: "text.primary" }, width: "100%", my: 1 }}
            required={true}
            type="text"
            multiline
            rows={10}
            name="message"
          />
          <Button onClick={onSubmit} variant="outlined" size="large" sx={{ my: 1 }}>
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
