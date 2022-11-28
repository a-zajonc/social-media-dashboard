import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import iconUp from "../../../../icons/icon-up.svg";
import iconDown from "../../../../icons/icon-down.svg";

export function SocialMediaElement({
  color,
  bgGradient,
  group,
  icon,
  accountName,
  totalNumber,
  todayNumber,
}) {
  return (
    <Box
      bgColor={useColorModeValue("#F5F7FF", "#252A41")}
      h="250px"
      borderRadius="10px"
      _hover={{ bgColor: useColorModeValue("#F0F2FA", "#333a56") }}
    >
      <Box
        bgColor={color}
        bgGradient={bgGradient}
        position="relative"
        top="0px"
        h="8px"
        borderTopRadius="10px"
      />
      <Box
        h="100%"
        marginBottom="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box display="flex" flexDirection="row">
          <Image
            src={icon}
            h="100%"
            marginRight="10px"
            alt="Social Media Icon"
          />
          <Text color="#8B97C6" fontWeight="700">
            {accountName}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text
            color={useColorModeValue("#1E202A", "white")}
            fontWeight="700"
            fontSize="54px"
          >
            {totalNumber <= 10000
              ? totalNumber
              : totalNumber.toString().slice(0, -3).concat("k")}
          </Text>
          <Text
            color={useColorModeValue("#63687E", "#8B97C6")}
            textTransform="uppercase"
            letterSpacing="3px"
          >
            {group}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            src={todayNumber > 0 ? iconUp : iconDown}
            width="8px"
            height="4px"
            marginRight="5px"
            alt={todayNumber > 0 ? "Arrow Up Icon" : "Arrow Down Icon"}
          />
          <Text
            color={todayNumber > 0 ? "#1DB489" : "#DC414C"}
            fontWeight="700"
            marginRight="5px"
            fontSize="14px"
          >
            {Math.abs(todayNumber)}
          </Text>
          <Text
            color={todayNumber > 0 ? "#1DB489" : "#DC414C"}
            fontWeight="700"
            fontSize="14px"
          >
            Today
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
