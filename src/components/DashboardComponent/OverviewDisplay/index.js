import { Grid, Box, Text, Image } from "@chakra-ui/react";
import iconFacebook from "../../../icons/icon-facebook.svg";
import iconUp from "../../../icons/icon-up.svg";

export function OverviewDisplay() {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bgColor="#252A41"
        borderRadius="10px"
        h="150px"
        padding="30px"
      >
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Text color="#8B97C6" fontWeight="700">
            Page Views
          </Text>
          <Image src={iconFacebook} h="100%" />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Text color="white" fontSize="30px" fontWeight="700">
            87
          </Text>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Image src={iconUp} width="8px" height="4px" marginRight="2px" />
            <Text color="#1DB489">3%</Text>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
