import { ThemeMode } from "./ThemeMode";
import { Box, Text } from "@chakra-ui/react";
import { SocialMediaDisplay } from "./SocialMediaDisplay";
import { OverviewDisplay } from "./OverviewDisplay";

export function DashboardComponent() {
  return (
    <Box>
      <Box>
        <Text fontWeight="700" fontSize="24px" color="white">
          Social Media Dashboard
        </Text>
        <Text color="#8B97C6">Total Followers:23,004</Text>
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
