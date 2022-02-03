import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ActionButton } from "../common/actionButton";

export const DeleteUserDialog = () => {
  const { showDeleteUser, user, handleCloseDeleteUser, deleteUser, loading } =
    useContext(UsersContext);
  return (
    <Dialog open={showDeleteUser} onClose={handleCloseDeleteUser}>
      <DialogTitle>Elmininación de usuario</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography>
              {`¿Desea eliminar este usuario "${user.name} ${user.lastName} ${user.surName}" ?`}
            </Typography>
          </Grid>
        </Grid>
        {loading && <LinearProgress color="error" />}
      </DialogContent>
      <DialogActions>
        <ActionButton
          onClick={() => deleteUser(user.id!)}
          label="Sí, eliminar"
          color="error"
        />
        <ActionButton onClick={handleCloseDeleteUser} label="No, cancelar" />
      </DialogActions>
    </Dialog>
  );
};
