import { Text, Box, Switch } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export function ThemeMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={{ sm: "space-between" }}
    >
      <Text
        fontSize="16px"
        color={{ sm: useColorModeValue("#8B97C6", "#63687E"), lg: "#8B97C6" }}
        fontWeight="700"
        marginRight="10px"
      >
        Dark Mode
      </Text>
      <Switch
        size="lg"
        onChange={toggleColorMode}
        isChecked={colorMode === "light"}
      />
    </Box>
  );
}
