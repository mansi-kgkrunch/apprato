import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { Description } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& input#filled-search": {
    //   color: "#0e44ff",
    //   padding: "0 30px",
    //   [theme.breakpoints.down("sm")]: {
    //     padding: 0,
    //   },
    // },
    "& .MuiInputBase-root.MuiInput-root.makeStyles-textfield-57.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl": {
      borderBottom: "2px solid #0e44ff",
    },
    "& .MuiInputBase-root.MuiInput-root.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl ": {
      borderBottom: "2px solid",
    },
  },
  textfield: {
    marginBottom: "1rem",
    color: "#0e44ff",
    // background: "#FFF",
    // backgroundColor: "#FFF",
    input: {
      // color: "#0e44ff",
      // background: "##0e44ff",
      borderBottomColor: "#0e44ff",
    },
    // "&:hover": {
    //   background: "#FFF",
    // },
    // "&:visited": {
    //   background: "#FFF",
    // },
    // "&:active": {
    //   background: "#FFF",
    // },
  },
  heading: {
    "& h2": {
      [theme.breakpoints.down("md")]: {
        margin: "1.5em 0 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    "& h6": {
      margin: "1.5em 0",
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "12rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "23rem",
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  subscription: {
    backgroundColor: "#000",
    "& h2": {
      [theme.breakpoints.down("md")]: {
        margin: "1.5em 0 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    "& h6": {
      margin: "1.5em 0",
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    [theme.breakpoints.up("xs")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "7rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
  },
  workTogether: {
    backgroundColor: "#f2f3f8",
    padding: "2rem",
  },
  body: {
    marginTop: "60px",
    display: "flex",
    // margin: 0,
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  subscribeRight: {
    marginLeft: "20px",
    display: "inline-block",
    padding: "2rem",
    backgroundColor: "#f2f3f8",
  },
  subscribeRightText: {
    color: "#FFF",
  },
  content: {
    paddingTop: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
  divImage: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    verticalAlign: "middle",
    marginLeft: "auto !important",
    "&:after": {
      paddingBottom: "40%",
      content: '""',
      position: "relative",
      display: "block",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:after": {
        paddingBottom: "70%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        paddingBottom: "70%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        paddingBottom: "70%",
      },
    },
  },
  banner: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    display: "inline-block",
  },
  contentGrid: {},
  listItemButton: {
    float: "right",
    marginBottom: "15px",
    borderRadius: "unset",
    color: "#0e44ff",
    borderColor: "#0e44ff",
  },
  description: {
    fontWeight: 600,
  },
  typography: {
    marginLeft: "20px",
    color: "#0e44ff",
  },
  imageBody: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  },
  gridContainer: {
    display: "flex",
    marginTop: "20px",
  },
}));

const Body = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  // const post = props.post;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        {/* <Grid
          item
          alignItems="center"
          xs={12}
          data-aos={"fade-up"}
          className={classes.imageBody}
        > */}
        <Grid item alignItems="center" md={6} data-aos={"fade-up"}>
          <Typography
            variant="h4"
            component="div"
            className={classes.title1}
            gutterBottom
          >
            Our Audit methodology
          </Typography>
          <Typography
            variant="body1"
            component="div"
            className={classes.title1}
            gutterBottom
          >
            Our audit's identity and document opportunities to enhance and
            improve your online business, and our innovative team will be ready
            to implement our suggested solutions, that will help you to achieve
            your business objectives and succeed.
          </Typography>
          <Grid item alignItems="center" className={classes.gridContainer}>
            <Grid item md={3}>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Audit Scope Options
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Marketing 
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Design and user
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Solution architecture
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Magento configuration
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Shopify configuration
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Extensions and plugins
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Customizations
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Integrations
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className={classes.title1}
                gutterBottom
              >
                _Performance
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="/images/hero_inner_section1.png"
            alt=""
            className={classes.images}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

Body.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Body;
