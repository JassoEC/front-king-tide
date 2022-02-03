import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { User } from "../../interfaces/user.interfaces";
import { imagesURL } from "../../api/backendApi";
import { UserBadge } from "./UserBadge";

interface Props {
  user: User;
  handleOpenDeleteUser: (id: number) => void;
  handleShowUpdateUser: (id: number) => void;
  hanbleOpenImageModal: (id: number) => void;
}

export const UserItem = ({
  user,
  handleOpenDeleteUser,
  handleShowUpdateUser,
  hanbleOpenImageModal,
}: Props) => {
  const classes = useStyeles();

  const imagePath = user.profilePicturePath
    ? `${imagesURL}/${user.profilePicturePath}`
    : "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg";
  return (
    <TableRow key={`row-${user.id}`}>
      <TableCell className={classes.cell} component="th" scope="row">
        {user.id}
      </TableCell>
      <TableCell className={classes.cell}>
        <UserBadge
          imagePath={imagePath}
          onClick={() => hanbleOpenImageModal(user.id!)}
        />
      </TableCell>
      <TableCell className={classes.cell} component="th" scope="row">
        <Button>{user.fullName}</Button>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        {user.birthday}
      </TableCell>
      <TableCell className={classes.cell} align="right">
        {user.rfc}
      </TableCell>
      <TableCell className={classes.cell} style={{ margin: 0, padding: 0 }}>
        <IconButton onClick={() => handleShowUpdateUser(user.id!)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleOpenDeleteUser(user.id!)}>
          <ClearIcon />
        </IconButton>
      </TableCell>
      <TableCell className={classes.cell} style={{ margin: 0, padding: 0 }}>
        <IconButton>
          <FileUploadIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const useStyeles = makeStyles({
  cell: {
    textAlign: "start",
  },
});
