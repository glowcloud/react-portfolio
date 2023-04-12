import { Box, Typography, Link, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="background.paper"
      minHeight="100px"
      width="100%"
      px={{ xl: "25rem", md: "10rem", sm: "1rem", xs: 2 }}
    >
      <Typography variant="h6" sx={{ mx: 1, textAlign: "center" }}>
        © 2023
      </Typography>
      <Typography variant="h6" sx={{ mx: 1, textAlign: "center" }}>
        Oliwia Rogala
      </Typography>
      <IconButton
        color="primary"
        size="large"
        onClick={() => window.open("https://github.com/glowcloud")}
      >
        <GitHub fontSize="inherit" />
      </IconButton>
      <Typography
        variant="h6"
        component={Link}
        underline="none"
        href="https://chrome.google.com/webstore/detail/avatar-maker/ofknlbikfofijlcjkfcihomkedmchfbn"
        sx={{
          mx: 1,
          color: "#7f53ac",
          backgroundImage: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Avatar Maker
      </Typography>
    </Box>
  );
};

export default Footer;
