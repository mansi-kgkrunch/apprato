import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
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
    items: 3,
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
  root: {
    "& a": {
      textDecoration: "none",
      "& .react-multi-carousel-dot button": {
        borderColor: "#ebf0ff",
        background: "#ebf0ff",
      },
    },
    "& h5": {
      fontSize: "44px",
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        marginBottom: "20px",
      },
    },
    "& p": {
      color: "#000",
      [theme.breakpoints.down("sm")]: {
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        fontSize: "18px",
        color: "#000",
      },
    },
    // [theme.breakpoints.down("sm")]: {
    //   paddingBottom: "40px",
    // },
  },
  // imageroot: {
  //   display: "block",
  //   maxWidth: "100%",
  //   flexBasis: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   marginLeft: "auto !important",
  //   "&:after": {
  //     content: '""',
  //     paddingBottom: "68.5%",
  //     position: "relative",
  //     display: "block",
  //     width: "100%",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     "&:after": {
  //       paddingBottom: "90.5%",
  //     },
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     "&:after": {
  //       paddingBottom: "90.5%",
  //     },
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     "&:after": {
  //       paddingBottom: "90.5%",
  //     },
  //   },
  // },
  // images: {
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   top: "0",
  //   right: "0",
  //   left: "0",
  //   bottom: "0",
  //   objectFit: "cover",
  //   objectPosition: "center",
  //   display: "inline-block",
  //   [theme.breakpoints.down("xs")]: {
  //     borderRadius: "4px",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     borderRadius: "4px",
  //   },
  // },

  heading: {
    "& h5": {
      fontSize: "44px",
      lineHeight: "normal",
    },
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
  imgContainer: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    verticalAlign: "middle",
    marginLeft: "auto !important",
    "&:after": {
      paddingBottom: "50%",
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
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        paddingBottom: "70%",
      },
    },
  },
  CardMedia: {
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
  },
  items: {
    backgroundColor: "#FFFFFF",
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
    justifyContent: "center",
    "& .react-multi-carousel-dot button": {
      background: "#ebf0ff",
      borderColor: "#ebf0ff",
    },
    "& .react-multi-carousel-dot.react-multi-carousel-dot--active button": {
      background: "#3377ff",
      borderColor: "#3377ff",
    },
    // [theme.breakpoints.up("lg")]: {
    //   display: "none",
    // },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: "10px",
    },
  },
  expertbox: {
    paddingLeft: "120px",
    paddingRight: "120px",
    paddingTop: "80px",
    paddingBottom: "80px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "40px",
      paddingTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "40px",
      paddingTop: "40px",
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
  cardContainer: {
    width: "100%",
    maxWidth: "100%",
    // padding: "0 8px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
      marginBottom: "30px",
      justifyContent: "center !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
      justifyContent: "center !important",
    },
  },
  card: {
    backgroundColor: "#f2f3f8",
  },
  breadcrumbsa: {
    color: "#202f43",
  },
  breadContainer: {
    marginBottom: "7px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  CardActions: {
    padding: "16px",
  },
  a: {
    color: "#a8acb1",
  },
  title1Container: {
    maxWidth: "50%",
    flexBasis: "50%",
    padding: "0 10px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  title2Container: {
    maxWidth: "50%",
    flexBasis: "50%",
    padding: "0 10px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  title1: {
    marginBottom: "0",
    fontSize: "50px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      fontWeight: "600",
    },
  },
  link: {
    "& :hover": {
      background: "#f2f3f8",
    },
  },
  titleContainer: {
    alignItems: "center",
    padding: "0 8px",
    marginBottom: "35px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      padding: "0",
      marginBottom: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      padding: "0",
      marginBottom: "24px",
    },
  },
  title2: {
    color: "#0e44ff",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      color: "#202f43",
    },
  },
  consultantTitle: {
    marginBottom: "0",
    textAlign: "right",
  },
  breadcrumbsBottom: {
    "& .MuiBreadcrumbs-separator": {
      color: "#a8acb1",
    },
  },
  breadcrumbTypography: {
    fontWeight: "600",
    color: "#202f43",
  },
}));

