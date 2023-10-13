"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CatelogueButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00695c",
  width: "210px",
  height: "54px",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#0097a7",
  },
  textTransform: "none",
}));
export const SeButton = styled(Button)(({ theme }) => ({
  width: "210px",
  height: "54px",
  borderRadius: "30px",
  "&:hover": {
    border: "1px solid #0097a7",
  },
  color: "#00695c",
  border: "1px solid #00695c",
  textTransform: "none",
}));
