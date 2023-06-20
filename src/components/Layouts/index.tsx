// Libary UI
import { Box } from "@chakra-ui/react";

// Import React-Router-Dom
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <Box maxW={"100%"}>
      <Outlet />
    </Box>
  );
}
