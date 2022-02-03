import { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Paper,
} from "@mui/material";
import { UserItem } from "./UserItem";
import { UsersContext } from "../../context/UsersContext";
import { TablePaginationActions } from "./TablePagination";

export const UsersTable = () => {
  const { users, links, pagination, getUsers } = useContext(UsersContext);

  // Avoid a layout jump when reaching the last page with empty rows.
  /*  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0; */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {users.map((user) => (
            <UserItem user={user} key={`user-${user.id}`} />
          ))}
          {/*  {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePaginationActions
              links={links}
              pagination={pagination}
              handleLoadData={getUsers}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
