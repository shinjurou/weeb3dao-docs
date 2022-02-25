import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const BigButton = styled(Button)(({ theme }) => ({
  width: "50%",
}));

export default function IconLabelButtons(props) {
  const { lang } = useParams();

  return (
    <Stack direction="row" spacing={2} mt={3}>
      <BigButton
        component={Link}
        to={lang ? "/"+lang+props.returnlink : props.returnlink}
        variant="contained"
        disableElevation
        size="large"
        startIcon={<NavigateBeforeIcon />}
        disabled={!props.returnlink ? true : false}
      >
        {props.return}
      </BigButton>

      <BigButton
        component={Link}
        to={lang ? "/"+lang+props.nextlink : props.nextlink}
        variant="contained"
        disableElevation
        size="large"
        endIcon={<NavigateNextIcon />}
        disabled={!props.nextlink ? true : false}
      >
        {props.next}
      </BigButton>
    </Stack>
  );
}
