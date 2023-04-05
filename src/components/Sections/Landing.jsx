import { Box, Typography } from "@mui/material";
import avatarImg from "../../assets/av-1.png";

const Landing = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h1"
        sx={{
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
        // component="img"
        // src={avatarImg}
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
          // "&::after": {
          //   content: '""',
          //   display: "inline-block",
          //   width: 240,
          //   height: 240,
          //   border: "5px solid red",
          //   borderImage: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%) 27 / 5px" ,
          //   borderRadius: "50%",
          //   opacity: 0.8,
          //   zIndex: 1,
          //   position: "absolute",
          // },
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
