import { PulseLoader } from "react-spinners";
import { useColorModeValue } from "@chakra-ui/react";

export function LoaderIcon() {
  return (
    <PulseLoader
      color={useColorModeValue("white", "#1E202A")}
      margin="10"
      size="20"
    />
  );
}
