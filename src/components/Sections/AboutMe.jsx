import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub } from "@mui/icons-material";

const AboutMe = () => {
  return (
    <Box
      component={motion.section}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{ xs: 23, sm: 20 }}
      id="about"
      sx={{
        scrollMarginTop: 100,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        About Me
      </Typography>
      <Typography gutterBottom fontSize={20} px={5} textAlign="center">
        I am a frontend developer with a Master's degree in Computer
        Engineering. In my free time I enjoy playing video games, drawing and
        reading. I am fluent in Polish and English.
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" m={2}>
        <IconButton
          size="large"
          color="primary"
          onClick={() => window.open("https://www.linkedin.com/in/oliwiarogala")}
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>
        <IconButton
          size="large"
          color="primary"
          onClick={() => window.open("https://github.com/glowcloud")}
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutMe;
