import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Link from "../0 - Index/Link";

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
  { id: "marketplace", label: "Marketplace", width: "25%" },
  {
    id: "fee",
    label: "Platform Fee",
    width: "25%",
    align: "center",
  },
  {
    id: "royalty",
    label: "Secondary Sale Royalty",
    width: "25%",
    align: "center",
  },
  {
    id: "price",
    label: "Minimum Price",
    width: "25%",
    align: "center",
  },
];

function createData(name, link, fee, royalty, price) {
  return { name, link, fee, royalty, price };
}

const rows = [
  createData(
    "OpenSea",
    "https://opensea.io/",
    "2.5%",
    "Up to 10%",
    "0.0005 ETH"
  ),
  createData("Foundation", "https://foundation.app/", "15%", "10%", "0.1 ETH"),
  createData("MakersPlace", "http://makersplace.com/", "15%", "10%", "-"),
  createData(
    "KnownOrigin",
    "https://knownorigin.io/",
    "15%",
    "12.5%",
    "0.01 ETH"
  ),
  createData("SuperRare", "https://superrare.co/", "15%", "10%", "-"),
  createData("ANIFTY", "https://anifty.jp/", "5% or 10%", "N/A", "0.02 ETH"),
  createData(
    "hic et nunc",
    "https://hicetnunc.art/",
    "2.5%",
    "10 - 25%",
    "0 XTZ"
  ),
  createData("OBJKT", "https://objkt.com/", "2.5%", "N/A", "0.0011 XTZ"),
  createData(
    "Kalamint",
    "https://kalamint.io/",
    "1.25%",
    "10 - 25%",
    "0.0001 XTZ"
  ),
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
                  <Link link={row.link} title={row.name} light={true} />
                </TableCell>
                <TableCell align="center">{row.fee}</TableCell>
                <TableCell align="center">{row.royalty}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
