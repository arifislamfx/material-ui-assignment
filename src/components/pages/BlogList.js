import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "none",
  },
});

const BlogList = (props) => {
  const { title, body, id } = props.post;
  const classes = useStyles();

  return (
    <>
      <Card
        style={{ margin: "10px" }}
        className={classes.root}
        variant="outlined"
      >
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className={classes.link} to={`/post/${id}`}>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogList;
