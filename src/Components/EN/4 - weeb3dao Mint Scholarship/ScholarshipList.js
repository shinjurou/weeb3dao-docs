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
    false,
    true
  ),
  createData(
    "Antonio",
    "@akki_q",
    "https://twitter.com/akki_q",
    "@akki",
    "https://foundation.app/@akki",
    true,
    true
  ),
  createData(
    "xiran",
    "@xiran_art",
    "https://twitter.com/xiran_art",
    "@xiran",
    "https://foundation.app/@xiran",
    true
  ),
  createData(
    "Christine",
    "@Kazadi777",
    "https://twitter.com/Kazadi777",
    "@kazadi777",
    "https://foundation.app/@kazadi777",
    true
  ),
  createData(
    "Gensui_Hime",
    "@Gensui_Hime",
    "https://twitter.com/Gensui_Hime",
    "@gensui_hime",
    "https://foundation.app/@gensui_hime",
    true,
    true
  ),
  createData(
    "shishiart",
    "@shishiart",
    "https://twitter.com/shishiart",
    "@shishi",
    "https://foundation.app/@shishi",
    true
  ),
  createData(
    "anti3024",
    "@anti3024",
    "https://twitter.com/anti3024",
    "@anti3024",
    "https://foundation.app/@anti3024",
    true
  ),
  createData(
    "patch_oxxo",
    "@Patch_NFT",
    "https://twitter.com/Patch_NFT",
    "@patch_oxxo",
    "https://foundation.app/@patch_oxxo",
    false,
    true
  ),
  createData(
    "SEIRO_ART",
    "@NFT_SEIRO",
    "https://twitter.com/NFT_SEIRO",
    "@seiro_art",
    "https://foundation.app/@seiro_art",
    true,
    true
  ),
  createData(
    "diyokama",
    "@diyokama",
    "https://twitter.com/diyokama",
    "@diyokama",
    "https://foundation.app/@diyokama",
    true,
    true
  ),
  createData(
    "CYI",
    "@cyicheng",
    "https://twitter.com/cyicheng",
    "@cyi",
    "https://foundation.app/@cyi",
    true,
    true
  ),
  createData(
    "7th_knights",
    "@7th_knights",
    "https://twitter.com/7th_knights",
    "@7th_knights",
    "https://foundation.app/@7th_knights",
    true,
    true
  ),
  createData(
    "qiqi",
    "@cryingqiqi",
    "https://twitter.com/cryingqiqi",
    "@cryingqiqi",
    "https://foundation.app/@cryingqiqi",
    true
  ),
  createData(
    "asagon",
    "@gooooon007",
    "https://twitter.com/gooooon007",
    "@asagon",
    "https://foundation.app/@asagon",
    true,
    true
  ),
  createData(
    "Monope",
    "@monoprx",
    "https://twitter.com/monoprx",
    "@monope",
    "https://foundation.app/@monope",
    true
  ),
  createData(
    "R3i",
    "@Ray_pepper12",
    "https://twitter.com/Ray_pepper12",
    "@r3i",
    "https://foundation.app/@r3i",
    true,
    true
  ),
  createData(
    "YU",
    "@stdio_nameraka",
    "https://twitter.com/stdio_nameraka",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    false,
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
