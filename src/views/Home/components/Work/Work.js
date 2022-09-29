import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 2880 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 2880, min: 1024 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {},
  imageroot: {
    display: "block",
    maxWidth: "100%",
    flexBasis: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    verticalAlign: "middle",
    marginLeft: "auto !important",
    "&:after": {
      content: '""',
      paddingBottom: "68.5%",
      position: "relative",
      display: "block",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:after": {
        paddingBottom: "90.5%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        paddingBottom: "90.5%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        paddingBottom: "90.5%",
      },
    },
  },
  images: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    objectFit: "cover",
    objectPosition: "center",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "4px",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "4px",
    },
  },
  titleContainer: {
    margin: "0",
    paddingTop: "20px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      textTransform: "uppercase",
    },
    [theme.breakpoints.down("sm")]: {
      textTransform: "uppercase",
    },
  },
  consultantTitle: {
    paddingBottom: "20px",
    paddingLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "20px",
      paddingLeft: "0",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
      paddingLeft: "0",
    },
  },
  carouselItem: {
    padding: "0 15px",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  CarouselSlider: {
    paddingBottom: "0",
  },
  subTitle: {
    marginLeft: "24px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "14px",
    },
  },
  carouselDot: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      justifyContent: "end",
      position: "absolute",
      bottom: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "end",
      position: "absolute",
      bottom: "10px",
    },
  },
  expertbox: {
    background: "#4b69d6",
    paddingLeft: "105px",
    paddingRight: "105px",
    paddingTop: "80px",
    paddingBottom: "80px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      backgroundColor: "#1948e8",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      backgroundColor: "#1948e8",
    },
  },
  button: {
    borderRadius: "0",
    padding: "10px 20px",
    color: "#fff",
    borderColor: "#fff",
    borderWidth: "2px",
    backgroundColor: "transparent",
    marginTop: "34px",
    [theme.breakpoints.down("xs")]: {
      padding: "6px 8px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 8px",
    },
  },
  buttonContainer: {
    marginTop: "34px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "end",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
  },
  // image: {
  //   padding: 0,
  //   textAlign: "center",
  //   display: "unset",
  //   [theme.breakpoints.down("md")]: {
  //     padding: "3em 1em 1em",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     padding: "1.5em 0.5em 0.5em",
  //   },
  // },
  // )
}));

const Work = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <div className={classes.expertbox}>
        <Grid container justify="space-between">
          <Typography
            className={classes.consultantTitle}
            variant="h4"
            style={{ color: "#fff" }}
          >
            Our Work
          </Typography>
        </Grid>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          dotListClass={classes.carouselDot}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={[]}
          responsive={responsive}
          centerMode={false}
          ssr={false}
          containerClass={classes.CarouselSlider}
          itemClass={classes.carouselItem}
          partialVisible={false}
          renderButtonOutside={true}
        >
          <Grid container justify="space-between">
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
                src="/images/72Dpi/case_studies/Aquila_image.jpg"
                alt=""
                className={classes.images}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </Grid>
            <Grid item container spacing={2} className={classes.titleContainer}>
              <Typography variant="h6" style={{ color: "#fff" }}>
                AQUILA
              </Typography>
              <Typography
                variant="body1"
                className={classes.subTitle}
                style={{ color: "#fff" }}
              >
                Magento2
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
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
                src="/images/72Dpi/case_studies/Farm2_Market_graphic.jpg"
                alt=""
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className={classes.images}
              />
            </Grid>
            <Grid
              xs={12}
              item
              container
              className={classes.titleContainer}
              spacing={2}
            >
              <Typography variant="h6" style={{ color: "#fff" }}>
                Farm2Market
              </Typography>
              <Typography
                variant="body1"
                className={classes.subTitle}
                style={{ color: "#fff" }}
              >
                Magento2
              </Typography>
            </Grid>
          </Grid>
        </Carousel>
        <Grid container className={classes.buttonContainer} justify="center">
          <Button
            variant="outlined"
            type
            className={classes.button}
            style={{ backgroundColor: "transparent" }}
            href="#outlined-buttons"
          >
            View Our Work
          </Button>
        </Grid>
      </div>
    </div>
  );
};

Work.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Work;
