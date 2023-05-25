import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";

const SkillsCard = ({ title, skills }) => {
  return (
    <Grid item xs={12} lg={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          "&:hover": {
            backgroundColor: "#647dee",
            WebkitTransition: "background-color 0.3s linear",
          },
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
