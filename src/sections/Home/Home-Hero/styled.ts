"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00695c",
  position: "absolute",
  top: "92%",
  left: "35%",
  width: "170px",
  height: "54px",
  borderRadius: "30px",
  "&:hover": {
    backdropFilter: "blur(2px)",
    backgroundColor: "transparent",
  },
  textTransform: "none",
}));

export const TransparentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  position: "absolute",
  border: "1px solid grey",
  left: "0%",
  padding: "3%",
  width: "450px",
  height: "280px",
  margin: "140px 95px",
  //   backgroundColor: "yellow",
  backdropFilter: "blur(5px)",
  "&:hover": {
    border: "2px solid grey",
  },
}));
