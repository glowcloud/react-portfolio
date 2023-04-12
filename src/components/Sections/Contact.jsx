import { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isemail";

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (
      !formState.user_name ||
      !formState.user_email ||
      !formState.message ||
      !isEmail(formState.user_email)
    ) {
      setError(true);
    } else {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setError(false);
            setIsSubmitting(false);
            setResultMsg("Thank you for submitting your message.");
            setIsSnackbar(true);
            setFormState({ user_name: "", user_email: "", message: "" });
          },
          (error) => {
            setResultMsg(error.text);
            setError(true);
            setIsSnackbar(true);
            setIsSubmitting(false);
          }
        );
    }
  };

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
      my={5}
      mx={{ md: 10, sm: 0 }}
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
        <form ref={formRef} style={{ width: "100%" }} autoComplete="off">
          <TextField
            label="Name"
            sx={{ label: { color: "text.primary" }, my: 1 }}
            fullWidth
            required
            type="text"
            name="user_name"
            error={error && !formState.user_name}
            onChange={(e) =>
              setFormState((prevForm) => {
                return { ...prevForm, user_name: e.target.value };
              })
            }
            helperText={error && !formState.user_name && "Name field required."}
            value={formState.user_name || ""}
          />
          <TextField
            label="Email"
            sx={{ label: { color: "text.primary" }, my: 1 }}
            fullWidth
            required
            type="email"
            name="user_email"
            error={
              error && (!formState.user_email || !isEmail(formState.user_email))
            }
            onChange={(e) =>
              setFormState((prevForm) => {
                return { ...prevForm, user_email: e.target.value };
              })
            }
            helperText={
              error &&
              ((!formState.user_email && "Email field required.") ||
                (!isEmail(formState.user_email) && "Incorrect email."))
            }
            value={formState.user_email || ""}
          />
          <TextField
            label="Message"
            sx={{ label: { color: "text.primary" }, my: 1 }}
            fullWidth
            required
            type="text"
            multiline
            rows={10}
            name="message"
            error={error && !formState.message}
            onChange={(e) =>
              setFormState((prevForm) => {
                return { ...prevForm, message: e.target.value };
              })
            }
            helperText={error && !formState.message && "Name field required."}
            value={formState.message || ""}
          />
          <Box sx={{ position: "relative" }}>
            <Button
              onClick={onSubmit}
              variant="outlined"
              size="large"
              sx={{ my: 1 }}
              disabled={isSubmitting}
            >
              Send
            </Button>
            {isSubmitting && (
              <CircularProgress
                size={24}
                sx={{
                  color: "colors.primary",
                  position: "absolute",
                  top: "50%",
                  left: "2.5rem",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
          <Snackbar
            open={isSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={error ? "error" : "success"}>
              {resultMsg}
            </Alert>
          </Snackbar>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