const MostRecent = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  //   const GET_CATEGORY_POSTS = gql`
  //     {
  //       posts(where: { categoryName: "Uncategorized" }) {
  //         nodes {
  //           slug
  //           title
  //           uri
  //           status
  //           author {
  //             node {
  //               id
  //               email
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `;

  //   const { loading, error, data } = useQuery(GET_CATEGORY_POSTS);
  //   console.log(data.posts);
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <div className={classes.expertbox}>
        <Grid
          container
          justify="space-between"
          xs={12}
          className={classes.titleContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={classes.title1Container}
          >
            <Typography
              variant="h6"
              component="div"
              className={classes.title1}
              gutterBottom
            >
              Most recent
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={classes.title2Container}
          >
            <Typography
              variant="body2"
              component="div"
              gutterBottom
              className={classes.consultantTitle}
            >
              <Link href="/" className={classes.title2}>
                See all
              </Link>
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Grid container spacing={3}> */}
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          dotListClass={classes.carouselDot}
          // additionalTransfrom={-20 * 5}
          // animationType='fadeout'
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
          slidesToSlide={1}
          // disableButtonsControls={false}
          mouseTracking={false}
          rewind={false}
        >
          <Grid
            container
            justify="flex-start"
            xs={12}
            md={4}
            sm={4}
            data-aos={"fade-up"}
            className={classes.cardContainer}
          >
            <Link to={`/blog}`} className={classes.link}>
              <Card
                sx={{ maxWidth: 275 }}
                variant="outlined"
                className={classes.items}
              >
                <div className={classes.imgContainer}>
                  <CardMedia
                    className={classes.CardMedia}
                    component="img"
                    height="194"
                    image="/images/blog/header/upgrading_from_magento1.png"
                    alt="Paella dish"
                  />
                </div>
                <CardContent>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadContainer}
                  >
                    <Link href="/" className={classes.breadcrumbsa}>
                      Development
                    </Link>
                    <Link href="/blog" className={classes.breadcrumbsa}>
                      Technology
                    </Link>
                    <Typography className={classes.breadcrumbTypography}>
                      UI
                    </Typography>
                  </Breadcrumbs>
                  <Typography gutterBottom variant="h5">
                    How to hold an ipad correctly with both hands
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadcrumbsBottom}
                  >
                    <Link href="/" className={classes.a}>
                      last week
                    </Link>
                    <Link href="/blog" className={classes.a}>
                      7 min read
                    </Link>
                  </Breadcrumbs>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid
            container
            justify="flex-start"
            xs={12}
            md={4}
            sm={4}
            data-aos={"fade-up"}
            className={classes.cardContainer}
          >
            <Link to={`/blog}`} className={classes.link}>
              <Card
                sx={{ maxWidth: "100%" }}
                variant="outlined"
                className={classes.items}
              >
                <div className={classes.imgContainer}>
                  <CardMedia
                    className={classes.CardMedia}
                    component="img"
                    height="194"
                    image="/images/blog/header/custom_shipping_provider_integrations.png"
                    alt="Paella dish"
                  />
                </div>
                <CardContent>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadContainer}
                  >
                    <Link href="/" className={classes.breadcrumbsa}>
                      Development
                    </Link>
                    <Link href="/blog" className={classes.breadcrumbsa}>
                      Technology
                    </Link>
                    <Typography className={classes.breadcrumbTypography}>
                      UI
                    </Typography>
                  </Breadcrumbs>
                  <Typography gutterBottom variant="h5">
                    How to hold an ipad correctly with both hands
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadcrumbsBottom}
                  >
                    <Link href="/" className={classes.a}>
                      last week
                    </Link>
                    <Link href="/blog" className={classes.a}>
                      7 min read
                    </Link>
                  </Breadcrumbs>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid
            container
            justify="flex-start"
            xs={12}
            md={4}
            sm={4}
            data-aos={"fade-up"}
            className={classes.cardContainer}
          >
            <Link to={`/blog}`} className={classes.link}>
              <Card
                sx={{ maxWidth: "100%" }}
                variant="outlined"
                className={classes.items}
              >
                <div className={classes.imgContainer}>
                  <CardMedia
                    className={classes.CardMedia}
                    component="img"
                    height="194"
                    image="/images/blog/header/end_of_life-desktop.png"
                    alt="Paella dish"
                  />
                </div>
                <CardContent>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadContainer}
                  >
                    <Link href="/" className={classes.breadcrumbsa}>
                      Development
                    </Link>
                    <Link href="/blog" className={classes.breadcrumbsa}>
                      Technology
                    </Link>
                    <Typography className={classes.breadcrumbTypography}>
                      UI
                    </Typography>
                  </Breadcrumbs>
                  <Typography gutterBottom variant="h5">
                    How to hold an ipad correctly with both hands
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadcrumbsBottom}
                  >
                    <Link href="/" className={classes.a}>
                      last week
                    </Link>
                    <Link href="/blog" className={classes.a}>
                      7 min read
                    </Link>
                  </Breadcrumbs>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid
            container
            justify="flex-start"
            xs={12}
            md={4}
            sm={4}
            data-aos={"fade-up"}
            className={classes.cardContainer}
          >
            <Link to={`/blog}`} className={classes.link}>
              <Card
                sx={{ maxWidth: 275 }}
                variant="outlined"
                className={classes.items}
              >
                <div className={classes.imgContainer}>
                  <CardMedia
                    className={classes.CardMedia}
                    component="img"
                    height="194"
                    image="/images/blog/header/integrating_direct_freight_shipping_details.png"
                    alt="Paella dish"
                  />
                </div>
                <CardContent>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadContainer}
                  >
                    <Link href="/" className={classes.breadcrumbsa}>
                      Development
                    </Link>
                    <Link href="/blog" className={classes.breadcrumbsa}>
                      Technology
                    </Link>
                    <Typography className={classes.breadcrumbTypography}>
                      UI
                    </Typography>
                  </Breadcrumbs>
                  <Typography gutterBottom variant="h5">
                    How to hold an ipad correctly with both hands
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                  <Breadcrumbs
                    separator="|"
                    aria-label="breadcrumb"
                    className={classes.breadcrumbsBottom}
                  >
                    <Link href="/" className={classes.a}>
                      last week
                    </Link>
                    <Link href="/blog" className={classes.a}>
                      7 min read
                    </Link>
                  </Breadcrumbs>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        </Carousel>
        {/* </Grid>
        </Grid> */}
      </div>
    </div>
  );
};

MostRecent.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MostRecent;
