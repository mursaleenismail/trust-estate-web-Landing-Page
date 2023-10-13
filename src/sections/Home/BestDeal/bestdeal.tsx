import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Img1 from "../../../../public/images/img_018.jpg";
import Img2 from "../../../../public/images/img_021.jpg";
import Img3 from "../../../../public/images/img_03.jpg";
import Img4 from "../../../../public/images/img_07.jpg";
import React from "react";
import { ArrowRightAlt, PlaceOutlined } from "@mui/icons-material";
import Link from "next/link";

const BestDeal = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <Stack
          // bgcolor="yellow"
          direction="row"
          alignItems="start"
          justifyContent="space-between"
        >
          <Typography variant="h3" sx={{ p: "2% 3%" }}>
            BEST DEAL FOR YOU
          </Typography>
          {/* <Link href="#" style={{ textDecoration: "none" }}> */}
          <Box
            sx={{
              p: "2% 5%",
              display: "flex",
              flexDirection: "row",
              width: "115px",
            }}
          >
            <Typography sx={{ p: "2% 4%", fontSize: "20px" }}>
              View all{" "}
            </Typography>
            <Typography>
              <ArrowRightAlt sx={{ fontSize: "34px" }} />
            </Typography>
          </Box>
          {/* </Link> */}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          position="relative"
          // sx={{ bgcolor: "red" }}
        >
          {/* <CardBox> */}
          <Grid container spacing={0}>
            <Grid xs={12} xl={3} lg={4} md={4} sm={6}>
              <Stack spacing={0}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#eeeeee ",
                    paddingBottom: "5px",
                    position: "relative",
                    margin: "0px 20px",
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Stack
                      sx={{
                        bgcolor: "#eeeeee",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "100px",
                      }}
                    >
                      <Image src={Img1} width={410} height={535} alt="" />
                    </Stack>

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{
                        position: "absolute",
                        left: {
                          xl: "72px",
                          lg: "70px",
                          md: "18px",
                          sm: "42px",
                          xs: "20px",
                        },
                        top: "490px",
                        width: "300px",
                        height: "110px",
                        bgcolor: "whitesmoke",
                        boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
                        // border: "1px solid black",
                        // "@media (max-width: 600px)": {
                        //   transform: "translate(-50%, -50%)",
                        // },
                        // "@media (min-width: 601px) and (max-width: 960px)": {
                        //   transform: "translate(-30%, -30%)",
                        // },
                        // "@media (min-width: 961px)": {
                        //   transform: "translate(-22%, -55%)",
                        // },
                      }}
                    >
                      <Box sx={{ position: "absolute" }}>
                        <Typography
                          variant="h5"
                          sx={{ paddingLeft: "10px", pt: "7px", pb: "10px" }}
                        >
                          {" "}
                          $1000
                        </Typography>
                      </Box>
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: "19px  0px",
                        }}
                      >
                        <Typography>1000Sq</Typography>
                        <Typography sx={{ margin: "0 70px" }}>3Bed</Typography>
                        <Typography>2Bath</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          margin: "-5px 0px",
                          padding: "2px 15px",
                        }}
                      >
                        <PlaceOutlined />
                        <Typography>123 Street,NY</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid xs={12} xl={3} lg={4} md={4} sm={6}>
              <Stack spacing={0}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#eeeeee ",
                    paddingBottom: "5px",
                    position: "relative",
                    margin: "0px 20px",
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Stack
                      sx={{
                        bgcolor: "#eeeeee",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "100px",
                      }}
                    >
                      <Image src={Img2} width={410} height={535} alt="" />
                    </Stack>

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{
                        position: "absolute",
                        left: {
                          xl: "72px",
                          lg: "55px",
                          md: "18px",
                          sm: "42px",
                          xs: "20px",
                        },
                        top: "490px",
                        width: "300px",
                        height: "110px",
                        bgcolor: "whitesmoke",
                        boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
                        // border: "1px solid black",
                        // "@media (max-width: 600px)": {
                        //   transform: "translate(-50%, -50%)",
                        // },
                        // "@media (min-width: 601px) and (max-width: 960px)": {
                        //   transform: "translate(-30%, -30%)",
                        // },
                        // "@media (min-width: 961px)": {
                        //   transform: "translate(-22%, -55%)",
                        // },
                      }}
                    >
                      <Box sx={{ position: "absolute" }}>
                        <Typography
                          variant="h5"
                          sx={{ paddingLeft: "10px", pt: "7px", pb: "10px" }}
                        >
                          {" "}
                          $1000
                        </Typography>
                      </Box>
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: "19px  0px",
                        }}
                      >
                        <Typography>1000Sq</Typography>
                        <Typography sx={{ margin: "0 70px" }}>3Bed</Typography>
                        <Typography>2Bath</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          margin: "-5px 0px",
                          padding: "2px 15px",
                        }}
                      >
                        <PlaceOutlined />
                        <Typography>123 Street,NY</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid xs={12} xl={3} lg={4} md={4} sm={6}>
              <Stack spacing={0}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#eeeeee ",
                    paddingBottom: "5px",
                    position: "relative",
                    margin: "0px 20px",
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Stack
                      sx={{
                        bgcolor: "#eeeeee",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "100px",
                      }}
                    >
                      <Image src={Img3} width={410} height={535} alt="" />
                    </Stack>

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{
                        position: "absolute",
                        left: {
                          xl: "72px",
                          lg: "55px",
                          md: "18px",
                          sm: "42px",
                          xs: "20px",
                        },
                        top: "490px",
                        width: "300px",
                        height: "110px",
                        bgcolor: "whitesmoke",
                        boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
                        // border: "1px solid black",
                        // "@media (max-width: 600px)": {
                        //   transform: "translate(-50%, -50%)",
                        // },
                        // "@media (min-width: 601px) and (max-width: 960px)": {
                        //   transform: "translate(-30%, -30%)",
                        // },
                        // "@media (min-width: 961px)": {
                        //   transform: "translate(-22%, -55%)",
                        // },
                      }}
                    >
                      <Box sx={{ position: "absolute" }}>
                        <Typography
                          variant="h5"
                          sx={{ paddingLeft: "10px", pt: "7px", pb: "10px" }}
                        >
                          {" "}
                          $1000
                        </Typography>
                      </Box>
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: "19px  0px",
                        }}
                      >
                        <Typography>1000Sq</Typography>
                        <Typography sx={{ margin: "0 70px" }}>3Bed</Typography>
                        <Typography>2Bath</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          margin: "-5px 0px",
                          padding: "2px 15px",
                        }}
                      >
                        <PlaceOutlined />
                        <Typography>123 Street,NY</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid xs={12} xl={3} lg={4} md={4} sm={6}>
              <Stack spacing={0}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#eeeeee ",
                    paddingBottom: "5px",
                    position: "relative",
                    margin: "0px 20px",
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Stack
                      sx={{
                        bgcolor: "#eeeeee",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "100px",
                      }}
                    >
                      <Image src={Img4} width={410} height={535} alt="" />
                    </Stack>

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{
                        position: "absolute",
                        left: {
                          xl: "72px",
                          lg: "55px",
                          md: "18px",
                          sm: "42px",
                          xs: "20px",
                        },
                        top: "490px",
                        width: "300px",
                        height: "110px",
                        bgcolor: "whitesmoke",
                        boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.19)",
                        // border: "1px solid black",
                        // "@media (max-width: 600px)": {
                        //   transform: "translate(-50%, -50%)",
                        // },
                        // "@media (min-width: 601px) and (max-width: 960px)": {
                        //   transform: "translate(-30%, -30%)",
                        // },
                        // "@media (min-width: 961px)": {
                        //   transform: "translate(-22%, -55%)",
                        // },
                      }}
                    >
                      <Box sx={{ position: "absolute" }}>
                        <Typography
                          variant="h5"
                          sx={{ paddingLeft: "10px", pt: "7px", pb: "10px" }}
                        >
                          {" "}
                          $1000
                        </Typography>
                      </Box>
                      <br />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: "19px  0px",
                        }}
                      >
                        <Typography>1000Sq</Typography>
                        <Typography sx={{ margin: "0 70px" }}>3Bed</Typography>
                        <Typography>2Bath</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          margin: "-5px 0px",
                          padding: "2px 15px",
                        }}
                      >
                        <PlaceOutlined />
                        <Typography>123 Street,NY</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </div>
  );
};

export default BestDeal;
