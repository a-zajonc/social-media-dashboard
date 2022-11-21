import { SocialMediaElement } from "./SocialMediaElement";
import { Grid } from "@chakra-ui/react";
import iconFacebook from "../../../icons/icon-facebook.svg";
import iconTwitter from "../../../icons/icon-twitter.svg";
import iconInstagram from "../../../icons/icon-instagram.svg";
import iconYouTube from "../../../icons/icon-youtube.svg";
import { useContext } from "react";
import { UserData } from "../../../context";

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

function getColor(vendor) {
  if (vendor === "fb") {
    return "#198FF5";
  }
  if (vendor === "twitter") {
    return "#1CA0F2";
  }
  if (vendor === "ig") {
    return null;
  }
  if (vendor === "yt") {
    return "#C4032A";
  }
}

export function SocialMediaDisplay() {
  const { feed } = useContext(UserData);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
      gap={7}
    >
      {feed.map((socialStat, index) => {
        return (
          <SocialMediaElement
            key={index}
            color={getColor(socialStat.vendor)}
            bgGradient={
              socialStat.vendor === "ig"
                ? "linear(to-r, #FDC468, #DF4996)"
                : null
            }
            group={socialStat.vendor === "yt" ? "subscribers" : "followers"}
            icon={getIcon(socialStat.vendor)}
            accountName={socialStat.handler}
            totalNumber={socialStat.amount}
            todayNumber={socialStat.ranking}
          />
        );
      })}
    </Grid>
  );
}
