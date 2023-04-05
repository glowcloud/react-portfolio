import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Menu, Add } from "@mui/icons-material";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <AppBar sx={{ backgroundColor: "#323d49" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OR
        </Typography>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
