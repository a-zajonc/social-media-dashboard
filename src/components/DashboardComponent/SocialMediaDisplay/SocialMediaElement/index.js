import { Box, Image, Text } from "@chakra-ui/react";
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
    <Box bgColor="#252A41" h="250px" borderRadius="10px">
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
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" flexDirection="row">
          <Image src={icon} h="100%" marginRight="10px" />
          <Text color="#8B97C6">{accountName}</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text color="white" fontWeight="700" fontSize="44px">
            {totalNumber}
          </Text>
          <Text color="#8B97C6" textTransform="uppercase" letterSpacing="3px">
            {group}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            src={todayNumber > 0 ? iconUp : iconDown}
            width="8px"
            height="4px"
            marginRight="5px"
          />
          <Text
            color={todayNumber > 0 ? "#1DB489" : "#DC414C"}
            marginRight="5px"
          >
            {todayNumber.replace(/\D/g, "")}
          </Text>
          <Text color={todayNumber > 0 ? "#1DB489" : "#DC414C"}>Today</Text>
        </Box>
      </Box>
    </Box>
  );
}
