import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Grid } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { gql } from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
  {
    posts {
      nodes {
        title
        uri
        slug
        date
        content
      }
    }
    pages {
      nodes {
        id
      }
    }
  }
`;
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

// const classes = {
//   root: {
//     flexGrow: 1,
//     paddingLeft: "112px",
//     paddingRight: "112px",
//     textDecoration: "none",
//   },
//   paper: {
//     padding: 20,
//     textAlign: "center",
//     color: "blue",
//     fontFamily: "Roboto",
//   },
// };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "112px",
    paddingRight: "112px",
    "& a": {
      textDecoration: "none",
    },
    // [theme.breakpoints.down("md")]: {
    //   paddingLeft: "20px",
    //   paddingRight: "20px",
    // },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  items: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
  },
  card: {
    backgroundColor: "#f2f3f8",
  },
  cardContainer: {
    padding: "0 8px",
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
  categories: {
    margin: "5rem",
    backgroundColor: "#000000",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      margin: "5rem",
      backgroundColor: "#000000",
    },
  },
  title2: {
    color: "#0e44ff",
    textDecoration: "none",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  title1: {
    fontWeight: "600",
    marginBottom: "0",
  },
  link: {},
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
  typography: {
    marginBottom: "0",
    textAlign: "right",
  },
  breadcrumbsa: {
    color: "#202f43",
  },
  breadContainer: {
    marginBottom: "7px",
  },
  CardActions: {
    padding: "16px",
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
  a: {
    color: "#202f43",
  },
  title1Container: {
    maxWidth: "50%",
    flexBasis: "50%",
  },
  title2Container: {
    maxWidth: "50%",
    flexBasis: "50%",
  },
}));

const RelatedPosts = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>An error occured!</p>;

  //   let items = data.posts.nodes
  //              <CardMedia component="img" height="140" image="" alt="" />

  //   function removeHTML(str) {
  //     var tmp = document.createElement("DIV")
  //     tmp.innerHTML = str
  //     return tmp.textContent || tmp.innerText || ""
  //   }

  return (
    <div className={clsx(classes.root)} {...rest}>
      <Grid container xs={12} className={classes.titleContainer}>
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
            Related Posts
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
            className={classes.typography}
          >
            <Link href="/" className={classes.title2}>
              See all
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.cardContainer}
        >
          <Link to={`/blog}`} className={classes.link}>
            <Card
              sx={{ maxWidth: 345 }}
              variant="outlined"
              className={classes.items}
            >
              <div className={classes.imgContainer}>
                <CardMedia
                  className={classes.CardMedia}
                  component="img"
                  height="194"
                  image="/images/72 Dpi/case studies/Aquila image.jpg"
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
                  <Typography color="text.primary">UI</Typography>
                </Breadcrumbs>
                <Typography gutterBottom variant="h6" component="div">
                  How to hold an ipad correctly with both hands
                </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.CardActions}>
                <Breadcrumbs
                  separator="|"
                  aria-label="breadcrumb"
                  className={classes.breadcrumbs}
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
          item
          container
          justify="flex-start"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.cardContainer}
        >
          <Link to={`/blog}`} className={classes.link}>
            <Card
              sx={{ maxWidth: 345 }}
              variant="outlined"
              className={classes.items}
            >
              <div className={classes.imgContainer}>
                <CardMedia
                  className={classes.CardMedia}
                  component="img"
                  height="194"
                  image="/images/72 Dpi/case studies/Aquila image.jpg"
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
                  <Typography color="text.primary">UI</Typography>
                </Breadcrumbs>
                <Typography gutterBottom variant="h6" component="div">
                  How to hold an ipad correctly with both hands
                </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.CardActions}>
                <Breadcrumbs
                  separator="|"
                  aria-label="breadcrumb"
                  className={classes.breadcrumbs}
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
          item
          container
          justify="flex-start"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.cardContainer}
        >
          <Link to={`/blog}`} className={classes.link}>
            <Card
              sx={{ maxWidth: 345 }}
              variant="outlined"
              className={classes.card}
            >
              <div className={classes.imgContainer}>
                <CardMedia
                  className={classes.CardMedia}
                  component="img"
                  height="194"
                  image="/images/72 Dpi/case studies/Aquila image.jpg"
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
                  <Typography color="text.primary">UI</Typography>
                </Breadcrumbs>
                <Typography gutterBottom variant="h6" component="div">
                  How to hold an ipad correctly with both hands
                </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.CardActions}>
                <Breadcrumbs
                  separator="|"
                  aria-label="breadcrumb"
                  className={classes.breadcrumbs}
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
        {/* <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.cardContainer}
        >
          <Link to={`/blog}`} className={classes.link}>
            <Card
              sx={{ maxWidth: 345 }}
              variant="outlined"
              className={classes.card}
            >
              <div className={classes.imgContainer}>
                <CardMedia
                  className={classes.CardMedia}
                  component="img"
                  height="194"
                  image="/images/72 Dpi/case studies/Aquila image.jpg"
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
                  <Typography color="text.primary">UI</Typography>
                </Breadcrumbs>
                <Typography gutterBottom variant="h6" component="div">
                  How to hold an ipad correctly with both hands
                </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.CardActions}>
                <Breadcrumbs
                  separator="|"
                  aria-label="breadcrumb"
                  className={classes.breadcrumbs}
                >
                  <Link href="/">last week</Link>
                  <Link href="/blog">7 min read</Link>
                </Breadcrumbs>
              </CardActions>
            </Card>
          </Link>
        </Grid> */}
      </Grid>
    </div>
  );
};

RelatedPosts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default RelatedPosts;
//export default graphql(getPosts)(Items) // Bind the query to the compoent to have access to the variables in the return.
