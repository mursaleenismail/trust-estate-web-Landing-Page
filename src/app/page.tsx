import Image from "next/image";
import Stack from "@mui/material/Stack";
import Homehero from "@/sections/Home/Home-Hero/homehero";
import AboutUs from "@/sections/Home/Aboutus/aboutus";
import { Box } from "@mui/material";
import OurServices from "@/sections/Home/OurServices/ourservices";
import BestDeal from "@/sections/Home/BestDeal/bestdeal";
import Customer from "@/sections/Home/CustomerTrust/customer";
import Catelogue from "@/sections/Home/Catelogue/catelogue";
import Footer from "@/layouts/Footer/footer";

export default function Home() {
  return (
    <>
      <div>
        {/* Header */}
        <Stack>
          {/* <MainContainer backgroundColor={""}> */}
          {/* <Homehero /> */}
          {/* <MainContainer backgroundColor={""}> */}
          <AboutUs />
          {/* </MainContainer> */}
          {/* <MainContainer backgroundColor={""}> */}
          <OurServices />
          {/* </MainContainer> */}
          {/* <MainContainer backgroundColor={""}> */}
          <BestDeal />
          {/* </MainContainer> */}
          {/* <MainContainer backgroundColor={""}> */}
          <Customer />
          {/* </MainContainer> */}
          {/* <MainContainer backgroundColor={""}> */}
          <Catelogue />
          {/* </MainContainer> */}
          {/* <MainContainer backgroundColor={""}> */}
          {/* </MainContainer> */}
          {/* </MainContainer> */}
        </Stack>
        <Footer />
      </div>
    </>
  );
}

export const MainContainer = ({
  children = <></>,
  backgroundColor = "",
}: {
  children?: any;
  backgroundColor: string;
}) => {
  return (
    <Box
      sx={{
        padding: {
          lg: "10px 175px",
          md: "10px 175px",
          sm: "5px 20px",
          xs: "5px 10px",
        },
        backgroundColor,
      }}
    >
      {children}
    </Box>
  );
};
