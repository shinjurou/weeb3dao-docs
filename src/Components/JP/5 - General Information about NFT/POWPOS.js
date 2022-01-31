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
          <Card
            color="orange"
            title="ブロックチェーン"
            light={true}
            content="ETH"
          />
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">アーティストの大半が使用。</li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">ガス代が高い。</li>
                  <li className="mt-1">大量の電力を必要とする。</li>
                  <li className="mt-1">処理件数に制限がある。</li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card
            color="orange"
            title="ブロックチェーン"
            light={true}
            content={[
              <div>
                Polygon
                <br /> XTZ
                <br /> すべての環境にやさしいブロックチェーン
              </div>,
            ]}
          />
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">環境にやさしい。</li>
                  <li className="mt-1">ガス代が安い。</li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc">
                  <li className="mt-1">
                    日本のアーティストに人気のあるPolygon以外は、ETHが主流で、他のブロックチェーンを利用しているアーティストはあまり多くない。
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
