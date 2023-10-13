// import { COMMON, normalFont, primaryFont, theme } from "@/assets/theme/theme";
"use client";
import {
  Box,
  Stack,
  Typography,
  Button,
  Input,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const SeButton = styled(Button)(({ theme }) => ({
  width: "210px",
  height: "54px",
  color: "white",
  borderRadius: "30px",
  "&:hover": {
    border: "1px solid #0097a7",
  },

  border: "1px solid white",
  textTransform: "none",
}));

export const ParentBox = styled(Box)(({}) => ({
  //   backgroundColor: COMMON.primary.dark,
  backgroundColor: "#00695c",
  padding: "3%",
}));

export const LiListItemButton = styled(ListItemButton)(({}) => ({
  //   color: COMMON.primary.light,
}));

export const LHTypography = styled(Typography)(({}) => ({
  //   fontFamily: primaryFont.style.fontFamily,
  color: "white",
  //   color: COMMON.primary.contrastText,
}));

export const LTypography = styled(Typography)(({}) => ({
  //   fontFamily: normalFont.style.fontFamily,
  color: "white",
}));

export const SMTypography = styled(Typography)(({}) => ({
  //   color: COMMON.primary.contrastText,
  //   fontFamily: primaryFont.style.fontFamily,
  color: "white",
  marginTop: "4px",
}));
export const IconStack = styled(Stack)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "20px",
}));

export const SBox = styled(Box)(({}) => ({
  marginRight: "25px",
}));

export const IStack = styled(Stack)(({}) => ({
  display: "flex",
  flexDirection: "row",
  //   [theme.breakpoints.up("xs")]: {
  //     flexDirection: "column",
  //   },
  marginTop: "25px",
}));

export const SBButton = styled(Button)(({}) => ({
  maxWidth: "145px",
  //   [theme.breakpoints.up("md")]: {
  //     maxWidth: "120px",
  //   },
  //   [theme.breakpoints.up("xs")]: {
  //     maxWidth: "70px",
  //   },
  height: "50px",
  //   backgroundColor: COMMON.primary.light,
  //   color: COMMON.primary.dark,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const SBInput = styled(Input)(({ theme }) => ({
  marginBottom: "20px",
  display: "flex",
  //   [theme.breakpoints.down("md")]: {
  //     display: "flex",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     display: "none",
  //   },
  //   color: COMMON.secondary.lighter,
  borderRadius: "4px",
  border: "2px solid white",
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  //   [theme.breakpoints.down("xs")]: {
  //     maxWidth: "420px",
  //   },
  paddingLeft: "2px",

  height: 50,
  //   backgroundColor: COMMON.primary.dark,
  //   "&:hover": {
  //     backgroundColor: "transparent",
  //     // color: COMMON.secondary.lighter,
  //   },
}));
