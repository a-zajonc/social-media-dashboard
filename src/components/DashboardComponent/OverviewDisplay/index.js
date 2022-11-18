import { Grid } from "@chakra-ui/react";
import iconFacebook from "../../../icons/icon-facebook.svg";
import iconInstagram from "../../../icons/icon-instagram.svg";
import iconTwitter from "../../../icons/icon-twitter.svg";
import iconYouTube from "../../../icons/icon-youtube.svg";
import { UserData } from "../../../context";
import { useContext } from "react";
import { OverviewElement } from "./OverviewElement";

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
      {overview.map((socialStat, index) => {
        return (
          <OverviewElement
            key={index}
            icon={getIcon(socialStat.vendor)}
            label={socialStat.label}
            amount={socialStat.amount}
            ranking={socialStat.ranking}
          />
        );
      })}
    </Grid>
  );
}
