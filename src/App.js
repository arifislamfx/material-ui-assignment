import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/layout/Navbar";

import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root} disableGutters>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
