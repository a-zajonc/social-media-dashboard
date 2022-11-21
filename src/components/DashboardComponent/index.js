import { ThemeMode } from "./ThemeMode";
import {
  Box,
  Center,
  Divider,
  Text,
  useColorModeValue,
  Show,
} from "@chakra-ui/react";
import { SocialMediaDisplay } from "./SocialMediaDisplay";
import { OverviewDisplay } from "./OverviewDisplay";
import { useContext } from "react";
import { UserData } from "../../context";
import { LoaderIcon } from "../../icons/loaderIcon";

export function DashboardComponent() {
  const { feed, overview } = useContext(UserData);

  const followersSum = feed.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount;
  }, 0);

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around">
      <Box
        display="flex"
        flexDirection={{ sm: "column", lg: "row" }}
        justifyContent="space-between"
        marginBottom={{ sm: "30px", lg: "10px" }}
      >
        <Box display="flex" flexDirection="column" marginBottom="10px">
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
        <Show breakpoint="(max-width: 959px)">
          <Divider variant="thick" marginBottom="10px" />
        </Show>
        <ThemeMode />
      </Box>
      {feed.length > 0 ? (
        <SocialMediaDisplay />
      ) : (
        <Center>
          <LoaderIcon />
        </Center>
      )}
      <Text
        fontWeight="700"
        fontSize="20px"
        color={useColorModeValue("white", "#1E202A")}
        marginBlock="30px"
      >
        Overview - Today
      </Text>
      {overview.length > 0 ? (
        <OverviewDisplay />
      ) : (
        <Center>
          <LoaderIcon />
        </Center>
      )}
    </Box>
  );
}
