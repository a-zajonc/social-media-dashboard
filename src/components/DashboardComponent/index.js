import { ThemeMode } from "./ThemeMode";
import { Box, Text } from "@chakra-ui/react";
import { SocialMediaDisplay } from "./SocialMediaDisplay";
import { OverviewDisplay } from "./OverviewDisplay";

export function DashboardComponent() {
  return (
    <Box
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Text fontWeight="700" fontSize="24px" color="white">
            Social Media Dashboard
          </Text>
          <Text color="#8B97C6">Total Followers:23,004</Text>
        </Box>
        <ThemeMode />
      </Box>
      <SocialMediaDisplay />
      <Text fontWeight="700" fontSize="20px" color="white">
        Overview - Today
      </Text>
      <OverviewDisplay />
    </Box>
  );
}
