"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const SeeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00695c",
  width: "130px",
  height: "54px",
  borderRadius: "30px",
  "&:hover": {
    backdropFilter: "blur(2px)",
    backgroundColor: "transparent",
  },
  textTransform: "none",
}));
