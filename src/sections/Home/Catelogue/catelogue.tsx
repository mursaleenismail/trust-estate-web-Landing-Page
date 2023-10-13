import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Building from "../../../../public/images/img_001.png";
import { CatelogueButton, SeButton } from "./styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Catelogue = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={0} sx={{ flexGrow: 1 }}>
          <Grid item xl={7} lg={7} md={7} sm={6} xs={12}>
            <Box
              sx={{
                margin: "5%",
                padding: {
                  xl: "10% 2%",
                  lg: "10% 2%",
                  md: "10% 2%",
                  sm: "0 10px ",
                  xs: "0 10px",
                },
              }}
            >
              <Box
                sx={{
                  padding: {
                    lg: "15% 10% 2% 10%",
                    md: "15% 10% 2% 10%",
                    sm: "0",
                    xs: "0",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    padding: "2%",
                    fontWeight: "750",
                    color: "#004d40",
                  }}
                >
                  NOT SURE YET?
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    padding: "2%",
                    color: "#004d40",
                  }}
                >
                  Let us help you out
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  padding: {
                    lg: "0px 110px",
                    md: "0 110px",
                    sm: "0",
                    xs: "0",
                  },
                }}
              >
                <CatelogueButton
                  sx={{ marginBottom: "28px" }}
                  variant="contained"
                  size="large"
                >
                  Request a quote <KeyboardArrowRightIcon />
                </CatelogueButton>{" "}
                or
                <br />
                <SeButton variant="outlined" size="large">
                  See catalogue
                </SeButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xl={5} lg={5} md={5} sm={6} xs={12}>
            <Card elevation={0} sx={{}}>
              <CardContent>
                <Image src={Building} height={750} alt="" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Catelogue;
