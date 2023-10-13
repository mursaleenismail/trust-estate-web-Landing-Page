import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import HeroPic from "../../../../public/images/img_06.jpg";
import Image from "next/image";
import { HeroButton, TransparentBox } from "./styled";

const Homehero = () => {
  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          // // flexDirection: "row",
          position: "relative",
          // bgcolor: "pink",
          padding: "0 21%",
        }}
      >
        <TransparentBox>
          <Typography variant="h2">
            {" "}
            FIND YOUR <br />
            DREAM HOUSE
          </Typography>
          <Typography sx={{ marginTop: "15px" }}>
            How often have you driven down a street and seen a home that was
            exactly what you always wanted? Perhaps you were thumbing through a
            magazine or watching TV and saw the perfect house for your family.
            It's true, we all have an image of our perfect dream home, and we
            can help you find it!
          </Typography>
          <HeroButton variant="contained" size="large">
            See projects
          </HeroButton>
        </TransparentBox>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Image
            style={{ height: "650px", width: "1030px" }}
            src={HeroPic}
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default Homehero;
