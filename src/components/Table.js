import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = ({ rows = [], headingRow = [], user }) => {
  const classes = useStyles();
  console.log(headingRow);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {headingRow.map((item) => (
              <TableCell align="right">{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.UserId}>
              {row.UserId && (
                <TableCell component="th" scope="row">
                  {row.UserId}
                </TableCell>
              )}
              {row.name && <TableCell align="right"> {row.name}</TableCell>}
              {row.userName && (
                <TableCell align="right"> {row.userName}</TableCell>
              )}

              {row.groupId && (
                <TableCell align="right">{row.groupId}</TableCell>
              )}
              {row.groupName && (
                <TableCell align="right">{row.groupName}</TableCell>
              )}
              {row.description && (
                <TableCell align="right">{row.description}</TableCell>
              )}

              {row.email && <TableCell align="right">{row.email}</TableCell>}
              {row.creationDate && (
                <TableCell align="right">{row.creationDate}</TableCell>
              )}

              {user && (
                <TableCell align="right">
                  <Button>View Details</Button>
                </TableCell>
              )}

              <TableCell align="right">
                <IconButton color="primary">
                  <EditIcon size="small" />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
