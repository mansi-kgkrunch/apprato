import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Grid, Link } from "@material-ui/core";
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
//import { Link } from "react-router-dom";
// import { empty } from "apollo-boost";

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
    "& a:hover": {
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
    "& h6": {
      // margin: "1.5em 0",
      fontSize: "32px",
      fontWeight: 700,
      paddingBottom: "50px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px !important",
        // WebkitLineClamp: "4",
        // WebkitBoxOrient: "vertical",
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // display: "-webkit-box",
      },
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: "26px !important",
      //   // display: "-webkit-box !important",
      //   // overflow: "hidden",
      //   // whiteSpace: "normal",
      //   // textOverflow: "ellipsis",
      //   // WebkitBoxOrient: "vertical",
      //   // WebkitLineClamp: "3",
      // },
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "28px",
      //   display: "-webkit-box !important",
      //   overflow: "hidden",
      //   whiteSpace: "normal",
      //   textOverflow: "ellipsis",
      //   WebkitBoxOrient: "vertical",
      //   WebkitLineClamp: "2",
      // },
      // [theme.breakpoints.down("lg")]: {
      //   fontSize: "28px",
      //   display: "-webkit-box !important",
      //   overflow: "hidden",
      //   whiteSpace: "normal",
      //   textOverflow: "ellipsis",
      //   WebkitBoxOrient: "vertical",
      //   WebkitLineClamp: "1",
      // },
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
    // [theme.breakpoints.down("md")]: {
    //   flexGrow: "0",
    //   maxWidth: "49%",
    //   flexBasis: "49%",
    // },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30px",
      // justifyContent: "center !important",
      flexGrow: "0",
      maxWidth: "100% !important",
      flexBasis: "100% !important",
    },
    [theme.breakpoints.down("sm")]: {
      flexGrow: "0",
      padding: 0,
      marginBottom: "15px",
      maxWidth: "49%",
      flexBasis: "49%",
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
    // "& h6": {
    //   fontWeight: 700,
    //   margin: "1.5em 0",
    //   [theme.breakpoints.down("sm")]: {
    //     margin: "1em 0 0",
    //   },
    // },
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
      flexDirection: "row",
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
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
  },
  title1: {
    fontWeight: "600",

    marginBottom: "0",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2rem",
      padding: "0 8px",
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  link: {
    width: "100%",
    "& :hover": {
      background: "#f2f3f8",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    // [theme.breakpoints.down("s")]: {
    //   width: "100%",
    // },
  },
  titleContainer: {
    alignItems: "center",
    // padding: "0 8px",
    marginBottom: "35px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      padding: "0",
      marginBottom: "24px",
      padding: "0 8px",
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

const RelatedCaseStudies = (props) => {
  //   const GET_POSTS = gql`
  //   {
  //     posts(where: {categoryName: "${props.post.categories.edges[0].node.name}"}, first: 3) {
  //       nodes {
  //         title
  //         uri
  //         slug
  //         date
  //         content
  //         date
  //         featuredImage {
  //           node {
  //             id
  //             mediaDetails {
  //               file
  //             }
  //           }
  //         }
  //       }
  //     }
  //     pages {
  //       nodes {
  //         id
  //       }
  //     }
  //   }
  // `;

  // console.log(props.post.categories.edges[0].node.name ,"dfg");

  // const { className, ...rest } = props;
  const classes = useStyles();
  // const { loading, error, data } = useQuery(GET_POSTS);
  // const MAX_LENGTH = 200;
  // if (loading) return <p>Loading Posts...</p>;
  // if (error) return <p>An error occured!</p>;

  //   let items = data.posts.nodes
  //              <CardMedia component="img" height="140" image="" alt="" />

  //   function removeHTML(str) {
  //     var tmp = document.createElement("DIV")
  //     tmp.innerHTML = str
  //     return tmp.textContent || tmp.innerText || ""
  //   }
  // const rowMarkup = data.posts.nodes.map((item, index) => (
  //   <Grid
  //     id={item.title}
  //     key={item.title}
  //     position={index}
  //     item
  //     container
  //     justify="flex-start"
  //     xs={12}
  //     md={4}
  //     lg={4}
  //     xl={4}
  //     data-aos={"fade-up"}
  //     className={classes.cardContainer}
  //   >
  //     <Link to={item.slug} className={classes.link}>
  //       <Card
  //         sx={{ maxWidth: 345 }}
  //         variant="outlined"
  //         className={classes.items}
  //       >
  //         <div className={classes.imgContainer}>
  //           <CardMedia
  //             className={classes.CardMedia}
  //             component="img"
  //             height="194"
  //             image={
  //               "https://backend.apprato.com.au/wp-content/uploads/" +
  //               item.featuredImage.node.mediaDetails.file
  //             }
  //             alt="Paella dish"
  //           />
  //         </div>
  //         <CardContent>
  //           <Breadcrumbs
  //             separator="|"
  //             aria-label="breadcrumb"
  //             className={classes.breadContainer}
  //           >
  //             <Link href="/" className={classes.breadcrumbsa}>
  //               Development
  //             </Link>
  //             <Link href="/blog" className={classes.breadcrumbsa}>
  //               Technology
  //             </Link>
  //             <Typography color="text.primary">UI</Typography>
  //           </Breadcrumbs>
  //           <Typography gutterBottom variant="h6">
  //             {item.title}
  //           </Typography>
  //           {/* {item.content.replace(/<[^>]+>/g, '').length > MAX_LENGTH ?(`${item.content.replace(/<[^>]+>/g, '').substring(0, MAX_LENGTH)}...`):''} */}
  //         </CardContent>
  //         <CardActions disableSpacing className={classes.CardActions}>
  //           <Breadcrumbs
  //             separator="|"
  //             aria-label="breadcrumb"
  //             className={classes.breadcrumbs}
  //           >
  //             <Link href="/" className={classes.a}>
  //               last week
  //             </Link>
  //             <Link href="/blog" className={classes.a}>
  //               7 min read
  //             </Link>
  //           </Breadcrumbs>
  //         </CardActions>
  //       </Card>
  //     </Link>
  //   </Grid>
  // ));
  return (
    <div className={clsx(classes.root)}>
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
            className={classes.title1}
            gutterBottom
          >
            Related Case Studies
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
                  image="/images/casestudies/ACER_Graphic.jpg"
                  alt="Paella dish"
                />
              </div>

              <CardContent>
                <Typography gutterBottom variant="h6">
                  ACER
                </Typography>
              </CardContent>
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
                  image="/images/casestudies/Aquila_Image.jpg"
                  alt="Paella dish"
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Aquila
                </Typography>
              </CardContent>
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
                  image="/images/casestudies/Farm2_Market_graphic.jpg"
                  alt="Paella dish"
                />
              </div>

              <CardContent>
                <Typography gutterBottom variant="h6">
                  Farm2market
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

RelatedCaseStudies.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default RelatedCaseStudies;
//export default graphql(getPosts)(Items) // Bind the query to the compoent to have access to the variables in the return.
