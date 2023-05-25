import { TextField } from "@mui/material";

const NameField = ({ formState, setFormState, error }) => {
  return (
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
  );
};

export default NameField;
