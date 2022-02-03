import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ActionButton } from "../common/actionButton";

export const UserImageDialog = () => {
  const {
    user,
    showImageDialog,
    handleCloseImgeModal,
    image,
    handleUpload,
    saveImage,
  } = useContext(UsersContext);

  return (
    <Dialog
      open={showImageDialog}
      maxWidth="xs"
      fullWidth
      onClose={handleCloseImgeModal}
    >
      <DialogContent>
        <Grid container columns={12} spacing={1}>
          <Grid item xs={12} container justifyContent="center">
            <Typography>{`Imagen de perfil para ${user.name}`}</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            <label htmlFor="contained-button-file">
              <Button fullWidth variant="text" component="span" color="primary">
                Selecciona imagen
              </Button>
            </label>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
          >
            {image && (
              <img
                src={image.toString()}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "80%" }}
              />
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ActionButton label="Guardar" onClick={saveImage} />
      </DialogActions>
    </Dialog>
  );
};
