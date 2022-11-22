import { PulseLoader } from "react-spinners";
import { useColorModeValue } from "@chakra-ui/react";

export function LoaderIcon() {
  return (
    <PulseLoader
      color={useColorModeValue("#1E202A", "white")}
      margin="10px"
      size="20px"
    />
  );
}
