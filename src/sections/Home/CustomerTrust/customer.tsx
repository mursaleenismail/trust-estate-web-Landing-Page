import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Comas from "../../../../public/Comas.png";
import PR1 from "../../../../public/CS01.png";
import PR2 from "../../../../public/CS02.png";
import { SeeButton } from "./styled";

export const Customer = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={0} sx={{ flexGrow: 1 }}>
          <Grid xl={7} lg={7} md={7} sm={12} xs={12}>
            {/* <Stack spacing={2} direction="row" padding="5%"> */}
            <Card
              elevation={0}
              sx={{
                padding: "15px  30px",
                margin: "4%",
                boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "25px",
                  }}
                >
                  <Image src={PR1} width={75} height={60} alt="" />
                  <Typography variant="h5" sx={{ marginRight: "70%" }}>
                    Emily Wilson
                  </Typography>
                  <Image src={Comas} width={45} height={35} alt="" />
                </Box>
                <Typography sx={{ fontSize: "19px" }}>
                  Lörem ipsum aktiga syressa ogong i delig infrast. Nånåmosk
                  ilingar,
                  <br /> surdegshotell aras. Bloggbävning trigt, berek, innan
                  pansexuell, mobil klubb.
                  <br /> Misa agnostigram. Tis senade benade treskapet inklusive
                  krod.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                padding: "15px  30px",
                margin: "4%",
                boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "25px",
                  }}
                >
                  <Image src={PR2} width={75} height={65} alt="" />
                  <Typography variant="h5" sx={{ marginRight: "68%" }}>
                    Jonathan Rick
                  </Typography>
                  <Image src={Comas} width={45} height={35} alt="" />
                </Box>
                <Typography sx={{ fontSize: "19px" }}>
                  Euronat näd i mytogen kågäbel om än tasigförsamhet. Desade
                  poras komins.
                  <br /> Dongen nytus jädoligt spebud. Susk autosk lagad
                  krympflation inte nypat.
                  <br /> Bilsurfa.
                </Typography>
              </CardContent>
            </Card>
            {/* </Stack> */}
          </Grid>
          <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
            <Card elevation={0} sx={{ padding: "5% 0%", margin: "4%" }}>
              <CardContent
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  paddingRight: {
                    xl: "260px",
                    lg: "110px",
                    md: "70px",
                    sm: "70px",
                    xs: "10px",
                  },
                  paddingTop: "15px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "right",
                    alignItems: "right",
                    padding: "2%",
                    fontWeight: "750",
                    color: "#004d40",
                  }}
                >
                  TRUST OUR <br />
                  CUSTOMER
                </Typography>

                <Typography
                  sx={{
                    marginTop: "20px",
                    fontSize: "19px",
                    textAlign: "right",
                    alignItems: "right",
                    lineHeight: "1.9",
                    fontWeight: "750",
                    color: "#004d40",
                  }}
                >
                  Our customers are happy in our <br />
                  service.As so,they have left some <br />
                  valuable testimonial for you to verify
                </Typography>
                <Box sx={{ textAlign: "right", margin: "4% 0%" }}>
                  <SeeButton variant="contained" size="large">
                    See all
                  </SeeButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/*         
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xl={5} lg={5} md={5} sm={6} xs={12}>
            <Stack spacing={2} direction="row" padding="5%">
              <Card sx={{ padding: "2% 4%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "25px",
                    }}
                  >
                    <Image src={PR1} width={75} height={60} alt="" />
                    <Typography variant="h5" sx={{ marginRight: "70%" }}>
                      Emily Wilson
                    </Typography>
                    <Image src={Comas} width={45} height={35} alt="" />
                  </Box>
                  <Typography sx={{}}>
                    Lörem ipsum aktiga syressa ogong i delig infrast. Nånåmosk
                    ilingar,
                    <br /> surdegshotell aras. Bloggbävning trigt, berek, innan
                    pansexuell, mobil klubb.
                    <br /> Misa agnostigram. Tis senade benade treskapet
                    inklusive krod.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid xl={7} lg={7} md={7} sm={6} xs={12}>
            <Stack spacing={2} direction="row" padding="5%">
              <Card sx={{ padding: "2% 4%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "25px",
                    }}
                  >
                    <Image src={PR2} width={75} height={65} alt="" />
                    <Typography variant="h5" sx={{ marginRight: "68%" }}>
                      Jonathan Rick
                    </Typography>
                    <Image src={Comas} width={45} height={35} alt="" />
                  </Box>
                  <Typography sx={{ fontSize: "18px" }}>
                    Euronat näd i mytogen kågäbel om än tasigförsamhet. Desade
                    poras komins.
                    <br /> Dongen nytus jädoligt spebud. Susk autosk lagad
                    krympflation inte nypat.
                    <br /> Bilsurfa.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
};

export default Customer;
