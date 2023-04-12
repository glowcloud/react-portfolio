import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsSidebarOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "200px",
        },
      }}
    >
      <Box w={250} onClick={() => setIsSidebarOpen(false)}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#home">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#about">
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#skills">
              <ListItemText primary="Skills" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
