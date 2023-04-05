import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <AppBar sx={{ backgroundColor: "#323d49" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, visibility: { xs: "visible", md: "hidden" } }}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </IconButton>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          sx={{ mr: 2, visibility: { xs: "hidden", md: "visible" } }}
        >
          <Typography
            variant="h6"
            component={Link}
            href="#home"
            underline="hover"
            mx={1}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#about"
            underline="hover"
            mx={1}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#skills"
            underline="hover"
            mx={1}
          >
            Skills
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#projects"
            underline="hover"
            mx={1}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#contact"
            underline="hover"
            mx={1}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
