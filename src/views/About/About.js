import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { LearnMoreLink } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";
import {
  Header,
  Body,
  SubscribeBottom,
  RelatedCaseStudies,
} from "./components";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  headerPaddingTop: {
    paddingTop: "122.23px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "100px",
    paddingTop: "122px",
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: 0,
    },
    // [theme.breakpoints.down("xs")]: {
    //   paddingBottom: "100px",
    // },
  },
  bodyPaddingTop: {
    marginTop: 0,
    padding: 0,
  },
  RelatedCaseStudiesPaddingTop: {
    paddingTop: "14px",
    paddingLeft: 0,
    paddingRight: 0,
  },
  subscribeBottomPaddingTop: {
    background: "transparent",
    paddingTop: "0",
    paddingBottom: "0",
    paddingLeft: "90px",
    paddingRight: "90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const menuId = JSON.parse(localStorage.getItem("menuId"));
  console.log(menuId, "menuId");

  if (menuId) {
    var GET_PAGE = gql`
      {
        menuItem(id: ${menuId}, idType: DATABASE_ID) {
          id
          label
          connectedNode {
            node {
              ... on Page {
                id
                aboutUs {
                  ourTeam {
                    image {
                      mediaItemUrl
                    }
                    name
                    position
                    certificate {
                      name
                    }
                    description
                  }
                }
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
  var pageContent = data?.menuItem.connectedNode?.node;

  return (
    <div className={classes.root}>
      <Section className={classes.headerPaddingTop}>
        <Header post={pageContent} />
      </Section>
      <Section className={classes.bodyPaddingTop}>
        <Body post={pageContent} />
      </Section>
      <Section className={classes.subscribeBottomPaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  );
};

export default About;
