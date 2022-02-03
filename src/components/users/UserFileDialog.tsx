import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ActionButton } from "../common/actionButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export const UserFileDialog = () => {
  const {
    showFileDialog,
    user,
    fileName,
    error,
    message,
    loading,
    handleCloseFileModal,
    handleFileUpload,
    saveFile,
  } = useContext(UsersContext);
  return (
    <Dialog open={showFileDialog} onClose={handleCloseFileModal}>
      <DialogContent>
        <Grid container columns={12} spacing={1}>
          <Grid item xs={12} container justifyContent="center">
            <Typography>{`Selecciona archivo cd CV para ${user.fullName}`}</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <input
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <label htmlFor="contained-button-file">
              <Button fullWidth variant="text" component="span" color="primary">
                Selecciona archivo
              </Button>
            </label>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
            {!fileName ? (
              <span></span>
            ) : (
              <>
                <AttachFileIcon />
                {fileName}
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          justifyItems="center"
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          {error && <Typography color="error">{message}</Typography>}
        </Grid>
        {loading && <LinearProgress color="primary" />}
      </DialogContent>
      <DialogActions>
        <ActionButton label="Guardar" onClick={saveFile} />
      </DialogActions>
    </Dialog>
  );
};
