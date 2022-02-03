import { Button, Grid, makeStyles } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LoginView = () => {
  const { login } = useContext(AuthContext);
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <form onSubmit={login}>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
