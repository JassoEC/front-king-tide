import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ActionButton } from "../common/actionButton";

export const FileDialog = () => {
  const { showViewFileDialog, handleCloseViewFileModal, filePath } =
    useContext(UsersContext);
  return (
    <Dialog
      open={showViewFileDialog}
      onClose={handleCloseViewFileModal}
      maxWidth="md"
      fullWidth
    >
      <DialogContent></DialogContent>
      <DialogActions>
        <ActionButton label="Cerrar" onClick={handleCloseViewFileModal} />
      </DialogActions>
    </Dialog>
  );
};
