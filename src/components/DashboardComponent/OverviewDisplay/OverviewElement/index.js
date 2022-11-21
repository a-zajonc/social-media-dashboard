import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import iconUp from "../../../../icons/icon-up.svg";
import iconDown from "../../../../icons/icon-down.svg";

export function OverviewElement({ label, icon, amount, ranking }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bgColor={useColorModeValue("#252A41", "#F5F7FF")}
      borderRadius="10px"
      h="150px"
      padding="30px"
      _hover={{ bgColor: useColorModeValue("#333a56", "#F0F2FA") }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Text
          color={useColorModeValue("#8B97C6", "#63687E")}
          fontWeight="700"
          fontSize={{ base: "18px", lg: "13px", xl: "15px" }}
        >
          {label}
        </Text>
        <Image src={icon} h="100%" />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Text
          color={useColorModeValue("white", "#1E202A")}
          fontSize={{ base: "30px", lg: "25px", xl: "30px" }}
          fontWeight="700"
        >
          {amount <= 10000
            ? amount
            : amount.toString().slice(0, -3).concat("k")}
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            src={ranking > 0 ? iconUp : iconDown}
            width="8px"
            height="4px"
            marginRight="2px"
          />
          <Text
            color={ranking > 0 ? "#1DB489" : "#DC414C"}
            fontWeight="700"
            fontSize={{ base: "20px", lg: "12px", xl: "15px" }}
          >
            {Math.abs(ranking)}%
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
