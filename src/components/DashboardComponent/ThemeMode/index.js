import { Text, Box, Switch } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export function ThemeMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={{ sm: "space-between", md: "flex-end" }}
    >
      <Text
        fontSize="16px"
        color={{ sm: useColorModeValue("#63687E", "#8B97C6"), lg: "#8B97C6" }}
        fontWeight="700"
        marginRight="10px"
      >
        Dark Mode
      </Text>
      <Switch
        size="lg"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
    </Box>
  );
}
