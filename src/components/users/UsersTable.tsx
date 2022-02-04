import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from "@mui/material";
import { UserItem } from "./UserItem";
import { UsersContext } from "../../context/UsersContext";
import { TablePaginationActions } from "./TablePagination";
import { makeStyles } from "@mui/styles";

const headers: string[] = [
  "",
  "",
  "Nombre",
  "Fecha de nacimiento",
  "rfc",
  "",
  "",
];

export const UsersTable = () => {
  const {
    users,
    links,
    pagination,
    getUsers,
    handleOpenDeleteUser,
    handleShowUpdateUser,
    hanbleOpenImageModal,
    handleOpenFileModal,
    openViewFileModal,
    navigateToUser,
  } = useContext(UsersContext);
  const classes = useStyles();
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={`header-${index}`}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {users.map((user) => (
            <UserItem
              user={user}
              handleOpenDeleteUser={handleOpenDeleteUser}
              handleShowUpdateUser={handleShowUpdateUser}
              hanbleOpenImageModal={hanbleOpenImageModal}
              handleOpenFileModal={handleOpenFileModal}
              handleOpenViewFileModal={openViewFileModal}
              handleNavigate={navigateToUser}
              key={`user-${user.rfc}`}
            />
          ))}
        </TableBody>
      </Table>
      <TablePaginationActions
        links={links}
        pagination={pagination}
        handleLoadData={getUsers}
      />
    </TableContainer>
  );
};

const useStyles = makeStyles({
  tableBody: {
    overflow: "auto",
  },
});
