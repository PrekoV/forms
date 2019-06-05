import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const CssTextField = withStyles({
    root: {
        width: "100%",
        "& label.Mui-focused": {
            color: "#EBD3EC"
        },
        "& .MuiFormLabel-root": {
            color: "#EBD3EC"
        },
        "& .MuiInputBase-input": {
            color: "#EBD3EC"
        },
        "& .MuiFormControl-root": {
            width: "100%",
            
        },
        "& .MuiMenuItem-root" : {
            color: "#65096B"
        },
        "& .MuiSelect-icon": {
            color: " #EBD3EC"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#EBD3EC"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#EBD3EC"
            },
            "&:hover fieldset": {
                borderColor: "#EBD3EC"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#EBD3EC"
            }
        }
    }
})(TextField);
export default ({ counties, input, label, type, meta}) => (
    <div className="fields-wrapper">
         <CssTextField
            required
            error={meta && !!(meta.touched && meta.error)}
            select={type === "select"}
            id="outlined-required"
            label={
                type !== "date"
                    ? input && input.name 
                    : ""
            }
            margin="normal"
            type={type}
            variant="outlined"
            data-testid={ input &&input.name }
            {...input}
            helperText={meta && meta.touched && meta.error}
        >
            {type === "select"
                ? counties.map(option => {
                      return (
                          <MenuItem key={option.code} value={option.code}>
                              {option.name}
                          </MenuItem>
                      );
                  })
                : ""}
        </CssTextField>
    </div>
);
