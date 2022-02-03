import { useContext } from "react";
import {
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { makeStyles } from "@mui/styles";

export const LoginView = () => {
  const classes = useStyles();
  const { loading, login } = useContext(AuthContext);
  return (
    <div className={classes.container}>
      <Grid container columns={12} justifyContent="center">
        <Grid container item xs={11} md={8} lg={4}>
          <Grid container item xs={11} justifyContent="center">
            <Typography variant="h4" className={classes.title}>
              Bienvenido
            </Typography>
          </Grid>
          <form onSubmit={login}>
            <Grid
              container
              item
              alignContent="center"
              justifyContent="center"
              justifyItems="center"
              spacing={3}
              sx={{ pb: 5 }}
            >
              <Grid item xs={11}>
                <TextField label="Username" variant="standard" fullWidth />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={11}>
                <Button type="submit" fullWidth>
                  Fake login
                </Button>
                {loading && <LinearProgress color="primary" />}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "2rem",
    color: "	#D3D3D3",
  },
  imageContainer: {
    backgroundColor: "#282c34",
  },
}));
