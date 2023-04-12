import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
      id="about"
      sx={{
        scrollMarginTop: 90,
      }}
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
        In my free time I enjoy playing video games, drawing and reading. I speak fluent
        Polish and English.
      </Typography>
    </Box>
  );
};

export default AboutMe;
