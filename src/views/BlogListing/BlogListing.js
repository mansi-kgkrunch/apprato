import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Header, Body, RelatedPosts, SubscribeBottom } from "./components";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";

import { sas1, sas2, sas3, sas4, sas5 } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  // pagePaddingTop: {
  //   paddingTop: theme.spacing(3),
  //   [theme.breakpoints.up("md")]: {
  //     paddingTop: theme.spacing(5),
  //   },
  // },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  pagePaddingTop: {
    paddingTop: 0,
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    // paddingBottom: "40px",
    // paddingLeft: theme.spacing(0),
  },
  headerPaddingTop: {
    backgroundColor: "#f9f9f9",
    paddingTop: "122.23px",
    paddingBottom: "300px",
    paddingTop: "122px",
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: 0,
    },
  },
  bodyPaddingTop: {
    marginTop: "-250px",
    paddingLeft: "120px",
    paddingRight: "120px",
    paddingTop: 0,
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "20px",
    },
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: "50%",
    //   flexBasis: "50%",
    //   justifyContent: "flex-end !important"
    // },
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "50%",
    //   flexBasis: "50%",
    //   justifyContent: "flex-end !important"
    // },
  },
  subscribeBottomPaddingTop: {
    backgroundColor: "#f9f9f9",
    paddingLeft: "90px",
    paddingRight: "90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  RelatedPostsPaddingTop: {
    paddingTop: "14px",
    paddingLeft: 0,
    paddingRight: 0,
  },
  shape: {},
}));

const BlogListing = () => {
  const classes = useStyles();
  const location = useLocation();
  var path = location.pathname.slice(1);
  // var path = location.pathname.split("/")[3];
  const GET_POST = gql`{
    post(
      id: "${path}"
      idType: SLUG
    ) {
      title
      featuredImage {
        node {
          id
          link
          mediaDetails {
            file
          }
        }
      }
      author {
        node {
          firstName
          lastName
          name
        }
      }
      uri
      slug
      date
      content
      categories(first: 1) {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  }`;

  const { loading, error, data } = useQuery(GET_POST);

  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>An error occured!</p>;

  return (
    <div className={classes.root}>
      <Section className={classes.headerPaddingTop}>
        <Header post={data.post} />
      </Section>
      <Section className={classes.bodyPaddingTop}>
        <Body post={data.post} />
      </Section>
      <Section className={classes.RelatedPostsPaddingTop}>
        <RelatedPosts post={data.post} />
      </Section>
      <Section className={classes.subscribeBottomPaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  );
};

export default BlogListing;
