import { useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { locales } from "../../../utils/locales";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const LocaleSelect = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const params = useParams();
  const locale = params.lang;

  const handleChange = (e) => {
    if (!params.lang) {
      navigate("/" + e.target.value + location.pathname, { replace: true });
    } else {
      navigate("/" + e.target.value + "/" + params["*"], { replace: false });
    }
  };

  useEffect(() => {
    if (!locale) {
      navigate("/en" + location.pathname, { replace: true });
    }
  }, [locale])

  return (
    <>
      <TranslateIcon
        sx={{
          fontSize: 20,
          position: "absolute",
          right: 197,
          top: 21,
          opacity: 0.5,
        }}
      />
      <Select
        value={locale ?? "en"}
        onChange={handleChange}
        IconComponent={() => (
          <ArrowDropDownIcon sx={{ fontSize: 20, marginLeft: -8.5 }} />
        )}
        sx={{
          width: 60,
          height: 45,
          paddingRight: 0,
          position: "absolute",
          right: 140,
          top: 10,
        }}
        autoWidth
        MenuProps={{
          disableScrollLock: true,
          marginLeft: 20,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
      >
        {locales.map((lang) => {
          return (
            <MenuItem key={lang} value={lang}>
              {lang.toUpperCase()}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default LocaleSelect;
