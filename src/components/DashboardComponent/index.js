import { ThemeMode } from "./ThemeMode";
import { Box, Text } from "@chakra-ui/react";
import { SocialMediaDisplay } from "./SocialMediaDisplay";
import { OverviewDisplay } from "./OverviewDisplay";

export function DashboardComponent() {
  return (
    <Box>
      <Box>
        <Text>Social Media Dashboard</Text>
        <Text>Total Followers:23,004</Text>
        <ThemeMode />
      </Box>
      <SocialMediaDisplay />
      <Text>Overview - Today</Text>
      <OverviewDisplay />
    </Box>
  );
}
