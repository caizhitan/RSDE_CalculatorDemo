import { TextField, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import Validation from "./Validation";

interface inputConfig {
label: string;
inputType: string;
inputText?: string;
defaultValue?: string;
value: number | undefined;
onChange: (value: number | undefined) => void;
isDisabled?: boolean;
}

const FormInput = (props: inputConfig) => {
const [error, setError] = useState(false);
const [helper, setHelper] = useState("");

const handleChange = (e: any) => {
const newNumValue = parseFloat(e.currentTarget.value);
props.onChange(newNumValue);


if (Validation(e.currentTarget.value) === true) {
  setError(true);
  setHelper("input has to be numerical");
} else {
  setError(false);
  setHelper('');
}
}

return (
<div className="flex flex-col">
<InputLabel
htmlFor={props.label}
sx={{
fontWeight: "bold",
marginBottom: "0.5rem",
}}
>
{props.label}
</InputLabel>

  <TextField
    value={props.value || ""}
    onChange={handleChange}
    id={props.label}
    type={props.inputType}
    defaultValue={props.defaultValue}
    variant="filled"
    InputProps={{
      endAdornment: props.inputText && (
        <InputAdornment position="end">{props.inputText}</InputAdornment>
      ),
    }}
    error={error}
    helperText={helper}
    disabled={props.isDisabled}
  />
</div>
);
};

export default FormInput;