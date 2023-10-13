import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BuildImg from "../../../../public/images/img_012.jpg";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div>
      <Box sx={{ p: "2% 0%" }}>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
            <Card elevation={0}>
              <CardContent>
                <Image src={BuildImg} height={820} width={700} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
            <Stack>
              <Typography variant="h2" sx={{ mt: "20px", mb: "10px" }}>
                {" "}
                Our Services
              </Typography>
              <Typography variant="h6" sx={{ mt: "15px", mb: "15px" }}>
                There are many services we provide to our clients to
                <br /> achieve cent percent satisficaion of their properties
              </Typography>
              <Box sx={{ padding: "20px 0px" }}>
                <Stack direction="row">
                  <Box
                    sx={{
                      width: "300px",
                      padding: "2%",
                    }}
                  >
                    <Typography variant="h4"> 01 </Typography>
                    <Typography variant="h5" sx={{ mt: "10px", mb: "10px" }}>
                      RESIDENTIAL SALES{" "}
                    </Typography>
                    <Typography variant="subtitle1">
                      {" "}
                      Connect with a lender to see if a lower interest rate can
                      save you money on your mortgage. Refinancing also gives
                      you the opportunity to take cash out depending on how much
                      equity you have built into your home
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      //   bgcolor: "green",
                      width: "300px",
                      padding: "2% 4%",
                      borderLeft: "2px solid black",
                    }}
                  >
                    <Typography variant="h4">02</Typography>
                    <Typography variant="h5" sx={{ mt: "10px", mb: "10px" }}>
                      RENTAL SERVICES
                    </Typography>

                    <Typography variant="subtitle1">
                      {" "}
                      The room rental agreement. This type of contract outlines
                      the rules and responsibilities required of the tenant and
                      landlord who will be sharing a space together
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row">
                  <Box
                    sx={{
                      width: "300px",
                      padding: "2%",
                      borderTop: "2px solid black",
                    }}
                  >
                    <Typography variant="h4">03 </Typography>
                    <Typography variant="h5" sx={{ mt: "10px", mb: "10px" }}>
                      OFF MARKET SALES{" "}
                    </Typography>

                    <Typography variant="subtitle1">
                      {" "}
                      Find out how your home measures up with homes that are for
                      sale or recently sold. Compare market value, listing
                      price, features and size in My Home.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "300px",
                      padding: "2% 4%",
                      borderTop: "2px solid black",
                      borderLeft: "2px solid black",
                    }}
                  >
                    <Typography variant="h4"> 04 </Typography>
                    <Typography variant="h5" sx={{ mt: "10px", mb: "10px" }}>
                      {" "}
                      COMMERCIAL SALES{" "}
                    </Typography>
                    <Typography variant="subtitle1">
                      {" "}
                      Determine the cost of selling your home with our Net
                      Proceeds calculator. Looking for a local real estate agent
                      or thinking about selling your home for cash?{" "}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* <BButton> BUY NOW</BuyButton> */}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OurServices;
