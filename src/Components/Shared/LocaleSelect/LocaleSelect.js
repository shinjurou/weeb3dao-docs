import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { locales } from '../../../utils/locales';
import { useParams, useNavigate, useLocation } from "react-router-dom"

const LocaleSelect = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const params = useParams();
  const locale = params.lang;

  const handleChange = (e) => {
    if (!params.lang) {
      navigate("/"+e.target.value+location.pathname, { replace: true });
    } else {
      navigate("/"+e.target.value+"/"+params['*'], { replace: true });
    }
  }

  return (
    <Select value={locale ?? 'en'} onChange={handleChange}>
      {locales.map((lang) => {
        return <MenuItem key={lang} value={lang}>{lang.toUpperCase()}</MenuItem>
      })}
    </Select>
  )
}

export default LocaleSelect;