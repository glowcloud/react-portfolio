import { TextField } from "@mui/material";

const MessageField = ({ formState, setFormState, error }) => {
  return (
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
  );
};

export default MessageField;
