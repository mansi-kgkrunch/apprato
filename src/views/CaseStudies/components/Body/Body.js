import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { Description } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

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
    "& .kg-what-we-area": {
      marginTop: "110px",
      paddingBottom: "400px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginTop: "80px",
        paddingBottom: "140px",
      },
    },
    "& .kg-main-area .kg-left-area h2": {
      marginTop: "0",
      fontSize: "34px",
      lineHeight: "40px",
      marginBottom: "36px",
    },
    "& .kg-main-area .kg-left-area p": {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "24px",
      margin: "0",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        lineHeight: "22px",
        marginBottom: "30px",
      },
    },
    "& .kg-what-we-area .kg-main-area": {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        flexWrap: "wrap",
      },
    },
    "& .kg-what-we-area .kg-left-area": {
      width: "35%",
      float: "left",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    "& .kg-what-we-area .kg-right-content": {
      width: "65%",
      float: "left",
    },
    "& .kg-what-we-area .kg-right-content ul li ": {
      fontSize: "18px",
      marginBottom: "12px",
      lineHeight: "24px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        marginBottom: "10px",
        lineHeight: "22px",
      },
    },
    "& .kg-what-we-area .kg-right-content ul": {
      margin: 0,
    },
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
      paddingBottom: "60%",
      content: '""',
      position: "relative",
      display: "block",
      width: "100%",
    },
    // [theme.breakpoints.down("md")]: {
    //   "&:after": {
    //     paddingBottom: "52%",
    //   },
    // },
    // [theme.breakpoints.down("xs")]: {
    //   "&:after": {
    //     paddingBottom: "52%",
    //   },
    // },
    // [theme.breakpoints.down("sm")]: {
    //   "&:after": {
    //     paddingBottom: "54%",
    //   },
    // },
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
  bannerGrid: {
    maxWidth: "1000px",
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
      margin: "auto",
    },
  },
}));

const Body = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const post = props.post;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          alignItems="center"
          xs={12}
          sm={9}
          md={9}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
          className={classes.imageBody}
        >
          <Grid
            item
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.bannerGrid}
          >
            <div className={classes.divImage}>
              {post?.bodyimage?.mediaItemUrl ? (
                <img
                  className={classes.banner}
                  src={post?.bodyimage?.mediaItemUrl}
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  className={classes.banner}
                  animation="wave"
                />
              )}
            </div>
          </Grid>
          <div class="kg-what-we-area">
            <div
              dangerouslySetInnerHTML={{
                __html: post?.bodycontent,
              }}
            />
          </div>
        </Grid>
      </Grid>
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
