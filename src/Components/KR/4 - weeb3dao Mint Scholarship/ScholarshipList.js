import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Link from "../0 - Index/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import TableCheckbox from "./TableCheckbox";
import scholars from "../../../scholarlist.json";
import { getTwitterUrl, getFoundationUrl } from "../../../utils/urls";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.type === "light" ? "#CFCCCC" : "#181818",
    color: theme.palette.text.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const columns = [
  { id: "name", label: "Name", width: "34%" },
  {
    id: "twitter",
    label: "Twitter Link",
    width: "20%",
    align: "center",
  },
  {
    id: "fnd",
    label: "Foundation Link",
    width: "20%",
    align: "center",
  },
  { id: "gas", label: "Gas", width: "13%", align: "center" },
  { id: "invite", label: "Invite", width: "13%", align: "center" },
];

function createData(
  name,
  twitterName,
  twitterLink,
  fndName,
  fndLink,
  gas,
  invite
) {
  return { name, twitterName, twitterLink, fndName, fndLink, gas, invite };
}

const rows = scholars.map((scholar) => 
  createData(
    scholar.name,
    scholar.twitter,
    getTwitterUrl(scholar.twitter),
    scholar.fnd,
    getFoundationUrl(scholar.fnd),
    scholar.gas,
    scholar.invite
  ),
);

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ minWidth: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    width: column.width,
                    fontSize: "12.5pt",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      <Link link={row.twitterLink} title={row.twitterName} />
                    </TableCell>
                    <TableCell align="center">
                      <Link link={row.fndLink} title={row.fndName} />
                    </TableCell>
                    <TableCell align="center">
                      <TableCheckbox checked={row.gas === true ? true : null} />
                    </TableCell>
                    <TableCell align="center">
                      <TableCheckbox
                        checked={row.invite === true ? true : null}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, { value: -1, label: "All" }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          IconComponent: () => (
            <ArrowDropDownIcon
              sx={{ marginLeft: -2.75, marginTop: -0.25, paddingRight: 1 }}
            />
          ),
        }}
      />
    </Paper>
  );
}