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
    <AppBar position="fixed" sx={{ backgroundColor: "#323d49", top: -1 }}>
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
            sx={{
              color: "text.primary",
              "&:hover": {
                color: "#7f53ac",
                backgroundImage:
                  "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#about"
            underline="hover"
            mx={1}
            sx={{
              color: "text.primary",
              "&:hover": {
                color: "#7f53ac",
                backgroundImage:
                  "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#skills"
            underline="hover"
            mx={1}
            sx={{
              color: "text.primary",
              "&:hover": {
                color: "#7f53ac",
                backgroundImage:
                  "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Skills
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#projects"
            underline="hover"
            mx={1}
            sx={{
              color: "text.primary",
              "&:hover": {
                color: "#7f53ac",
                backgroundImage:
                  "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="#contact"
            underline="hover"
            mx={1}
            sx={{
              color: "text.primary",
              "&:hover": {
                color: "#7f53ac",
                backgroundImage:
                  "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
