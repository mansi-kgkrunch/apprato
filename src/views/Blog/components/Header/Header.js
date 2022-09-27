import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    "& input": {
      paddingLeft: "40px",
      paddingBottom: "20px",
      borderBottom: "2px solid #0e44ff",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "34px",
      },
    },
    "& input::placeholder": {
      opacity: "1",
    },
    "& p": {
      fontWeight: "600",
      paddingRight: "60px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 0,
        paddingRight: 0,  
      },
    },
  },
  heading: {
    paddingRight: "0",
    "& h2": {
      textTransform: "capitalize",
      fontSize: "78px",
      marginBottom: "24px",
      [theme.breakpoints.down("md")]: {
        margin: "1.5em 0 0",
      },
      [theme.breakpoints.down("sm")]: {
        textTransform: "capitalize",
        fontSize: "38px",
        marginBottom: "24px",
        marginTop: "0",
      },
    },
    // "& h6": {
    //   margin: "1.5em 0",
    //   [theme.breakpoints.down("sm")]: {
    //     margin: "1em 0 0",
    //   },
    // },
    // [theme.breakpoints.up("md")]: {
    //   paddingRight: "3rem",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   paddingRight: "12rem",
    // },
    // [theme.breakpoints.up("xl")]: {
    //   paddingRight: "23rem",
    // },
  },
  searchIcon: {
    width: "50px",
    height: "50px",
    fill: "blue",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "4rem",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      margin: "0 auto",
    },
  },
  reversemob: {
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  searchBox: {
    width: "100%",
    position: "relative",
    marginTop: "110px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px !important",
    },
  },
  searchBoxContainer: {
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "70px",
    },
  },
  iconButton: {
    position: "absolute",
    top: "-10px",
    left: "10px",
    padding: "0",
    [theme.breakpoints.down("md")]: {
      top: "-5px",
      left: "7px",
    },
  },
}));

const Header = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={"fade-up"}
          className={classes.heading}
        >
          <SectionHeader
            title={"apprato Insights"}
            subtitle="The Apprato insights is the hub for developers, business owners, managers and entrepreneurs featuring key technology, news, resources and insights that help run smarter eCommerce businesses."
            align="left"
            disableGutter
            subtitleVariant="body1"
            titleVariant="h2"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={"fade-up"}
          className={classes.searchBoxContainer}
        >
          <Box component="form" noValidate className={classes.searchBox}>
            <IconButton
              type="submit"
              aria-label="search"
              className={classes.iconButton}
            >
              <SearchIcon style={{}} className={classes.searchIcon} />
            </IconButton>
            <TextField
              id="standard-required"
              className={classes.test}
              // label="Enter a city name"
              //variant="outlined"
              placeholder="          What are you looking for ?"
              size="large"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Header;
