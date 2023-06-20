// Library UI
import { Box } from "@chakra-ui/react";
// Import Page
import Dashboard from "./Dashboard";

const index = () => {
  return (
    <Box
      maxW={"100%"}
      py={{ base: 6, md: 10 }}
      my={"auto"}
      gridTemplateColumns={"auto 25rem"}
    >
      <Dashboard />
    </Box>
  );
};

export default index;
