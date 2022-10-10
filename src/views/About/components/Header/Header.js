import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  banner: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    display: "inline-block",
    margin: "0",
  },
  imageContainer: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    maxWidth: "670px",
    margin: 'auto',
    "&:after": {
      paddingBottom: "88%",
      content: '""',
      position: "relative",
      display: "block",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  heading: {
    display: "inline-block",
    marginTop: "100px",
    maxWidth: "750px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
    "& h4": {
      marginBottom: "40px",
      fontSize: "60px",
      lineHeight: "68px",
      marginTop: 0,
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
    },
    "& p": {
      fontSize: "22px",
      fontWeight: "400",
      marginBottom: "32px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  girdContainer: {
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  kg_images: {},
}));

const Header = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const post = props.post;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.girdContainer}>
        {/* {post?.content ? ( */}
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
          <div
            dangerouslySetInnerHTML={{
              __html: post?.content,
            }}
          />
        </Grid>
        {/* ) : (
          <Skeleton
            variant="rectangular"
            className={classes.heading}
            animation="wave"
          />
        )} */}
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={"fade-up"}
          className={classes.imageContainer}
        >
          <div className={classes.kg_images}>
            {post?.featuredImage.node.mediaItemUrl ? (
              <img
                className={classes.banner}
                src={post?.featuredImage.node.mediaItemUrl}
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
