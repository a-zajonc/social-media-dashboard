import { Text, Box, Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export function ThemeMode() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Text fontSize="16px" color="#8B97C6" fontWeight="700" marginRight="10px">
        Dark Mode
      </Text>
      <Switch size="lg" onChange={toggleColorMode} />
    </Box>
  );
}
