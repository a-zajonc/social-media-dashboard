import { ThemeMode } from "./ThemeMode";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { SocialMediaDisplay } from "./SocialMediaDisplay";
import { OverviewDisplay } from "./OverviewDisplay";
import { useContext } from "react";
import { UserData } from "../../context";

export function DashboardComponent() {
  const { feed } = useContext(UserData);

  const followersSum = feed.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount;
  }, 0);

  return (
    <Box
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Text
            fontWeight="700"
            fontSize="24px"
            color={useColorModeValue("white", "#1E202A")}
          >
            Social Media Dashboard
          </Text>
          <Text
            color={useColorModeValue("#8B97C6", "#63687E")}
            fontWeight="700"
          >
            Total Followers: {followersSum}
          </Text>
        </Box>
        <ThemeMode />
      </Box>
      <SocialMediaDisplay />
      <Text
        fontWeight="700"
        fontSize="20px"
        color={useColorModeValue("white", "#1E202A")}
      >
        Overview - Today
      </Text>
      <OverviewDisplay />
    </Box>
  );
}
