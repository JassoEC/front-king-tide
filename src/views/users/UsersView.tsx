import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { ActionButton } from "../../components/common/actionButton";
import { DeleteUserDialog } from "../../components/users/DeleteUserDialog";
import { UserDialog } from "../../components/users/UserDialog";
import { UserImageDialog } from "../../components/users/UserImageDialog";
import { UsersTable } from "../../components/users/UsersTable";
import { UsersContext } from "../../context/UsersContext";
import { UserFileDialog } from "../../components/users/UserFileDialog";
import { FileDialog } from "../../components/users/FileDialog";
import { AuthContext } from "../../context/AuthContext";

export const UsersView = () => {
  const { logout } = useContext(AuthContext);
  const { getUsers, handleOpenCreateUser } = useContext(UsersContext);

  const classes = useStyles();

  useEffect(() => {
    getUsers("/user");
  }, []);

  return (
    <Box sx={{ pt: 2, pb: 5, px: 5 }}>
      <Grid container spacing={2} columns={16} justifyContent="center">
        <Grid
          container
          item
          xs={16}
          justifyContent="space-between"
          className={classes.header}
        >
          <ActionButton label="Salir" onClick={logout} />
          <ActionButton
            label="Nuevo usuario"
            onClick={handleOpenCreateUser}
            color="primary"
          />
        </Grid>
        <Grid
          container
          item
          xs={15}
          justifyContent="flex-end"
          className={classes.tableContainer}
        >
          <UsersTable />
        </Grid>
      </Grid>
      <UserDialog />
      <DeleteUserDialog />
      <UserImageDialog />
      <UserFileDialog />
      <FileDialog />
    </Box>
  );
};

const useStyles = makeStyles({
  header: {
    position: "fixed",
    top: 0,
    zIndex: 10,
    backgroundColor: "white",
  },
  tableContainer: {
    marginTop: 60,
  },
});
