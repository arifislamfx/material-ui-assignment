import { Box, Button, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box height="38.5vh" width="100%" color="cyan" py={20} textAlign="center">
        <Typography variant="h2">Explore Awesome Post</Typography>
        <Link className={classes.link} to="/blog">
          <Button variant="contained" color="secondary">
            Click Here
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
