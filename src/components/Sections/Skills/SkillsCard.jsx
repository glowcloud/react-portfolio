import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const SkillsCard = ({ title, skills }) => {
  const isHover = useMediaQuery("(hover: hover)");

  return (
    <Grid
      item
      xs={12}
      lg={4}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <Card
        component={motion.div}
        initial={{ scale: 1, backgroundColor: "#323d49" }}
        whileHover={
          isHover
            ? {
                scale: 1.05,
                backgroundColor: "#647dee",
              }
            : {}
        }
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
          <List>
            {skills.map((item) => (
              <ListItem key={item}>
                <Typography>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillsCard;
