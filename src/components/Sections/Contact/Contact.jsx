import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [error, setError] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [isSnackbar, setIsSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbar(false);
    setResultMsg("");
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={9}
      mx={{ lg: 10 }}
      id="contact"
      sx={{
        scrollMarginTop: 105,
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        Contact Me
      </Typography>

      <ContactForm
        setIsSnackbar={setIsSnackbar}
        setResultMsg={setResultMsg}
        error={error}
        setError={setError}
      />

      <Snackbar open={isSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? "error" : "success"}>
          {resultMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
