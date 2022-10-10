import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { LearnMoreLink, Image } from "components/atoms";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
    "& h4": {
      color: "#ffff",
    },
    "& h6": {
      margin: "1.5em 0",
      color: "#ffff",
      fontSize: "20px",
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
    // position: "absolute",
    top: 0,
    flexDirection: "column",
    height: "100%",
    alignItems: "self-start",
    justifyContent: "center",
    padding: "0 120px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      paddingTop: "150px",
      background: 'url("/images/hero_section.png")',
      backgroundSize: "cover",
      paddingTop: "260px",
      paddingBottom: "155px",
      position: "unset",
      padding: "0 20px",
    },
  },
  listItemButton: {
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
      minWidth: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem",
    },
    textTransform: "initial",
  },
  kgMobileImage: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className, "kg_home_hero")} {...rest}>
      <Grid container justify="space-between" className={classes.kgMobileImage}>
        {/* <Image src="/images/hero_section.png"></Image> */}
        <video
          autoplay="autoplay"
          muted="muted"
          controls="controls"
          width="100%"
        >
          <source src="images/hero_video.mov" type="video/ogg" />{" "}
        </video>
      </Grid>
      {/* <Grid container justify="space-between" className={classes.reversemob + " kg_hero_desc"}>
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
            title={<div>eCommerce and Digital Transformation Specialists.</div>}
            subtitle="We leverage the power of partnerships, experience design and bespoke software development to drive digital transformation, eCommerce and product engineering initiatives."
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.listItemButton}
              >
                <Link to="contact" smooth={true} duration={2500}>
                  Get in touch
                </Link>
              </Button>
            ]}
            align="left"
            disableGutter
            titleVariant="h4"
            subtitleVariant="subtitle2"
          />
        </Grid>
      </Grid> */}
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
