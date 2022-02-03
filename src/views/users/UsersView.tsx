import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { UserDialog } from "../../components/users/UserDialog";
import { UsersTable } from "../../components/users/UsersTable";
import { UsersContext } from "../../context/UsersContext";

export const UsersView = () => {
  const { getUsers } = useContext(UsersContext);

  useEffect(() => {
    getUsers("/user");
  }, []);

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Grid container spacing={2} columns={16}>
          <Grid container item xs={16} justifyContent="flex-end">
            <Button>Nuevo usuario</Button>
          </Grid>
          <Grid container item xs={16} justifyContent="flex-end">
            <UsersTable />
          </Grid>
        </Grid>
      </Box>
      <UserDialog />
    </>
  );
};
