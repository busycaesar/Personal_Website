import React from "react";
import { TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <div className="content-section">
      <h1>
        <strong>Welcome back, Dev!</strong>
      </h1>
      <TextField
        id="standard-basic"
        className="form-field"
        label="Username"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        type="password"
        className="form-field"
        label="Password"
        variant="standard"
      />
      <Button variant="contained" className="form-field">
        Login
      </Button>
    </div>
  );
}
