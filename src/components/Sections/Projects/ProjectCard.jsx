import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  siteText,
  toolsText,
  image,
  gitLink,
  webLink,
}) => {
  const isHover = useMediaQuery("(hover: hover)");

  return (
    <Grid
      item
      xs={12}
      lg={6}
      width="100%"
      component={motion.div}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={`${title} Snapshot Image`}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent
          sx={{
            pb: 1,
          }}
        >
          <Typography gutterBottom variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography gutterBottom sx={{ textAlign: "justify" }}>
            {siteText}
          </Typography>
          <Typography
            gutterBottom
            component="span"
            sx={{ textAlign: "justify" }}
          >
            {toolsText}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 0,
          }}
        >
          <IconButton
            component={motion.button}
            color="primary"
            size="large"
            onClick={() => window.open(gitLink)}
            initial={{ scale: 1 }}
            whileHover={isHover ? { scale: 1.15 } : {}}
            whileTap={{ scale: 0.9 }}
          >
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton
            component={motion.button}
            color="primary"
            size="large"
            onClick={() => window.open(webLink)}
            initial={{ scale: 1 }}
            whileHover={isHover ? { scale: 1.15 } : {}}
            whileTap={{ scale: 0.9 }}
          >
            <LinkIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
