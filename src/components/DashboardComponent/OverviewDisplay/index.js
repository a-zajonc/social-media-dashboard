import { Grid, Box, Text, Image } from "@chakra-ui/react";
import iconFacebook from "../../../icons/icon-facebook.svg";
import iconInstagram from "../../../icons/icon-instagram.svg";
import iconTwitter from "../../../icons/icon-twitter.svg";
import iconYouTube from "../../../icons/icon-youtube.svg";
import iconDown from "../../../icons/icon-down.svg";
import iconUp from "../../../icons/icon-up.svg";
import { UserData } from "../../../context";
import { useContext } from "react";

function getIcon(vendor) {
  if (vendor === "fb") {
    return iconFacebook;
  }
  if (vendor === "twitter") {
    return iconTwitter;
  }
  if (vendor === "ig") {
    return iconInstagram;
  }
  if (vendor === "yt") {
    return iconYouTube;
  }
}

export function OverviewDisplay() {
  const { overview } = useContext(UserData);

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      {overview.map((socialStat) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bgColor="#252A41"
            borderRadius="10px"
            h="150px"
            padding="30px"
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text color="#8B97C6" fontWeight="700">
                {socialStat.label}
              </Text>
              <Image src={getIcon(socialStat.vendor)} h="100%" />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text color="white" fontSize="30px" fontWeight="700">
                {socialStat.amount <= 10000
                  ? socialStat.amount
                  : socialStat.amount.toString().slice(0, -3).concat("k")}
              </Text>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={socialStat.ranking > 0 ? iconUp : iconDown}
                  width="8px"
                  height="4px"
                  marginRight="2px"
                />
                <Text
                  color={socialStat.ranking > 0 ? "#1DB489" : "#DC414C"}
                  fontWeight="700"
                >
                  {Math.abs(socialStat.ranking)}%
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}
