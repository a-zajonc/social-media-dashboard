import { Text, Box, Switch } from "@chakra-ui/react";

export function ThemeMode() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Text fontSize="16px" color="#8B97C6" fontWeight="700" marginRight="10px">
        Dark Mode
      </Text>
      <Switch size="lg" />
    </Box>
  );
}
