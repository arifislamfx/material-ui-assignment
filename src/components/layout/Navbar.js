import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },

  // responsive design
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [mobileMenuEl, setMobileMenuEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuEl);

  const openMobileMenu = (e) => {
    setMobileMenuEl(e.currentTarget);
  };
  const closeMobileMenu = (e) => {
    setMobileMenuEl(null);
  };

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuEl}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={closeMobileMenu} component={Link} to="/">
        Home
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={Link} to="/blog">
        Blog
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={Link} to="/contact">
        Contact
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            color="inherit"
            to="/"
            className={classes.link}
            style={{ flexGrow: 1 }}
          >
            Blog Site
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/blog">
              Blog
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </div>
          <IconButton
            className={classes.sectionMobile}
            color="inherit"
            onClick={openMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </>
  );
};

export default Navbar;
