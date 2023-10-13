import { Box, Grid, List, ListItem, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Mlogo from "../../../public/BuildingLogo1.png";

import {
  IStack,
  LHTypography,
  LTypography,
  LiListItemButton,
  ParentBox,
  SBInput,
  SBox,
  SMTypography,
  SeButton,
} from "./styled";
import { MainContainer } from "@/app/page";

const Footer = () => {
  return (
    <Box>
      <ParentBox>
        {/* <MainContainer> */}
        <Grid container spacing={0}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Box>
              <SMTypography variant="h5" sx={{ p: "25px 40px" }}>
                Get all our news and offers in one place
              </SMTypography>
            </Box>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <IStack>
              <SBInput
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </IStack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <SeButton variant="outlined" size="large">
              See catalogue
            </SeButton>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xl={4} lg={5} md={5} sm={6} xs={12}>
            <Stack direction="row" sx={{ Padding: "2%" }}>
              <Box>
                <Image src={Mlogo} width={117} height={65} alt="" />
              </Box>
              <Box>
                <SMTypography variant="h5" sx={{ pt: "15px" }}>
                  TRUST-ESTATE
                </SMTypography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem
                  sx={{
                    ml: 2,
                  }}
                >
                  <LHTypography variant="h6"> About Us</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">AboutUs</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Our Services</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">How it Works</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">
                      Become a Partner
                    </LTypography>
                  </LiListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Community</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Token</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Discussion</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Voting</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Blog</LTypography>
                  </LiListItemButton>
                  {/* <LiListItemButton>
                    <LTypography variant="subtitle2">Help Center</LTypography>
                  </LiListItemButton> */}
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Social Media</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Instagram</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Facebook</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle2">Twitter</LTypography>
                  </LiListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          {/* 
          <Grid item xl={5} lg={5} md={6} sm={6} xs={12}>
            <Stack>
              <LHTypography variant="h6">Stay up to date</LHTypography>
            </Stack>

            <IStack>
              <SBInput
                placeholder="Enter your email"
                type="email"
                name="email"
                endAdornment={<SBButton variant="contained">SUBMIT</SBButton>}
              />
            </IStack>
          </Grid> */}
        </Grid>
        {/* </MainContainer> */}
      </ParentBox>
    </Box>
  );
};
export default Footer;
