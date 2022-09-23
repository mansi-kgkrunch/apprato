import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

import {
  Grid,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import { Link as LinkHref } from "react-router-dom";

import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 0, "0px"),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 0, "0px")
    }
  },
  toolbar: {
    position: "absolute",
    top: "0",
    zIndex: "1",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      //padding: theme.spacing(0, 12, 20)
      padding: "0px 120px"
    },
    [theme.breakpoints.down("sm")]: {
      // padding: theme.spacing(0, 0, 12)
      padding: "0px 20px",
      paddingTop: "15px"
    }
  },
  listItem: {
    cursor: "pointer",
    padding: "0 1.875rem",
    [theme.breakpoints.down("lg")]: {
      padding: "0 1.2rem"
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem"
    }
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none !important",
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem"
    },
    color: "#0e44ff"
  },
  listItemTextHome: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none !important",
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem"
    },
    color: "#fff"
  },
  listItemButtonHome: {
    whiteSpace: "nowrap",
    minWidth: "15.375rem",
    backgroundColor: "transparent",
    border: "2px",
    borderColor: "white",
    fontSize: "2rem",
    boxShadow: "unset",
    border: "2px solid white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem"
    },
    textTransform: "initial"
  },
  listItemButton: {
    whiteSpace: "nowrap",
    minWidth: "15.375rem",
    backgroundColor: "transparent",
    border: "2px",
    borderColor: "#0e44ff",
    fontSize: "2rem",
    boxShadow: "unset",
    border: "2px solid white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem"
    },
    textTransform: "initial",
    color: "#0e44ff"
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent"
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "end"
    }
  },
  logoContainer: {
    width: "32.375rem",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "18.75rem"
    }
  }
}));

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const page = window.location.pathname;
  const HomePage = page.length;

  return (
    <Toolbar
      disableGutters
      className={classes.toolbar + " kg_header"}
      {...rest}
    >
      <Grid container justify="space-between">
        <Grid item container xs={8} md={4} lg={3} xl={3} data-aos={"fade-up"}>
          <div className={classes.logoContainer}>
            <a href="/" title="thefront">
              {HomePage === 1 ? (
                <Image
                  className={classes.logoImage}
                  src="/images/Apprato_Logo_white.png"
                  alt="thefront"
                  lazy={false}
                />
              ) : (
                <Image
                  className={classes.logoImage}
                  src="/images/Apprato_Logo_blue.svg"
                  alt="thefront"
                  lazy={false}
                />
              )}
            </a>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          xs={2}
          md={6}
          lg={6}
          xl={6}
          data-aos={"fade-up"}
        >
          <Hidden smDown>
            <List className={classes.navigationContainer}>
              <ListItem className={classes.listItem}>
                <LinkHref to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    Home
                  </Typography>
                </LinkHref>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LinkHref to="/#services" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    Services
                  </Typography>
                </LinkHref>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LinkHref to="/#platefoms" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    Platforms
                  </Typography>
                </LinkHref>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LinkHref
                  to="/#case-studies"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    Case Studies
                  </Typography>
                </LinkHref>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LinkHref to="/#about" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    About
                  </Typography>
                </LinkHref>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LinkHref to="/blog" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={
                      HomePage === 1
                        ? classes.listItemTextHome
                        : classes.listItemText
                    }
                  >
                    Insights
                  </Typography>
                </LinkHref>
              </ListItem>
            </List>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          alignItems="center"
          xs={2}
          md={2}
          lg={3}
          xl={3}
        >
          <Hidden smDown>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={
                HomePage === 1
                  ? classes.listItemButtonHome
                  : classes.listItemButton
              }
            >
              <Link to="contact" smooth={true} duration={2500}>
                Get in touch
              </Link>
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.iconButton}
              onClick={onSidebarOpen}
              aria-label="Menu"
            >
              {HomePage === 1 ? (
                <img src="../images/mobilenav.png" alt="" />
              ) : (
                <img src="../images/Hamburger_Menu.png" alt="" />
              )}
            </IconButton>
          </Hidden>
        </Grid>
      </Grid>
      <div className={classes.flexGrow} />
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

export default Topbar;
