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
    "Ackerly",
    "@4ckerly",
    "https://twitter.com/4ckerly",
    "@ackerly",
    "https://foundation.app/@ackerly",
    true,
    true
  ),
  createData(
    "Adumakei (あづま京)",
    "@adumakei",
    "https://twitter.com/adumakei",
    "@adumakei",
    "https://foundation.app/@adumakei",
    true,
    true
  ),
  createData(
    "Aguno (アグノ)",
    "@Aguno_",
    "https://twitter.com/Aguno_",
    "@Sivao",
    "https://foundation.app/@Sivao",
    false,
    true
  ),
  createData(
    "Akki",
    "@akki_q",
    "https://twitter.com/akki_q",
    "@akki",
    "https://foundation.app/@akki",
    true,
    true
  ),
  createData(
    "Alliene.Rozen",
    "@alliene_rozen",
    "https://twitter.com/alliene_rozen",
    "@allienerozen",
    "https://foundation.app/@allienerozen",
    true,
  ),
  createData(
    "Anam111 (アナム111)",
    "@uloobuloo",
    "https://twitter.com/uloobuloo",
    "@anam111",
    "https://foundation.app/@anam111",
    true
  ),
  createData(
    "Anemone (アネモネ)",
    "@anemone_kisumi",
    "https://twitter.com/anemone_kisumi",
    "@anemone_kisumi",
    "https://foundation.app/@anemone_kisumi",
    true
  ),
  createData(
    "AnTi",
    "@anti3024",
    "https://twitter.com/anti3024",
    "@anti3024",
    "https://foundation.app/@anti3024",
    true
  ),
  createData(
    "Arisse",
    "@x_arisse",
    "https://twitter.com/x_arisse",
    "@_arisse_",
    "https://foundation.app/@_arisse_",
    true
  ),
  createData(
    "Aru",
    "@_Aruiu",
    "https://twitter.com/_Aruiu",
    "@Aruiu",
    "https://foundation.app/@Aruiu",
    false,
    true
  ),
  createData(
    "Asagon",
    "@gooooon007",
    "https://twitter.com/gooooon007",
    "@asagon",
    "https://foundation.app/@asagon",
    true,
    true
  ),
  createData(
    "Azen (あぜん)",
    "@mntimcczgrtn",
    "https://twitter.com/mntimcczgrtn",
    "@azen_",
    "https://foundation.app/@azen_",
    false,
    true
  ),
  createData(
    "BetaAlpha (有葉米太)",
    "@BetaAlpha_1998",
    "https://twitter.com/BetaAlpha_1998",
    "@BetaAlpha_1998",
    "https://foundation.app/@BetaAlpha_1998",
    false,
    true
  ),
  createData(
    "bq",
    "@bqscmq69",
    "https://twitter.com/bqscmq69",
    "@record_iing",
    "https://foundation.app/@record_iing",
    true
  ),
  createData(
    "Cattonoz",
    "@cattonozworld",
    "https://twitter.com/cattonozworld",
    "@cattonozworld",
    "https://foundation.app/@cattonozworld",
    true
  ),
  createData(
    "CCroissant",
    "@CosCroissant",
    "https://twitter.com/CosCroissant",
    "@ccroissant",
    "https://foundation.app/@ccroissant",
    true,
    true
  ),
  createData(
    "CharNim",
    "@FancyCharNim",
    "https://twitter.com/FancyCharNim",
    "@CharNim",
    "https://foundation.app/@CharNim",
    false,
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
    "Chiel",
    "@LinenZ311",
    "https://twitter.com/LinenZ311",
    "@Chiel.311",
    "https://foundation.app/@Chiel.311",
    true,
    true
  ),
  createData(
    "Comuno (コムノ)",
    "@Poireau_13",
    "https://twitter.com/Poireau_13",
    "@comuno",
    "https://foundation.app/@comuno",
    false,
    true
  ),
  createData(
    "Cozy U (こじゆう)",
    "@cozyu_",
    "https://twitter.com/cozyu_",
    "@cozyu_",
    "https://foundation.app/@cozyu_",
    false,
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
    "Darkzmonsty",
    "@darkzmonsty1",
    "https://twitter.com/darkzmonsty1",
    "@darkzmonsty",
    "https://foundation.app/@darkzmonsty",
    true,
    true
  ),
  createData(
    "Dyo",
    "@diyokama",
    "https://twitter.com/diyokama",
    "@diyokama",
    "https://foundation.app/@diyokama",
    true,
    true
  ),
  createData(
    "Einelace",
    "@EinelaceArt",
    "https://twitter.com/EinelaceArt",
    "@einelace",
    "https://foundation.app/@einelace",
    true,
    true
  ),
  createData(
    "ENAchan",
    "@enabeleno",
    "https://twitter.com/enabeleno",
    "@enabeleno",
    "https://foundation.app/@enabeleno",
    true,
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
    "Gengoya",
    "@gengoya_club",
    "https://twitter.com/gengoya_club",
    "@gengoya.club",
    "https://foundation.app/@gengoya.club",
    false,
    true
  ),
  createData(
    "Gensui_Hime (元帥姫)",
    "@Gensui_Hime",
    "https://twitter.com/Gensui_Hime",
    "@gensui_hime",
    "https://foundation.app/@gensui_hime",
    true,
    true
  ),
  createData(
    "Gesyutaruto (ゲシュタルト崩壊フラグ)",
    "@furagu2525",
    "https://twitter.com/furagu2525",
    "@furagu2525",
    "https://foundation.app/@furagu2525",
    true
  ),
  createData(
    "Haiter Bomb",
    "@HaiterBomb",
    "https://twitter.com/HaiterBomb",
    "@Haiterbomb",
    "https://foundation.app/@Haiterbomb",
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
    "Harukagi",
    "@Harukagit",
    "https://twitter.com/Harukagit",
    "@harukagi",
    "https://foundation.app/@harukagi",
    true
  ),
  createData(
    "haruyu (はるユ)",
    "@ha_ru_ha_ru1192",
    "https://twitter.com/ha_ru_ha_ru1192",
    "@haruyu",
    "https://foundation.app/@haruyu",
    false,
    true
  ),
  createData(
    "HONE",
    "@HONE54407970",
    "https://twitter.com/HONE54407970",
    "@HONEART",
    "https://foundation.app/@HONEART",
    true,
    true
  ),
  createData(
    "Hoppy",
    "@hoppyNFT",
    "https://twitter.com/hoppyNFT",
    "@hoppyNFT",
    "https://foundation.app/@hoppyNFT",
    true
  ),
  createData(
    "HoshiUsagi",
    "@hoshiusagi1",
    "https://twitter.com/hoshiusagi1",
    "@hoshiusagi",
    "https://foundation.app/@hoshiusagi",
    false,
    true
  ),
  createData(
    "Inkyhma",
    "@Inkyhma",
    "https://twitter.com/Inkyhma",
    "@inkyhma",
    "https://foundation.app/@inkyhma",
    true,
    true
  ),
  createData(
    "Inntary",
    "@inntary",
    "https://twitter.com/inntary",
    "@inntary",
    "https://foundation.app/@inntary",
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
    "JokiYoh",
    "@aldarsign",
    "https://twitter.com/aldarsign",
    "@aldarsign",
    "https://foundation.app/@aldarsign",
    true
  ),
  createData(
    "Kai (海)",
    "@JHC_Kai",
    "https://twitter.com/JHC_Kai",
    "@JHC_Kai",
    "https://foundation.app/@JHC_Kai",
    false,
    true
  ),
  createData(
    "Kazadi",
    "@Kazadi777",
    "https://twitter.com/Kazadi777",
    "@kazadi777",
    "https://foundation.app/@kazadi777",
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
    "Kittisuda",
    "@XanDerAlexxx",
    "https://twitter.com/XanDerAlexxx",
    "@XanDerAlexxx",
    "https://foundation.app/@XanDerAlexxx",
    true
  ),
  createData(
    "Kurimochi Chizuru",
    "@c2tiduru",
    "https://twitter.com/c2tiduru",
    "@c2tiduru",
    "https://foundation.app/@c2tiduru",
    false,
    true
  ),
  createData(
    "Kurona Ken (黒奈 研)",
    "@Kuronaken1",
    "https://twitter.com/Kuronaken1",
    "@Kuronaken",
    "https://foundation.app/@Kuronaken",
    true
  ),
  createData(
    "Laika",
    "@YuuLaika",
    "https://twitter.com/YuuLaika",
    "@yuulaika",
    "https://foundation.app/@yuulaika",
    true
  ),
  createData(
    "Losee",
    "@lose_0818",
    "https://twitter.com/lose_0818",
    "@VINCEart",
    "https://foundation.app/@VINCEart",
    true,
    true
  ),
  createData(
    "Maa (マー)",
    "@wichhhma",
    "https://twitter.com/wichhhma",
    "@wichhhma",
    "https://foundation.app/@wichhhma",
    true,
    true
  ),
  createData(
    "Makarony (마카로니/マカロニ)",
    "@Makarony69",
    "https://twitter.com/Makarony69",
    "@makarony",
    "https://foundation.app/@makarony",
    true
  ),
  createData(
    "Maneromin (まねろみん0",
    "@maneromin",
    "https://twitter.com/maneromin",
    "@maneromin",
    "https://foundation.app/@maneromin",
    false,
    true
  ),
  createData(
    "MAY (メイ)",
    "@may_0608",
    "https://twitter.com/may_0608",
    "@MAY_0608",
    "https://foundation.app/@MAY_0608",
    false,
    true
  ),
  createData(
    "M.B",
    "@yo_draw",
    "https://twitter.com/yo_draw",
    "@m.bart",
    "https://foundation.app/@m.bart",
    true
  ),
  createData(
    "Mellogony (芳醇療法室)",
    "@Mellogony",
    "https://twitter.com/Mellogony",
    "@mellogony",
    "https://foundation.app/@mellogony",
    true,
    true
  ),
  createData(
    "Memekko (めめっこ)",
    "@_mm2k_",
    "https://twitter.com/_mm2k_",
    "@_mm2k_",
    "https://foundation.app/@_mm2k_",
    true
  ),
  createData(
    "mirakuru☆momoka (みらくる☆桃香)",
    "@kanamomoka5",
    "https://twitter.com/kanamomoka5",
    "@mirakuru_momoka",
    "https://foundation.app/@mirakuru_momoka",
    true
  ),
  createData(
    "Rit (りっと)",
    "@ritmo_misato",
    "https://twitter.com/ritmo_misato",
    "@ritmomisato",
    "https://foundation.app/@ritmomisato",
    true,
    true
  ),
  createData(
    "migume",
    "@migume000",
    "https://twitter.com/migume000",
    "@migume",
    "https://foundation.app/@migume",
    true
  ),
  createData(
    "Mirei Yume",
    "@MireiYume",
    "https://twitter.com/MireiYume",
    "@mirei_yume",
    "https://foundation.app/@mirei_yume",
    true
  ),
  createData(
    "MisterMaze",
    "@maze_mister",
    "https://twitter.com/maze_mister",
    "@MrMaze",
    "https://foundation.app/@MrMaze",
    true,
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
    "Monope",
    "@monoprx",
    "https://twitter.com/monoprx",
    "@monope",
    "https://foundation.app/@monope",
    true
  ),
  createData(
    "moon cate",
    "@_meowyen_",
    "https://twitter.com/_meowyen_",
    "@_meowyen_",
    "https://foundation.app/@_meowyen_",
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
    "Muyu Kanzaki (神崎むゆ)",
    "@kanzaki_muyu",
    "https://twitter.com/kanzaki_muyu",
    "@muyu",
    "https://foundation.app/@muyu",
    true,
    true
  ),
  createData(
    "Myrica",
    "@Myricreepa",
    "https://twitter.com/Myricreepa",
    "@myrica",
    "https://foundation.app/@myrica",
    true
  ),
  createData(
    "Nad",
    "@nadhsan_NFT",
    "https://twitter.com/nadhsan_NFT",
    "@nadhsan",
    "https://foundation.app/@nadhsan",
    true
  ),
  createData(
    "Nana Nanaken (七剣なな)",
    "@7th_knights",
    "https://twitter.com/7th_knights",
    "@7th_knights",
    "https://foundation.app/@7th_knights",
    true,
    true
  ),
  createData(
    "narusamaa (ナルサマ)",
    "@narusamaa",
    "https://twitter.com/narusamaa",
    "@Narusama",
    "https://foundation.app/@Narusama",
    true,
  ),
  createData(
    "nissanote",
    "@nissanote_",
    "https://twitter.com/nissanote_",
    "@nissanote",
    "https://foundation.app/@nissanote",
    true,
    true
  ),
  createData(
    "Noukyo (のうきょう)",
    "@Noukyo_illust19",
    "https://twitter.com/Noukyo_illust19",
    "@Noukyo",
    "https://foundation.app/@Noukyo",
    false,
    true
  ),
  createData(
    "Nue",
    "@nuebunny",
    "https://twitter.com/nuebunny",
    "@NueBunny",
    "https://foundation.app/@NueBunny",
    false,
    true
  ),
  createData(
    "Palette",
    "@Palette_Jay",
    "https://twitter.com/Palette_Jay",
    "@palette_jay",
    "https://foundation.app/@palette_jay",
    true,
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
    "Pokke",
    "@smurtz_art",
    "https://twitter.com/smurtz_art",
    "@smurtzz",
    "https://foundation.app/@smurtzz",
    true,
    true
  ),
  createData(
    "Porcountry",
    "@porcountry35",
    "https://twitter.com/porcountry35",
    "@porcountry",
    "https://foundation.app/@porcountry",
    true,
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
    "Qilin",
    "@qilin_artz",
    "https://twitter.com/qilin_artz",
    "@qilin",
    "https://foundation.app/@qilin",
    true
  ),
  createData(
    "Qiqi (琪琪)",
    "@cryingqiqi",
    "https://twitter.com/cryingqiqi",
    "@cryingqiqi",
    "https://foundation.app/@cryingqiqi",
    true
  ),
  createData(
    "R31",
    "@Ray_pepper12",
    "https://twitter.com/Ray_pepper12",
    "@r3i",
    "https://foundation.app/@r3i",
    true,
    true
  ),
  createData(
    "Ranvellion",
    "@Ranvellion",
    "https://twitter.com/Ranvellion",
    "@ranvellion",
    "https://foundation.app/@ranvellion",
    true,
    true
  ),
  createData(
    "Rarana (ららな)",
    "@_rarana_",
    "https://twitter.com/_rarana_",
    "@rarana",
    "https://foundation.app/@rarana",
    false,
    true
  ),
  createData(
    "Renku",
    "@koy_renku02",
    "https://twitter.com/koy_renku02",
    "@renku",
    "https://foundation.app/@renku",
    true
  ),
  createData(
    "Rexndeer (レンディア)",
    "@RxndeerC",
    "https://twitter.com/RxndeerC",
    "@rexndeer_art",
    "https://foundation.app/@rexndeer_art",
    true
  ),
  createData(
    "Rimuu (リム)",
    "@rimuuarts",
    "https://twitter.com/rimuuarts",
    "@_rimuffin",
    "https://foundation.app/@_rimuffin",
    false,
    true
  ),
  createData(
    "RieN",
    "@NeitRien",
    "https://twitter.com/NeitRien",
    "@rienneit",
    "https://foundation.app/@rienneit",
    true
  ),
  createData(
    "Riuki",
    "@riukioki",
    "https://twitter.com/riukioki",
    "@riuki",
    "https://foundation.app/@riuki",
    true,
    true
  ),
  createData(
    "RokuMori",
    "@Lazy_Mori",
    "https://twitter.com/Lazy_Mori",
    "@lazy_mori",
    "https://foundation.app/@lazy_mori",
    true
  ),
  createData(
    "ꜱᴀᴍᴊᴏᴋᴏ//",
    "@samjoko__",
    "https://twitter.com/samjoko__",
    "@samjoko__",
    "https://foundation.app/@samjoko__",
    true
  ),
  createData(
    "Sansaki (△崎)",
    "@s_sk_1875",
    "https://twitter.com/s_sk_1875",
    "@Sansaki",
    "https://foundation.app/@Sansaki",
    false,
    true
  ),
  createData(
    "SAWARI",
    "@SawariART",
    "https://twitter.com/SawariART",
    "@sawari",
    "https://foundation.app/@sawari",
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
    "Sejin",
    "@SejinDoesArt",
    "https://twitter.com/SejinDoesArt",
    "@sejindoesart",
    "https://foundation.app/@sejindoesart",
    true
  ),
  createData(
    "Sergej Fel",
    "@sergejfelart",
    "https://twitter.com/sergejfelart",
    "@sergejfel",
    "https://foundation.app/@sergejfel",
    true
  ),
  createData(
    "Shigure_S",
    "@soumashigure",
    "https://twitter.com/soumashigure",
    "@shiguresouma",
    "https://foundation.app/@shiguresouma",
    false,
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
    "SimaEnaga (しまエナガ)",
    "@enaga392",
    "https://twitter.com/enaga392",
    "@SimaEnaga",
    "https://foundation.app/@SimaEnaga",
    false,
    true
  ),
  createData(
    "Sully Piggsmall",
    "@PiggSmall",
    "https://twitter.com/PiggSmall",
    "@piggsmall",
    "https://foundation.app/@piggsmall",
    true,
  ),
  createData(
    "Suu Takahara (高原スウ)",
    "@suu_illust",
    "https://twitter.com/suu_illust",
    "@takaharasuu",
    "https://foundation.app/@takaharasuu",
    false,
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
    "Tifa",
    "@tiplouuf_",
    "https://twitter.com/tiplouuf_",
    "@Tifa",
    "https://foundation.app/@Tifa",
    false,
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
    "Tya (茶。)",
    "@u_ron_tya",
    "https://twitter.com/u_ron_tya",
    "@u_ron_tya",
    "https://foundation.app/@u_ron_tya",
    false,
    true
  ),
  createData(
    "Wan1",
    "@Wan1artz",
    "https://twitter.com/Wan1artz",
    "@wan1",
    "https://foundation.app/@wan1",
    true
  ),
  createData(
    "wind flour (바람꽃)",
    "@wind_flour",
    "https://twitter.com/wind_flour",
    "@wind_flour",
    "https://foundation.app/@wind_flour",
    true,
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
    "Xinmal",
    "@BendydL",
    "https://twitter.com/BendydL",
    "@XINMAl_xx",
    "https://foundation.app/@XINMAl_xx",
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
    "YU (游)",
    "@stdio_nameraka",
    "https://twitter.com/stdio_nameraka",
    "@stdio_nameraka",
    "https://foundation.app/@stdio_nameraka",
    false,
    true
  ),
  createData(
    "YuiCube (由比きゅーぶ)",
    "@cube_8492",
    "https://twitter.com/cube_8492",
    "@cube8492",
    "https://foundation.app/@cube8492",
    true,
    true
  ),
  createData(
    "Yuki Azuma (あずまゆき)",
    "@yuki_azuma",
    "https://twitter.com/yuki_azuma",
    "@yuki_azuma",
    "https://foundation.app/@yuki_azuma",
    false,
    true
  ),
  createData(
    "Zeras",
    "@Z_Zerafinos",
    "https://twitter.com/Z_Zerafinos",
    "@Zerafinos",
    "https://foundation.app/@Zerafinos",
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
    "Zuiren",
    "@zuirenist",
    "https://twitter.com/zuirenist",
    "@zuirenist",
    "https://foundation.app/@zuirenist",
    true
  ),
  createData(
    "Zyadousa",
    "@zyadousa",
    "https://twitter.com/zyadousa",
    "@Zyadousa",
    "https://foundation.app/@Zyadousa",
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
        rowsPerPageOptions={[5, 10, 20, { value: -1, label: "All" }]}
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
