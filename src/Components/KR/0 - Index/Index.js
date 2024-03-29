import React, { useState } from "react";
import classNames from "classnames";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScrollToTop from "./ScrollToTop";
import LocaleSelect from "../../Shared/LocaleSelect/LocaleSelect";
import SVG from "react-inlinesvg";
import weeb3Logo from "../../../Imgs/weeb3Logo.svg";

// Importing Router
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../1 - Welcome/Welcome";
import DatabaseInfo from "../2 - Database Information/DatabaseInformation";
import Introduction from "../3 - Introduction/Introduction";
import Scholarship from "../4 - weeb3dao Mint Scholarship/weeb3daoScholarship";

import InfoNFT from "../5 - General Information about NFT/InfoNFT";
import WhatIsNFT from "../5 - General Information about NFT/WhatIsNFT";
import WhatIsBlockchain from "../5 - General Information about NFT/WhatIsBlockchain";
import WhatIsDigitalWallet from "../5 - General Information about NFT/WhatIsDigitalWallet";
import ImportantTerminologies from "../5 - General Information about NFT/ImportantTerminologies";

import SellNFT from "../6 - How to Mint and List an NFT/SellNFT";
import CreateWallet from "../6 - How to Mint and List an NFT/CreateWallet";
import ChooseBlockchain from "../6 - How to Mint and List an NFT/ChooseBlockchain";
import ChooseMarketplace from "../6 - How to Mint and List an NFT/ChooseMarketplace";
import MintNFT from "../6 - How to Mint and List an NFT/MintNFT";
import ListNFT from "../6 - How to Mint and List an NFT/ListNFT";
import PromoteNFT from "../6 - How to Mint and List an NFT/PromoteNFT";
import Celebration from "../6 - How to Mint and List an NFT/Celebration";
import Gas from "../6 - How to Mint and List an NFT/Gas";

import AirdropNFT from "../7.1 - How to Airdrop an NFT/Airdrop";
import BurnNFT from "../7 - How to burn your NFT/BurnNFT";
import CryptoExchange from "../8 - Crypto Exchange/CryptoExchange";

import Community from "../9 - Community/Community";
import Terminologies from "../9 - Community/Terminologies";
import Culture from "../9 - Community/Culture";

import FAQ from "../10 - FAQ/FAQ";
import Environment from "../11 - NFT Controversy/Environment";
import RecReadings from "../12 - Recommended Readings/RecReadings";
import ReverseImageSearch from "../13 - Reverse Image Search Resources/ReverseImageSearch";

// Importing icons
import CelebrationIcon from "@mui/icons-material/Celebration";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import RedeemIcon from "@mui/icons-material/Redeem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import CakeIcon from "@mui/icons-material/Cake";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SendIcon from "@mui/icons-material/Send";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ParkIcon from "@mui/icons-material/Park";
// import BookIcon from "@mui/icons-material/Book";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

