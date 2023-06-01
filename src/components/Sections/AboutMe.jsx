import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Box
      component={motion.section}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{xs: 23, sm: 20}}
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
        I'm a software developer with a Master's degree in Computer Engineering.
        In my free time I enjoy playing video games, drawing and reading. I am
        fluent in Polish and English.
      </Typography>
    </Box>
  );
};

export default AboutMe;
