import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { ActionButton } from "../../components/common/actionButton";
import { DeleteUserDialog } from "../../components/users/DeleteUserDialog";
import { UserDialog } from "../../components/users/UserDialog";
import { UserImageDialog } from "../../components/users/UserImageDialog";
import { UsersTable } from "../../components/users/UsersTable";
import { UsersContext } from "../../context/UsersContext";

export const UsersView = () => {
  const { getUsers, handleOpenCreateUser } = useContext(UsersContext);

  useEffect(() => {
    getUsers("/user");
  }, []);

  return (
    <Box sx={{ pt: 2, pb: 5, px: 5 }}>
      <Grid container spacing={2} columns={16} justifyContent="center">
        <Grid container item xs={16} justifyContent="flex-end">
          <ActionButton
            label="Nuevo usuario"
            onClick={handleOpenCreateUser}
            color="primary"
          />
        </Grid>
        <Grid container item xs={15} justifyContent="flex-end">
          <UsersTable />
        </Grid>
      </Grid>
      <UserDialog />
      <DeleteUserDialog />
      <UserImageDialog />
    </Box>
  );
};
