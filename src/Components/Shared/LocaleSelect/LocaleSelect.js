import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { locales } from '../../../utils/locales';
import { useParams, useNavigate } from "react-router-dom"

const LocaleSelect = () => {
  let navigate = useNavigate();
  const params = useParams();
  const locale = !params.lang ? 'en' : params.lang;

  const handleChange = (e) => {
    navigate("/"+e.target.value+"/"+params['*'], { replace: true });
  }

  return (
    <Select value={locale} onChange={handleChange}>
      {locales.map((lang) => {
        return <MenuItem value={lang}>{lang.toUpperCase()}</MenuItem>
      })}
    </Select>
  )
}

export default LocaleSelect;