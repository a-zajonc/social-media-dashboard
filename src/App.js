import { ChakraProvider, Box } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="#1E202A" h="100vh">
        <DashboardComponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
