import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Breadcrumbs, Link, Typography } from "@material-ui/core";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    "& .MuiGrid-root.section-header__subtitle-wrapper.MuiGrid-item.MuiGrid-grid-xs-12": {
      marginBottom: "24px",
    },
    "&  .kg-hero-content-area .kg-inner-hero-content h1": {
      fontSize: "48px",
      lineHeight: "56px",
      marginTop: "0",
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "38px",
        marginTop: "0",
        marginBottom: "24px",
        lineHeight: "46px",
      },
    },
    "& .kg-hero-content-area .kg-inner-hero-content p.kg-full-content": {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "0",
      marginTop: "24px",
      display: "inline-block",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginTop: "22px",
      },
    },
    "& .kg-hero-content-area": {
      maxWidth: "1000px",
      marginTop: "40px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0",
      },
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
  sizeAvatar: {
    height: 75,
    width: 75,
    marginRight: "20px",
    marginTop: "0rem",
  },
  author: {
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  authorGrid: {
    color: "#0e44ff",
    fontWeight: 700,
    justifyContent: "flex-end",
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: "50%",
    //   flexBasis: "50%",
    //   justifyContent: "flex-end !important",
    //   marginTop: "52px",
    // },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      flexBasis: "50%",
      justifyContent: "flex-end !important",
      // marginTop: "52px",
    },
  },
  banner: {
    marginTop: "4rem",
    height: "100%",
    width: "100%",
  },
  breadcrumbs: {
    color: "#8c949e",
  },
  title1: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
}));

const Header = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const post = props.post;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between">
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={9}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
        >
          <div class="kg-hero-content-area">
            <div class="kg-inner-hero-content">
              <h1>{post?.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.subtitle,
                }}
              ></div>
            </div>
          </div>
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
