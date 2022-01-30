import React from "react";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as CustomThemeProvider } from "./Contexts/CustomTheme";
import routes from "./routes";
import IndexEN from "./Components/EN/0 - Index/Index";
import useCustomTheme from "./Hooks/useCustomTheme";
import { getIndexPage } from "./utils/router";
import { useParams } from 'react-router-dom';

const themeLight = createTheme({
  palette: {
    type: "light",
    action: {
      disabledBackground: "#E2E2E2",
      disabled: "#CDCDCD",
    },
    primary: {
      main: "#D3D3D3",
    },
    secondary: {
      main: "#d50000",
    },
    success: {
      main: "#388e3c",
    },
    background: {
      default: "#f1f1f1",
      paper: "#dedede",
    },
    divider: "rgba(100,100,100,0.12)",
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#f57c00",
    },
    info: {
      main: "#1565c0",
    },
    text: {
      primary: "rgba(20,20,20,0.87)",
      secondary: "rgba(40,40,40,0.87)",
    },
  },

  typography: {
    h1: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 70,
    },
    h2: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 50,
    },
    h3: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 36,
    },
    body1: {
      fontFamily: '"Noto Sans", "Helvetica", "Arial", sans-serif',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
});

const themeDark = createTheme({
  palette: {
    type: "dark",
    action: {
      disabledBackground: "#1C1C1C",
      disabled: "#292929",
    },
    primary: {
      main: "#202020",
      contrastText: "#c5c5c5",
      light: "#4e4e4e",
    },
    secondary: {
      main: "#970F47",
    },
    success: {
      main: "#388e3c",
    },
    background: {
      default: "#1a1a1a",
      paper: "#222222",
    },
    divider: "rgba(113,113,113,0.12)",
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#f57c00",
    },
    info: {
      main: "#1565c0",
    },
    text: {
      primary: "#c5c5c5",
      secondary: "rgba(212,212,212,0.7)",
    },
  },

  typography: {
    h1: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 70,
    },
    h2: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 50,
    },
    h3: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: 36,
    },
    body1: {
      fontFamily: '"Noto Sans", "Helvetica", "Arial", sans-serif',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  zIndex: 2000,
  width: 55,
  height: 32,
  padding: 0,
  position: "fixed",
  float: "right",
  top: 8,
  right: 20,
  overflow: "visible",
  "& .MuiSwitch-switchBase": {
    marginLeft: -7,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#2E2E2E"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 0.2,
        backgroundColor: theme.palette.type === "dark" ? "#818181" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.type === "dark" ? "#E2E2E2" : "#2C2B2D",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    width: 45,
    opacity: 0.2,
    backgroundColor: theme.palette.type === "dark" ? "#aab4be" : "#131313",
    borderRadius: 200,
  },
}));

function App() {
  const { lightTheme, toggleTheme } = useCustomTheme();

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme ? themeLight : themeDark}>
        <CssBaseline />
          <FormGroup>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked
                  onClick={toggleTheme}
                />
              }
              label=""
            />
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked
                  onClick={toggleTheme}
                />
              }
              label=""
            />
          </FormGroup>
          <Router>
            <Routes>
              <Route path="/:lang/*" element={<PageRouter light={lightTheme}/>}>
                {routes.map((route, index) => {
                  return <Route key={index} path={'*/'+route}/>  
                })} 
              </Route>
              <Route exact path="/" element={<IndexEN light={lightTheme}/>}>
                {routes.map((route, index) => {
                  return <Route key={index} path={route}/>  
                })}
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    </div>
  );
}

const PageRouter = (lightTheme) => {
  const { lang } = useParams();
  return getIndexPage(lang, lightTheme);
}

const Providers = ({ children }) => {
  return (
    <CustomThemeProvider>
      {children}
    </CustomThemeProvider>
  );
};

function withProviders(Component) {
  const ComponentProviders = (props) => {
    return (
      <Providers>
        <Component {...props}/>
      </Providers>
    )
  };
  return ComponentProviders;
}

export default withProviders(App);