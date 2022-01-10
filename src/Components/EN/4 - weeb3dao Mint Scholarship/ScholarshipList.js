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

import TableCheckbox from "./TableCheckbox";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledPagination = styled(TablePagination)({
  selectDropdown: { color: "#fff" },
});

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "twitter", label: "Twitter Link", minWidth: 100, align: "center" },
  { id: "fnd", label: "Foundation Link", minWidth: 100, align: "center" },
  { id: "gas", label: "Gas", maxWidth: 69, align: "center" },
  { id: "invite", label: "Invite", maxWidth: 69, align: "center" },
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

const rows = [
  createData(
    "Anemone kisumi",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "Hamilton",
    "@hamikunart",
    "https://twitter.com/hamikunart",
    "@hamikunart",
    "https://foundation.app/@hamikunart",
    true,
    true
  ),
  createData(
    "Chesswalkers",
    "@ChesswalkersNFT",
    "https://twitter.com/ChesswalkersNFT",
    "@Chesswalkers",
    "https://foundation.app/@Chesswalkers",
    true
  ),
  createData(
    "MIZUmoi",
    "@nuemizumoi",
    "https://twitter.com/nuemizumoi",
    "@MIZUmoi",
    "https://foundation.app/@MIZUmoi",
    true,
    true
  ),
  createData(
    "Jeloy",
    "@Jeloy_Inkblood",
    "https://twitter.com/Jeloy_Inkblood",
    "@jeloyinkblood_nft",
    "https://foundation.app/@jeloyinkblood_nft",
    true
  ),
  createData(
    "Praxh",
    "@Praxh_u",
    "https://twitter.com/Praxh_u",
    "@praxh_u",
    "https://foundation.app/@praxh_u",
    true,
    true
  ),
  createData(
    "Mr.Caphat",
    "@MrCaphat_99NFT",
    "https://twitter.com/MrCaphat_99NFT",
    "@Caphat99NFT",
    "https://foundation.app/@Caphat99NFT",
    true
  ),
  createData(
    "Kittisuda",
    "@XanDerAlexxx",
    "https://twitter.com/XanDerAlexxx",
    "@XanDerAlexxx",
    "https://foundation.app/@XanDerAlexxx",
    true
  ),
  createData(
    "wollacce",
    "@wollacce_NFT",
    "https://twitter.com/wollacce_NFT",
    "@wollacce",
    "https://foundation.app/@wollacce",
    true
  ),
  createData(
    "ETA",
    "@etahoshi",
    "https://twitter.com/etahoshi",
    "@ETA",
    "https://foundation.app/@ETA",
    true
  ),
  createData(
    "Tuna",
    "@poopeetuna",
    "https://twitter.com/poopeetuna",
    "@PooPeeTuna",
    "https://foundation.app/@PooPeeTuna",
    true
  ),
  createData(
    "Tawanrat",
    "@gardenmoon23",
    "https://twitter.com/gardenmoon23",
    "@aionatchan",
    "https://foundation.app/@aionatchan",
    true,
    true
  ),
  createData(
    "Praew",
    "@zuirenist",
    "https://twitter.com/zuirenist",
    "@zuirenist",
    "https://foundation.app/@zuirenist",
    true
  ),
  createData(
    "Misato",
    "@ritmo_misato",
    "https://twitter.com/ritmo_misato",
    "@ritmomisato",
    "https://foundation.app/@ritmomisato",
    true,
    true
  ),
  createData(
    "ZINERYL",
    "@ZINERYL",
    "https://twitter.com/ZINERYL",
    "@zineryl",
    "https://foundation.app/@zineryl",
    true
  ),
  createData(
    "ena",
    "@enabeleno",
    "https://twitter.com/enabeleno",
    "@enabeleno",
    "https://foundation.app/@enabeleno",
    true,
    true
  ),
  createData(
    "Khun non",
    "@Khun_nonart",
    "https://twitter.com/Khun_nonart",
    "@Khun_nonart",
    "https://foundation.app/@Khun_nonart",
    true
  ),
  createData(
    "Carl",
    "@smurtz_art",
    "https://twitter.com/smurtz_art",
    "@smurtzz",
    "https://foundation.app/@smurtzz",
    true,
    true
  ),
  createData(
    "Charee",
    "@FancyCharNim",
    "https://twitter.com/FancyCharNim",
    "@CharNim",
    "https://foundation.app/@CharNim",
    true
  ),
  createData(
    "Antonio",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "xiran",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "Christine",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "Gensui_Hime",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "shishiart",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "anti3024",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "patch_oxxo",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "SEIRO_ART",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "diyokama",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "CYI",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "7th_knights",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "qiqi",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "asagon",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "Monope",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "R3i",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true,
    true
  ),
  createData(
    "YU",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
];

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
      <TableContainer sx={{ minWidth: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          IconComponent: () => null,
        }}
      />
    </Paper>
  );
}
