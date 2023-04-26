import React, {useState} from "react";
import {app} from "../config/firebase";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import {Navigate} from "react-router-dom";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loginWithEmail, login, loading} = useContext(UserContext);

  const handleSubmit = () => {
    loginWithEmail(email, password);
  };

  if (login) return <Navigate to="/dashboard" />;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <Card>
        <CardContent>
          <Typography variant="h1" component="h2">
            Login
          </Typography>
          <TextField
            placeholder="E-mail"
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
          <TextField
            placeholder="Senha"
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
