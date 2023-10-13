import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { MBox, MiddleBox } from "./styled";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Image from "next/image";
import {
  LocationOnOutlined,
  MapsHomeWork,
  PersonOutline,
} from "@mui/icons-material";
import roundImg from "../../../../public/green.png";

const AboutUs = () => {
  return (
    <div>
      <Box sx={{ padding: "0 5%" }}>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
            <Stack sx={{ padding: "5%" }}>
              <Card elevation={0}>
                <CardContent sx={{ padding: "4%" }}>
                  <Typography variant="h2" sx={{ mb: "5px" }}>
                    ABOUT US
                  </Typography>
                  <Typography sx={{ mt: "5px", fontSize: "20px" }}>
                    For years, millions of home shoppers have turned to
                    trust-estate to <br />
                    find their dream home. We offers a comprehensive list of
                    for-sale <br /> properties, as well as the information and
                    tools to make informed real <br />
                    estate decisions. Our team help the property owners to
                    manage their <br /> home like the important investment it is
                    by tracking their home's value <br /> over time, researching
                    and managing home improvements, and <br />
                    scouting other similar properties in the neighborhood.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
            <Stack sx={{ padding: "10%  0% " }}>
              <MiddleBox sx={{ padding: "5px 0px" }}>
                <MBox sx={{ width: "150px" }}>
                  <Typography
                    variant="h3"
                    sx={{ marginRight: "20px", textAlign: "center" }}
                  >
                    {" "}
                    $110M{" "}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {" "}
                    Proporties sold{" "}
                  </Typography>
                </MBox>
                <MBox
                  sx={{
                    width: "150px",
                  }}
                >
                  <Typography variant="h3" sx={{ textAlign: "center" }}>
                    10+
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {" "}
                    Years Experience
                  </Typography>
                </MBox>
              </MiddleBox>

              <MiddleBox
                sx={{
                  padding: "10px 0px",
                  marginTop: "10px",
                }}
              >
                <MBox sx={{ width: "150px" }}>
                  <Typography variant="h3" sx={{ textAlign: "center" }}>
                    25+{" "}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {" "}
                    Professional Agents
                  </Typography>
                </MBox>
                <MBox
                  sx={{
                    width: "150px",
                  }}
                >
                  <Typography variant="h3" sx={{ textAlign: "center" }}>
                    30+{" "}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    {" "}
                    Awards
                  </Typography>
                </MBox>
              </MiddleBox>

              {/* <Button> BUY NOW</Button> */}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          padding: "20px 20% 105px 7% ",
          bgcolor: "#e0e0e0",
        }}
      >
        <Grid container spacing={0} sx={{ flexGrow: 1 }}>
          <Grid xl={4} lg={4} md={4} sm={4} xs={12}>
            <Card
              elevation={0}
              sx={{ height: "195px", padding: " 2% 3%", bgcolor: "#e0e0e0" }}
            >
              <CardContent>
                <PersonOutline sx={{ fontSize: "43px" }} />
                <Typography variant="h4"> Easy ownership </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Find propertise with an immersive <br />
                  photo listing, find experience and the most <br />
                  including things you won't <br />
                  anywhere else.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xl={4} lg={4} md={4} sm={4} xs={12}>
            <Card
              elevation={0}
              sx={{ height: "195px", padding: " 2% 3%", bgcolor: "#e0e0e0" }}
            >
              <CardContent>
                <MapsHomeWork sx={{ fontSize: "43px" }} />
                <Typography variant="h4">EMI upto 10 Years</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Trust-Estate makes it easy to take <br /> steps to find the
                  right loan, so that <br /> you can get the home you have{" "}
                  <br /> dreamed about
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xl={4} lg={4} md={4} sm={4} xs={12}>
            <Card
              elevation={0}
              sx={{ height: "195px", padding: " 2% 3%", bgcolor: "#e0e0e0" }}
            >
              <CardContent>
                <LocationOnOutlined sx={{ fontSize: "43px" }} />
                <Typography variant="h4"> Suitable Location</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  A suitable place makes a sweet <br /> home. We create a
                  seamless <br />
                  experience for our customers so <br />
                  that they can find their peacefull <br /> place to call as
                  home
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
