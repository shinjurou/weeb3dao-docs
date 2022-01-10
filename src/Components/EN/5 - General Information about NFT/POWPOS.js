import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../0 - Index/Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="POW" {...a11yProps(0)} />
          <Tab label="POS" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card color="orange" title="Blockchain" content="ETH" />
          <Card
            color="green"
            title="Pros"
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">
                    Used by majority of current artists and marketplaces so
                    reduce the need to bridge between crypto currencies
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">High gas fee</li>
                  <li className="mt-1">
                    Need significant amounts of electricity
                  </li>{" "}
                  <li className="mt-1">
                    Limited in the number of processing transactions
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card
            color="orange"
            title="Blockchains"
            content={[
              <div>
                Polygon
                <br /> XTZ
                <br /> All eco-friendly blockchains
              </div>,
            ]}
          />
          <Card
            color="green"
            title="Pros"
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">Eco-friendly</li>
                  <li className="mt-1">Low gas fee</li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">
                    Other than Polygon which is popular for Japanese artists,
                    not a lot of artists are using other blockchains as majority
                    are on ETH
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
