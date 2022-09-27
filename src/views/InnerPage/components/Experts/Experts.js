import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Image } from "components/atoms";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    padding: 0,
    textAlign: "center",
    display: "unset",
    padding: "0px 15px ",
    width: "16.66%",
    [theme.breakpoints.down("md")]: {
      padding: "3em 1em 1em"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 0.5em 0.5em",
      width: "33.33%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%"
    }
  },
  expertbox: {
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px"
    }
  },
  experts: {
    margin: "40px 20px 0",
    "& li": {
      lineHeight: "42px",
      padding: 0,
      listStyle: "inside",
      display: "list-item",
      fontSize: "2rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.2rem",
        lineHeight: "32px"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
        lineHeight: "28px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "25px"
      }
    },
    [theme.breakpoints.down("lg")]: {
      margin: "20px 20px 0"
    }
  },
  images: {
    "& img": {
      [theme.breakpoints.up("sm")]: {
        height: "8rem"
      },
      [theme.breakpoints.up("md")]: {
        height: "9.5rem"
      },
      [theme.breakpoints.up("lg")]: {
        height: "12rem"
      }
    }
  },
  expertTitle: {
    display: "block",
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: "15px",
      fontWeight: "600"
    },
    [theme.breakpoints.up("sm")]: {
      height: "8rem"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "20px"
    }
  },
  kgImageMass: {
    display: "block !important",
    height: "auto !important",
    width: "100% !important",
    objectFit: "cover",
    position: "relative",
    verticalAlign: "middle",
    marginLeft: "auto !important",
    "&::after": {
      paddingBottom: "68.5%",
      content: '""',
      position: "relative",
      display: "block",
      width: "100%"
    }
  },
  singleImage: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    objectFit: "contain",
    objectPosition: "center",
    width: "100%",
    height: "100% !important",
    display: "inline-block"
  }
}));

const Experts = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <Grid container justify="space-between" className={classes.expertbox}>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
          style={{ padding: "0px" }}
        >
          <Typography variant="h4" style={{ paddingBottom: "50px" }}>
            Certified experts.
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifycontent="center"
          justify="flex-start"
          xs={12}
          md={12}
          data-aos={"fade-up"}
          className={classes.images}
        >
          <List style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/expert.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>

              <Typography variant="p" className={classes.expertTitle}>
                Adobe Certified Expert developer.
              </Typography>
            </ListItem>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/magento.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>

              <Typography variant="p" className={classes.expertTitle}>
                Mahgento 2 Certified Cloud developer.
              </Typography>
            </ListItem>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/aws_certificate.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>
              <Typography variant="p" className={classes.expertTitle}>
                AWS Certified Cloud Practitioner.
              </Typography>
            </ListItem>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/stripe.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>
              <Typography variant="p" className={classes.expertTitle}>
                Stripe Professional Implementation.
              </Typography>
            </ListItem>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/shopify.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>
              <Typography variant="p" className={classes.expertTitle}>
                AWS Certified Cloud Practitioner.
              </Typography>
            </ListItem>
            <ListItem className={classes.image}>
              <span className={classes.kgImageMass}>
                <Image
                  src="/images/prince2.png"
                  alt=""
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={classes.singleImage}
                />
              </span>
              <Typography variant="p" className={classes.expertTitle}>
                Prince2 Foundation Certified Cloud Practitioner.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

Experts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Experts;
