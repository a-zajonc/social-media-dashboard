import { SocialMediaElement } from "./SocialMediaElement";
import { Grid } from "@chakra-ui/react";
import iconFacebook from "../../../icons/icon-facebook.svg";
import iconTwitter from "../../../icons/icon-twitter.svg";
import iconInstagram from "../../../icons/icon-instagram.svg";
import iconYouTube from "../../../icons/icon-youtube.svg";

export function SocialMediaDisplay() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={7}>
      <SocialMediaElement
        color="#198FF5"
        group="followers"
        icon={iconFacebook}
        accountName="@nathanf"
        totalNumber="1987"
        todayNumber="12"
      />
      <SocialMediaElement
        color="#1CA0F2"
        group="followers"
        icon={iconTwitter}
        accountName="@nathanf"
        totalNumber="1044"
        todayNumber="99"
      />
      <SocialMediaElement
        bgGradient="linear(to-r, #FDC468, #DF4996)"
        group="followers"
        icon={iconInstagram}
        accountName="@realnathanf"
        totalNumber="11k"
        todayNumber="1099"
      />
      <SocialMediaElement
        color="#C4032A"
        group="subscribers"
        icon={iconYouTube}
        accountName="Nathan F."
        totalNumber="8239"
        todayNumber="-144"
      />
    </Grid>
  );
}
