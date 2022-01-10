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

// Importing Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "../1 - Welcome/Welcome";
import DatabaseInfo from "../2 - Database Information/DatabaseInformation";
import Introduction from "../3 - Introduction/Introduction";
import Scholarship from "../4 - weeb3dao Mint Scholarship/weeb3daoScholarship";
import InfoNFT from "../5 - General Information about NFT/InfoNFT";
import SellNFT from "../6 - How to Mint and List your NFT/SellNFT";
import BurnNFT from "../7 - Burn your NFT/BurnNFT";
import CryptoExchange from "../8 - Crypto Exchange/CryptoExchange";
import Community from "../9 - Community/Community";
import FAQ from "../10 - FAQ/FAQ";
import Environment from "../11 - Environment Controversy/Environment";
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
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ParkIcon from "@mui/icons-material/Park";
import BookIcon from "@mui/icons-material/Book";
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
      <Router>
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
                  Anime NFT Database
                </Typography>
              </ThemeProvider>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            className={classNames("navigation", {
              dark: !props.light,
              light: props.light,
            })}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon
                    sx={props.light !== true ? { color: "white" } : null}
                  />
                ) : (
                  <ChevronLeftIcon
                    sx={props.light !== true ? { color: "white" } : null}
                  />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              <Link to="/">
                <ListItem button>
                  <ListItemIcon>
                    <CelebrationIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Welcome" />
                  </Fade>
                </ListItem>
              </Link>

              <Link to="/database-info">
                <ListItem button>
                  <ListItemIcon>
                    <BookmarkIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Database Information" />
                  </Fade>
                </ListItem>
              </Link>

              <Link to="/introduction">
                <ListItem button>
                  <ListItemIcon>
                    <FaceRetouchingNaturalIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Introduction" />
                  </Fade>
                </ListItem>
              </Link>

              <Link to="/weeb3dao-scholarship">
                <ListItem button>
                  <ListItemIcon>
                    <RedeemIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="weeb3dao Mint Scholarship" />
                  </Fade>
                </ListItem>
              </Link>
            </List>

            <Divider />
            <List>
              <Link to="/info-NFT">
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
                      sx={props.light !== true ? { color: "white" } : null}
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
                      primary={"General Information about NFT"}
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
                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter1Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="What is NFT?" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter2Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="What is Blockchain?" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter3Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="What is Digital Wallet?" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter4Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Important Terminologies" />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link to="/sell-NFT">
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
                      sx={props.light !== true ? { color: "white" } : null}
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
                      primary={"How to Mint and List your NFT"}
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
                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter1Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Create your Digital Wallet" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter2Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Choose your Blockchain" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter3Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Choose your Marketplace" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter4Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Mint an artwork" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter5Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="List your NFT" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Filter6Icon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Promote your NFT" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <CakeIcon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Celebration" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <LocalGasStationIcon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="How to keep track of Gas" />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link to="/burn-NFT">
                <ListItem button>
                  <ListItemIcon>
                    <LocalFireDepartmentIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Burn your NFT" />
                  </Fade>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/crypto-exchange">
                <ListItem button>
                  <ListItemIcon>
                    <CurrencyExchangeIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Crypto Exchange" />
                  </Fade>
                </ListItem>
              </Link>

              <Link to="/community">
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
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Community" />
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
                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <SpeakerNotesIcon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Terminologies" />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <FactCheckIcon
                          sx={props.light !== true ? { color: "white" } : null}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Culture" />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>

              <Link to="/faq">
                <ListItem button>
                  <ListItemIcon>
                    <LiveHelpIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
              <Link to="/environment">
                <ListItem button>
                  <ListItemIcon>
                    <ParkIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                    <ListItemText primary="Environment Controversy" />
                  </Fade>
                </ListItem>
              </Link>

              <Link to="/rec-readings">
                <ListItem button>
                  <ListItemIcon>
                    <BookIcon
                      sx={props.light !== true ? { color: "white" } : null}
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

              <Link to="/reverse-img-search">
                <ListItem button>
                  <ListItemIcon>
                    <ImageSearchIcon
                      sx={props.light !== true ? { color: "white" } : null}
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
                      primary="Reverse Image Search Resources"
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
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/database-info" element={<DatabaseInfo />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/weeb3dao-scholarship" element={<Scholarship />} />
              <Route path="/info-NFT" element={<InfoNFT />} />
              <Route path="/sell-NFT" element={<SellNFT />} />
              <Route path="/burn-NFT" element={<BurnNFT />} />
              <Route path="/crypto-exchange" element={<CryptoExchange />} />
              <Route path="/community" element={<Community />} />
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
      </Router>
    </div>
  );
}