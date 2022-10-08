import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    paddingTop: "100px",
    backgroundColor: "#f2f3f8",
    paddingLeft: "104px",
    paddingRight: "104px",
    paddingBottom: "300px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      paddingTop: "80px",
      backgroundColor: "#f2f3f8",
      paddingLeft: "4px",
      paddingRight: "4px",
      paddingBottom: "180px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "40px",
      paddingBottom: "120px",
    },
  },
  consultant: {
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    bottom: "0",
    height: "100%",
    margin: "0",
    display: "inline-block",
    position: "absolute",
    objectFit: "cover",
    objectPosition: "center",
    background: "#fff",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  imageroot: {
    height: "100%",
    display: "block",
    position: "relative",
    maxWidth: "100%",
    objectFit: "cover",
    "&:after": {
      width: "100%",
      content: '""',
      display: "block",
      position: "relative",
      paddingBottom: "115%",
    },
  },
  consultantCard: {
    width: "50%",
    float: "left",
    marginBottom: "90px",
    padding: "0 16px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom: "30px",
    },
  },
  subline: {
    fontSize: "26px",
    lineHeight: "32px",
    marginBottom: "50px",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "26px",
      marginBottom: "16px",
    },
  },
  subtitle: {
    "& p": {
      marginTop: "0",
      marginBottom: "8px",
      fontSize: "22px",
      lineHeight: "28px",
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        marginTop: "0",
        marginBottom: "5px",
        fontSize: "18px",
        lineHeight: "24px",
      },
    },
  },

  consultantimage: {
    padding: "0 16px",
    display: "inline-block",
    paddingLeft: "40px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      padding: 0,
      paddingLeft: 0,
    },
    "& h6": {
      fontSize: "20px",
      lineHeight: "28px",
      marginTop: "38px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: "6",
      WebkitBoxOrient: "vertical",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        lineHeight: "20px",
        marginTop: "18px",
        WebkitLineClamp: "3",
      },
      [theme.breakpoints.down("md")]: {
        WebkitLineClamp: "3",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        WebkitLineClamp: "6",
      },
    },
    "& h5": {
      fontSize: "36px",
      lineHeight: "42px",
      marginBottom: "12px",
      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
        lineHeight: "32px",
        marginBottom: "4px",
      },
    },
  },
  consultantTitle: {
    "& h2": {
      fontSize: "58px",
      lineHeight: "66px",
      marginBottom: "70px",
      padding: "0 16px",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "50px",
        padding: " 0 20px",
      },
    },
  },
  description: {
    "& p": {
      margin: 0,
    },
  },
}));

const Body = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const post = props.post;
  const rowMarkup = post?.aboutUs.ourTeam.map((item, index) => (
    <Grid container justify="space-between" className={classes.consultantCard}>
      <Grid
        item
        container
        justify="flex-start"
        alignItems="center"
        xs={12}
        md={4}
        lg={6}
        xl={6}
        className={classes.imageroot}
      >
        {item?.image?.mediaItemUrl ? (
          <>
            <img
              src={item?.image?.mediaItemUrl}
              className={classes.consultant}
              alt="Jordan Pearce"
            />
          </>
        ) : (
          <>
            <img
              src="/images/placeholder.png"
              className={classes.consultant}
              alt="Jordan Pearce"
            />
          </>
        )}
      </Grid>
      <Grid
        item
        container
        className={classes.consultantimage}
        justify="flex-start"
        xs={12}
        md={8}
        lg={6}
        xl={6}
      >
        <Typography variant="h5" display="block">
          {item.name}
        </Typography>
        <Typography variant="body1" className={classes.subline}>
          {item.position}
        </Typography>
        <Typography variant="body2" className={classes.subtitle}>
          {item.certificate.map((certificates, _index) => (
            <p>{certificates.name}</p>
          ))}
        </Typography>
        <Typography variant="h6" className={classes.description}>
          <div
            dangerouslySetInnerHTML={{
              __html: item?.description,
            }}
          />
        </Typography>
      </Grid>
    </Grid>
  ));
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        className={classes.consultantTitle}
      >
        <Typography variant="h2">Our team.</Typography>
      </Grid>
      {rowMarkup}
      {/* <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="/images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="../images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="../images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="../images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="../images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.consultantCard}
      >
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          lg={6}
          xl={6}
          className={classes.imageroot}
        >
          <img
            src="../images/consultants/Jordan.png"
            className={classes.consultant}
            alt="Jordan Pearce"
          />
        </Grid>
        <Grid
          item
          container
          className={classes.consultantimage}
          justify="flex-start"
          xs={12}
          md={8}
          lg={6}
          xl={6}
        >
          <Typography variant="h5" display="block">
            Jordan Pearce
          </Typography>
          <Typography variant="body1" className={classes.subline}>
            Senior Software Developer
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            <p>Adobe Certifed Developer</p>
            <p>AWS Certified</p>
            <p> System Integration</p>
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex onsequat.
          </Typography>
        </Grid>
      </Grid> */}
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
