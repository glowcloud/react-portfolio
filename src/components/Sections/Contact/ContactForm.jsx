import { useRef, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import emailjs from "@emailjs/browser";
import NameField from "./NameField";
import EmailField from "./EmailField";
import MessageField from "./MessageField";

const ContactForm = ({ setIsSnackbar, setResultMsg, error, setError }) => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  };

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

  return (
    <Box component="form" ref={formRef} autoComplete="off" width="100%">
      <NameField
        formState={formState}
        setFormState={setFormState}
        error={error}
      />

      <EmailField
        formState={formState}
        setFormState={setFormState}
        error={error}
        isEmail={isEmail}
      />

      <MessageField
        formState={formState}
        setFormState={setFormState}
        error={error}
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
    </Box>
  );
};

export default ContactForm;
