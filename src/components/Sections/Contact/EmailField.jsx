import { TextField } from "@mui/material";

const EmailField = ({ formState, setFormState, error, isEmail }) => {
  return (
    <TextField
      label="Email"
      sx={{ label: { color: "text.primary" }, my: 1 }}
      fullWidth
      required
      type="email"
      name="user_email"
      error={error && (!formState.user_email || !isEmail(formState.user_email))}
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
  );
};

export default EmailField;
