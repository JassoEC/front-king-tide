import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imagesURL } from "../../api/backendApi";
import { UsersContext } from "../../context/UsersContext";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const UserView = () => {
  const { user, getUser, navigateBack } = useContext(UsersContext);
  const { id } = useParams<"id">();
  const classes = useStyles();

  useEffect(() => {
    getUser(id!);
  }, []);

  return (
    <Grid container sx={{ mt: 5, px: 4 }}>
      <Grid container xs={12} justifyContent="space-between">
        <Typography className={classes.title}>
          Información del usuario
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={4}
        justifyItems="center"
        justifyContent="center"
      >
        <img
          style={{ maxWidth: "150px", marginTop: 10 }}
          src={`${imagesURL}/${user.profilePicturePath}`}
          alt=""
        />
      </Grid>
      <Grid container item xs={12} lg={7}>
        <Grid item xs={12} className={classes.container}>
          <Typography className={classes.fieldTitle}>Nombre:</Typography>
          <Typography className={classes.fielContent}>
            {user.fullName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.fieldTitle}>
            Fecha de nacimiento:
          </Typography>
          <Typography className={classes.fielContent}>
            {user.birthday}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.fieldTitle}>RFC:</Typography>
          <Typography className={classes.fielContent}>{user.rfc}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.container} container>
          {user.files.map((file) => (
            <a
              target="_blank"
              rel="noreferrer"
              download
              href={`${imagesURL}/${file.filePath}`}
            >
              <span>{user.fullName}</span>
              <AttachFileIcon className={classes.icon} />
            </a>
          ))}
        </Grid>
        <Grid item xs={12} lg={6} className={classes.container} sx={{ mt: 5 }}>
          <Button variant="text" fullWidth onClick={navigateBack}>
            <ArrowBackIcon className={classes.icon} />
            Regresar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  title: {
    color: "#D3D3D3",
    fontSize: 25,
  },
  fieldTitle: {
    color: "#D3D3D3",
    fontSize: 18,
  },
  fielContent: {
    fontSize: 20,
  },
  container: {
    marginTop: 15,
  },
  icon: {
    marginRight: 10,
  },
});
