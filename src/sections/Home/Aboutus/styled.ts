"use client";
import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

export const ParentBox = styled(Box)(({}) => ({
  backgroundColor: "white",
  p: "4%",
}));

export const MiddleBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "4px",
}));

export const MBox = styled(Box)(({}) => ({
  padding: "1%",
  border: "none",
  width: "90px",
  height: "90px",
  marginRight: "15px",
}));