const headerText = createTheme({
  typography: {
    fontFamily: "'Gugi', cursive",
  },
});

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)})`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)})`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Index(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showText, setShowText] = React.useState(false);
  const [openGeneralNFTMenu, setOpenGeneralNFTMenu] = useState(false);
  const [openSellNFTMenu, setOpenSellNFTMenu] = useState(false);
  const [openCommunityMenu, setOpenCommunityMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowText(true);
  };

  const handleDrawerClose = () => {
    if (openGeneralNFTMenu) {
      setOpenGeneralNFTMenu(false);
    }
    if (openSellNFTMenu) {
      setOpenSellNFTMenu(false);
    }
    if (openCommunityMenu) {
      setOpenCommunityMenu(false);
    }
    setOpen(false);
    setShowText(false);
  };

  return (
    <div className="index">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              className="drawer-icon"
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerOpen()}
              edge="start"
              sx={{
                marginLeft: "-15px",
                marginRight: "38px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <ThemeProvider theme={headerText}>
              <Typography variant="h6" color="inherit" component="div" my={2}>
                <div className="mt-1 mr-3 float-left">
                  <SVG src={weeb3Logo} height={19} title="weeb3 Logo" />
                </div>
                <span className="invisible md:visible">Anime NFT Database</span>
              </Typography>
            </ThemeProvider>

            <LocaleSelect />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          className={classNames("navigation", {
            dark: theme.palette.type === "dark",
            light: theme.palette.type === "light",
          })}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon
                  sx={theme.palette.type === "dark" ? { color: "white" } : null}
                />
              ) : (
                <ChevronLeftIcon
                  sx={theme.palette.type === "dark" ? { color: "white" } : null}
                />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            <Link to="">
              <ListItem button>
                <ListItemIcon>
                  <CelebrationIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="환영합니다" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="database-info">
              <ListItem button>
                <ListItemIcon>
                  <BookmarkIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="데이터 베이스 정보" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="introduction">
              <ListItem button>
                <ListItemIcon>
                  <FaceRetouchingNaturalIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="소개" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="weeb3dao-scholarship">
              <ListItem button>
                <ListItemIcon>
                  <RedeemIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="weeb3dao Mint 지원 프로그램" />
                </Fade>
              </ListItem>
            </Link>
          </List>

          <Divider />
          <List>
            <Link to="info-NFT">
              <ListItem
                button
                onClick={() => {
                  if (open) {
                    setOpenGeneralNFTMenu(!openGeneralNFTMenu);
                  }
                  if (openSellNFTMenu) {
                    setOpenSellNFTMenu(false);
                  }
                  if (openCommunityMenu) {
                    setOpenCommunityMenu(false);
                  }
                }}
              >
                <ListItemIcon>
                  <MenuBookIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText
                    primary={"NFT 관련 일반적인 정보"}
                    primaryTypographyProps={{
                      style: { whiteSpace: "normal" },
                    }}
                  />
                </Fade>
                {openGeneralNFTMenu ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandLessIcon className="rotate" />
                )}
              </ListItem>
            </Link>
            <Collapse in={openGeneralNFTMenu}>
              <List component="div" disablePadding>
                <Link to="info-nft/what-is-nft">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter1Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="NFT는 무엇인가요?'" />
                  </ListItem>
                </Link>

                <Link to="info-nft/what-is-blockchain">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter2Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="블록체인은 무엇인가요?'" />
                  </ListItem>
                </Link>

                <Link to="info-nft/what-is-digital-wallet">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter3Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="암호화폐 지갑은 무엇인가요?'" />
                  </ListItem>
                </Link>

                <Link to="info-nft/important-terminologies">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter4Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="다른 중요 용어들에 대한 설명" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to="sell-NFT">
              <ListItem
                button
                onClick={() => {
                  if (open) {
                    setOpenSellNFTMenu(!openSellNFTMenu);
                  }
                  if (openGeneralNFTMenu) {
                    setOpenGeneralNFTMenu(false);
                  }
                  if (openCommunityMenu) {
                    setOpenCommunityMenu(false);
                  }
                }}
              >
                <ListItemIcon>
                  <AddBusinessIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText
                    primary={"How to Mint and List an NFT"}
                    primaryTypographyProps={{
                      style: { whiteSpace: "normal" },
                    }}
                  />
                </Fade>
                {openSellNFTMenu ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandLessIcon className="rotate" />
                )}
              </ListItem>
            </Link>
            <Collapse in={openSellNFTMenu}>
              <List component="div" disablePadding>
                <Link to="sell-nft/create-wallet">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter1Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="암호화폐 지갑 만들기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/choose-blockchain">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter2Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="블록체인 네트워크 선택하기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/choose-marketplace">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter3Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="NFT 마켓플레이스 선택하기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/mint-nft">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter4Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="여러분들의 작품을 Mint하기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/list-nft">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter5Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="여러분들의 작품을 List 하기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/promote-nft">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Filter6Icon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="여러분들의 NFT를 홍보하기" />
                  </ListItem>
                </Link>

                <Link to="sell-nft/celebration">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CakeIcon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="Celebration" />
                  </ListItem>
                </Link>

                <Link to="gas">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <LocalGasStationIcon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="Gas Fee를 모니터링 하는 방법" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to="burn-NFT">
              <ListItem button>
                <ListItemIcon>
                  <LocalFireDepartmentIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="NFT 소각하기" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="airdrop-NFT">
              <ListItem button>
                <ListItemIcon>
                  <SendIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="NFT Airdrop 하는 법" />
                </Fade>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="crypto-exchange">
              <ListItem button>
                <ListItemIcon>
                  <CurrencyExchangeIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="암호화폐 거래하기" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="community">
              <ListItem
                button
                onClick={() => {
                  if (open) {
                    setOpenCommunityMenu(!openCommunityMenu);
                  }
                  if (openGeneralNFTMenu) {
                    setOpenGeneralNFTMenu(false);
                  }
                  if (openSellNFTMenu) {
                    setOpenSellNFTMenu(false);
                  }
                }}
              >
                <ListItemIcon>
                  <MapsHomeWorkIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="NFT 커뮤니티" />
                </Fade>
                {openCommunityMenu ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandLessIcon className="rotate" />
                )}
              </ListItem>
            </Link>

            <Collapse in={openCommunityMenu}>
              <List component="div" disablePadding>
                <Link to="community/terminologies">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SpeakerNotesIcon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="커뮤니티 용어집" />
                  </ListItem>
                </Link>

                <Link to="community/culture">
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FactCheckIcon
                        sx={
                          theme.palette.type === "dark"
                            ? { color: "white" }
                            : null
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary="Culture" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>

            <Link to="faq">
              <ListItem button>
                <ListItemIcon>
                  <LiveHelpIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="FAQ" />
                </Fade>
              </ListItem>
            </Link>
          </List>

          <Divider />
          <List>
            <Link to="environment">
              <ListItem button>
                <ListItemIcon>
                  <ParkIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="환경 오염 논란" />
                </Fade>
              </ListItem>
            </Link>

            <Link to="reverse-img-search">
              <ListItem button>
                <ListItemIcon>
                  <ImageSearchIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText
                    primary="이미지 역 추적 방법"
                    primaryTypographyProps={{
                      style: { whiteSpace: "normal" },
                    }}
                  />
                </Fade>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/database-info" element={<DatabaseInfo />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/weeb3dao-scholarship" element={<Scholarship />} />

            <Route path="/info-nft" element={<InfoNFT />} />
            <Route path="/info-nft/what-is-nft" element={<WhatIsNFT />} />
            <Route
              path="/info-nft/what-is-blockchain"
              element={<WhatIsBlockchain />}
            />
            <Route
              path="/info-nft/what-is-digital-wallet"
              element={<WhatIsDigitalWallet />}
            />
            <Route
              path="/info-nft/important-terminologies"
              element={<ImportantTerminologies />}
            />

            <Route path="/sell-nft" element={<SellNFT />} />
            <Route path="/sell-nft/create-wallet" element={<CreateWallet />} />
            <Route
              path="/sell-nft/choose-blockchain"
              element={<ChooseBlockchain />}
            />
            <Route
              path="/sell-nft/choose-marketplace"
              element={<ChooseMarketplace />}
            />
            <Route path="/sell-nft/mint-nft" element={<MintNFT />} />
            <Route path="/sell-nft/list-nft" element={<ListNFT />} />
            <Route path="/sell-nft/promote-nft" element={<PromoteNFT />} />
            <Route path="/sell-nft/celebration" element={<Celebration />} />
            <Route path="/gas" element={<Gas />} />

            <Route path="/airdrop-nft" element={<AirdropNFT />} />
            <Route path="/burn-nft" element={<BurnNFT />} />
            <Route path="/crypto-exchange" element={<CryptoExchange />} />
            <Route path="/community" element={<Community />} />
            <Route
              path="/community/terminologies"
              element={<Terminologies />}
            />
            <Route path="/community/culture" element={<Culture />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/rec-readings" element={<RecReadings />} />
            <Route
              path="/reverse-img-search"
              element={<ReverseImageSearch />}
            />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

/*
<Link to="rec-readings">
              <ListItem button>
                <ListItemIcon>
                  <BookIcon
                    sx={
                      theme.palette.type === "dark" ? { color: "white" } : null
                    }
                  />
                </ListItemIcon>
                <Fade
                  in={showText}
                  easing={{
                    enter: "cubic-bezier(.99,0,1,1.62)",
                    exit: "linear",
                  }}
                  timeout={{ enter: 666, exit: 0 }}
                >
                  <ListItemText primary="Recommended Readings" />
                </Fade>
              </ListItem>
            </Link>
            */
