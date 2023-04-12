import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="background.paper"
      minHeight="100px"
      width="100%"
      px={{ xl: "25rem", md: "10rem", sm: "1rem", xs: 2 }}
    >
      <Box display="flex" flexDirection="column" mx={2}>
        <Typography>OLIWIA ROGALA</Typography>
        <Typography>©2023 ROGALA | All Rights Reserved.</Typography>
      </Box>
      <Box mx={2}>
        <Typography component="span">Avatar made in </Typography>
        <Typography
          component={Link}
          href="https://chrome.google.com/webstore/detail/avatar-maker/ofknlbikfofijlcjkfcihomkedmchfbn"
          sx={{
            color: "#7f53ac",
            backgroundImage: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Avatar Maker
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
