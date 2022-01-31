import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

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
  { id: "wallet", label: "種類", width: "20%" },
  {
    id: "hot",
    label: "Hot Wallet",
    width: "40%",
    align: "center",
  },
  {
    id: "cold",
    label: "Cold Wallet",
    width: "40%",
    align: "center",
  },
];

function createData(name, hot, cold) {
  return { name, hot, cold };
}

const rows = [
  createData("説明", "オンラインデジタルウォレット", "物理デバイス"),
  createData("インターネットに接続されている", "はい", "いいえ"),
  createData("長所", "利便性が良い", "セキュリティ性が高い"),
  createData("短所", "オンライン攻撃に弱い", "不便"),
];

export default function StickyHeadTable() {
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.hot}</TableCell>
                <TableCell align="center">{row.cold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
