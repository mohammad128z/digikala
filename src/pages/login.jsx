import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Post_User } from "../Core/Requests";
import logo from "../Images/logo.svg";
import { Backdrop, CircularProgress } from "@mui/material";
import {addToken} from '../redux/Token/actions'
import {useDispatch} from 'react-redux'

export default function SignIn() {
  const theme = createTheme();
  const dispatch = useDispatch()
  const [state, setstate] = React.useState({
    account: { email: "", password: "" },
    errors: { email: "", password: "", network: "" },
    sending: false,
    data: null,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            padding: 5,
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 1,
            borderRadius: "8px",
            borderColor: "grey.500",
          }}
        >
          <Box src={logo} component="img" marginBottom={5} />
          <Typography
            component="h1"
            color="error"
            mb={2}
            hidden={!state.errors.network}
          >
            {state.errors.network}
          </Typography>
          <Typography align="left" width="100%" component="h1">
            Login | SignIn
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              error={state.errors.email}
              helperText={state.errors.email && state.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={state.errors.password}
              helperText={state.errors.password && state.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.sending}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ThemeProvider>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    validate();
    if (!state.errors.email && !state.errors.password) {
      setstate({ ...state, sending: true });
      const data = await Post_User(state.account);
      setstate({ ...state, sending: false });
      if (data.status === 200) {
        localStorage.setItem("token", data.data.token);
        dispatch(addToken('token'))
      } else if (data.message === "Request failed with status code 400") {
        setstate({
          ...state,
          errors: {
            email: "Email or password is not correct",
            password: "Email or password is not correct",
          },
        });
      } else {
        const errors = state.errors;
        errors.network = "No Internet !";
        setstate({ ...state, errors: errors });
      }
    }
  }

  async function validate() {
    if (!state.account.email) {
      const error = state.errors;
      error.email = "The email field is required";
      setstate({ ...state, errors: error });
    }
    if (!state.account.password) {
      const error = state.errors;
      error.password = "The password field is required";
      setstate({ ...state, errors: error });
    } else if (state.account.password.length < 4) {
      const error = state.errors;
      error.password = "The minimum password length is four characters";
      setstate({ ...state, errors: error });
    }
  }

  function handleChange({ currentTarget: input }) {
    const account = { ...state.account };
    account[input.id] = input.value;
    setstate({
      ...state,
      account: account,
      errors: { email: "", password: "", network: "" },
    });
  }
}
