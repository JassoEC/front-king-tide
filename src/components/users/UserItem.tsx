import { Avatar, Button, IconButton, TableCell, TableRow } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { User } from "../../interfaces/user.interfaces";

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props) => {
  return (
    <TableRow key={`row-${user.id}`}>
      <TableCell>
        <Avatar src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
      </TableCell>
      <TableCell component="th" scope="row">
        {user.profilePicture}
      </TableCell>
      <TableCell component="th" scope="row">
        <Button>{user.name}</Button>
      </TableCell>
      <TableCell align="right">{user.birthday}</TableCell>
      <TableCell align="right">{user.rfc}</TableCell>
      <TableCell>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton>
          <FileUploadIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
