import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { Description } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& input#filled-search": {
    //   color: "#0e44ff",
    //   padding: "0 30px",
    //   [theme.breakpoints.down("sm")]: {
    //     padding: 0,
    //   },
    // },
    "& .MuiInputBase-root.MuiInput-root.makeStyles-textfield-57.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl": {
      borderBottom: "2px solid #0e44ff",
    },
    "& .MuiInputBase-root.MuiInput-root.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl ": {
      borderBottom: "2px solid",
    },
    "& .MuiGrid-root.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-grid-md-6.aos-init.aos-animate": {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiGrid-root.jss51.MuiGrid-item.MuiGrid-align-items-xs-center": {
      display: "flex",
    },
    "& .MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom": {
      marginBottom: "40px",
    },
    "& .MuiGrid-root.MuiGrid-container.MuiGrid-justify-content-xs-center": {
      justifyContent: "flex-start",
      marginTop: "40px",
      [theme.breakpoints.down("xs")]: {
        paddingBottom: "40px",
      },
    },
    "& a.MuiButtonBase-root.MuiButton-root.MuiButton-outlined ": {
      border: "2px solid #0257ff",
      color: "#0257ff",
      padding: "10px 30px",
      borderRadius: 0,
    },
    "& .MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom": {
      maxWidth: "610px",
      fontWeight: 600,
    },
    "& .MuiTypography-root.MuiTypography-body2.MuiTypography-gutterBottom": {
      fontWeight: 600,
    },
    "& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-3": {
      [theme.breakpoints.down("lg")]: {
        width: "50%",
        maxWidth: "50%",
        flexBasis: "50%",
      },
      [theme.breakpoints.down("md")]: {
        width: "50%",
        maxWidth: "50%",
        flexBasis: "50%",
      },
    },
  },
  textfield: {
    marginBottom: "1rem",
    color: "#0e44ff",
    // background: "#FFF",
    // backgroundColor: "#FFF",
    input: {
      // color: "#0e44ff",
      // background: "##0e44ff",
      borderBottomColor: "#0e44ff",
    },
    // "&:hover": {
    //   background: "#FFF",
    // },
    // "&:visited": {
    //   background: "#FFF",
    // },
    // "&:active": {
    //   background: "#FFF",
    // },
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
  images: {
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
    maxWidth: "100%",
    // height: "auto",
    // [theme.breakpoints.up("lg")]: {
    //   paddingLeft: "4rem",
    // },
    // [theme.breakpoints.down("lg")]: {
    //   paddingLeft: "2rem",
    // },
    // [theme.breakpoints.down("md")]: {
    //   paddingLeft: "0",
    //   margin: "0 auto",
    // },
  },
  imageroot: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    margin: "auto",
    overflow: "hidden",
    "&:after": {
      paddingBottom: "84%",
      content: '""',
      position: "relative",
      display: "block",
      width: "100%",
    },
  },
  reversemob: {
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  subscription: {
    backgroundColor: "#000",
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
  workTogether: {
    backgroundColor: "#f2f3f8",
    padding: "2rem",
  },
  body: {
    marginTop: "60px",
    display: "flex",
    // margin: 0,
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  subscribeRight: {
    marginLeft: "20px",
    display: "inline-block",
    padding: "2rem",
    backgroundColor: "#f2f3f8",
  },
  subscribeRightText: {
    color: "#FFF",
  },
  content: {
    paddingTop: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
  divImage: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    verticalAlign: "middle",
    marginLeft: "auto !important",
    "&:after": {
      paddingBottom: "40%",
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
    [theme.breakpoints.down("xs")]: {
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
  banner: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    display: "inline-block",
  },
  contentGrid: {},
  listItemButton: {
    float: "right",
    marginBottom: "15px",
    borderRadius: "unset",
    color: "#0e44ff",
    borderColor: "#0e44ff",
  },
  description: {
    fontWeight: 600,
  },
  typography: {
    marginLeft: "20px",
    color: "#0e44ff",
  },
  imageBody: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  },
  gridContainer: {
    display: "flex",
    marginTop: "20px",
  },
}));

const Body = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  // const post = props.post;

  // const menuId = useSelector((state) => state.menuId.menuid);
  // console.log(menuId , 'menuId');

  const menuId = JSON.parse(localStorage.getItem("menuId"));
  console.log(menuId, "menuId");

  if (menuId) {
    var GET_PAGE = gql`
    {
      menuItem(idType: DATABASE_ID, id: ${menuId}) {
        id
        label
        connectedNode {
          node {
            ... on Page {
              content(format: RENDERED)
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  `;
  }

  const { loading, error, data } = useQuery(GET_PAGE);
  var pageContent = data?.menuItem.connectedNode;
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        {/* <Grid
          item
          alignItems="center"
          xs={12}
          data-aos={"fade-up"}
          className={classes.imageBody}
        > */}
        <Grid item alignItems="center" md={6} data-aos={"fade-up"}>
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: pageContent?.node.content }}
          ></div>
        </Grid>
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
          {pageContent?.node?.featuredImage ? (
            <img
              src={pageContent?.node?.featuredImage?.node.mediaItemUrl}
              alt=""
              className={classes.images}
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              className={classes.images}
              animation="wave"
            />
          )}
        </Grid>
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
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
