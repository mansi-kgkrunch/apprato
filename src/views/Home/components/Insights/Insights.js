import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 2880 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 2880, min: 1024 },
    items: 3,
    slidesToSlide: 3,
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
    // [theme.breakpoints.down("md")]: {
    //   "&:after": {
    //     paddingBottom: "63.5%",
    //   },
    // },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        paddingBottom: "63.5%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        paddingBottom: "63.5%",
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
    color: "#202f43",
    fontWeight: 700,
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
    color: "#202f43",
    paddingBottom: "46px",
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
    // marginLeft: "24px",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      paddingTop: "30px",
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
      width: "70%",
    },
  },
  carouselDot: {
    display: "none",
    // borderColor: "#b3bac4",
    // background: "#b3bac4",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "end",
      position: "absolute",
      bottom: "40px",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "end",
      position: "absolute",
      bottom: "40px",
    },
  },
  expertbox: {
    background: "#f2f3f8",
    paddingLeft: "105px",
    paddingRight: "105px",
    paddingBottom: "80px",
    paddingTop: "80px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "60px",
      paddingBottom: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "60px",
      paddingBottom: "60px",
    },
  },
  button: {
    borderRadius: "0",
    padding: "10px 20px",
    color: "#1948e8",
    borderColor: "#1948e8",
    borderWidth: "2px",
    backgroundColor: "transparent",
    marginTop: "24px",
    [theme.breakpoints.down("xs")]: {
      padding: "6px 8px",
      marginTop: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 8px",
      marginTop: "32px",
    },
  },
  buttonContainer: {
    marginTop: 0,
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

const Insights = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const history = useHistory();

  const GET_POSTS = gql`
    {
      posts(where: { orderby: { field: DATE, order: DESC } }, first: 10) {
        nodes {
          title
          uri
          slug
          featuredImage {
            node {
              id
              mediaDetails {
                file
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS);
  const MAX_LENGTH = 150;
  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>An error occured!</p>;

  const rowMarkup = data.posts?.nodes.map((item, index) => (
    <Grid container justifyContent="space-between" key={index}>
      <Grid
        item
        container
        justifyContent="flex-start"
        alignItems="center"
        xs={12}
        md={6}
        lg={6}
        xl={6}
        className={classes.imageroot}
      >
        {item.featuredImage?.node?.mediaDetails.file ? (
          <>
            <img
              src={
                "https://backend.apprato.com.au/wp-content/uploads/" +
                item.featuredImage?.node?.mediaDetails.file
              }
              alt=""
              className={classes.images}
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </>
        ) : (
          <>
            <img
              src="/images/placeholder.png"
              className={classes.images}
              alt="Jordan Pearce"
            />
          </>
        )}
      </Grid>
      <Grid item container spacing={2} className={classes.titleContainer}>
        <Typography variant="body1" className={classes.subTitle}>
          {item?.title}
        </Typography>
      </Grid>
    </Grid>
  ));

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <div className={classes.expertbox}>
        <Grid container justify="space-between">
          <Typography className={classes.consultantTitle} variant="h4">
            Latest Insights.
          </Typography>
        </Grid>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
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
          {rowMarkup}
        </Carousel>
        <Grid container className={classes.buttonContainer} justify="center">
          <Button
            variant="outlined"
            className={classes.button}
            // href="/blog"
            style={{ backgroundColor: "transparent", width: "202px" }}
            onClick={()=>history.push('/blog')}
          >
            View Our Work
          </Button>
        </Grid>
      </div>
    </div>
  );
};

Insights.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Insights;
