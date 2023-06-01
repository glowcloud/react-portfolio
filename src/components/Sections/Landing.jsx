import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import avatarImg from "../../assets/av-1.png";

const Landing = () => {
  return (
    <Box
      component={motion.section}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      id="home"
      mt={{ xs: 5, sm: 3, xl: 5 }}
      mb={{ xs: 28, sm: 5, xl: 10 }}
      sx={{
        scrollMarginTop: 95,
      }}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h1"
        sx={{
          px: { xs: 3, md: 0 },
          fontWeight: "500",
          color: "#7f53ac",
          backgroundImage: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Hi, I'm Oliwia
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={1}
        sx={{
          "&::before": {
            content: '""',
            display: "inline-block",
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundImage: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
            opacity: 0.8,
            zIndex: -2,
            position: "absolute",
          },
        }}
      >
        <img
          src={avatarImg}
          alt="Avatar Image"
          style={{ maxHeight: "250px", objectFit: "contain" }}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Web Developer
      </Typography>
    </Box>
  );
};

export default Landing;
