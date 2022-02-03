import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  LinearProgress,
} from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ActionButton } from "../common/actionButton";
import { UserFormItem } from "./UserFormItem";

export const UserDialog = () => {
  const {
    showUserDialog,
    handleClosUserDialog,
    user,
    onChangeUser,
    saveUser,
    loading,
  } = useContext(UsersContext);

  return (
    <Dialog
      open={showUserDialog}
      onClose={handleClosUserDialog}
      maxWidth="sm"
      fullWidth
    >
      <form onSubmit={saveUser}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <UserFormItem
                label="Nombre"
                name="name"
                onChange={onChangeUser}
                value={user?.name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Apellido paterno"
                name="lastName"
                onChange={onChangeUser}
                value={user?.lastName}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Apellido materno"
                name="surName"
                onChange={onChangeUser}
                value={user?.surName}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Rfc"
                name="rfc"
                onChange={onChangeUser}
                value={user?.rfc}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Fecha de nacimiento"
                name="birthday"
                onChange={onChangeUser}
                value={user?.birthday}
                type="date"
                shrink
                required
              />
            </Grid>
          </Grid>
          {loading && <LinearProgress color="primary" />}
        </DialogContent>
        <DialogActions>
          <Button type="submit">Guardar</Button>
          <ActionButton onClick={handleClosUserDialog} label="Cancelar" />
        </DialogActions>
      </form>
    </Dialog>
  );
};
