import { useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  padding: "1rem",
}));

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Box width="100%" py="5rem" px="10rem">
        <Offset />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
