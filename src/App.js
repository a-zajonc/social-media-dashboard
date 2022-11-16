import { ChakraProvider } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DashboardComponent />
    </ChakraProvider>
  );
}

export default App;
