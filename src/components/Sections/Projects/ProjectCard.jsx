import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";

const ProjectCard = ({
  title,
  siteText,
  toolsText,
  image,
  gitLink,
  webLink,
}) => {
  return (
    <Grid item xs={12} lg={6} width="100%">
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
            // height: "100%",
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
            color="primary"
            size="large"
            onClick={() => window.open(gitLink)}
          >
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton
            color="primary"
            size="large"
            onClick={() => window.open(webLink)}
          >
            <LinkIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
