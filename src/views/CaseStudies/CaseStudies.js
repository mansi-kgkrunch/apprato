import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  headerPaddingTop: {
    backgroundColor: "#f9f9f9",
    // backgroundImage: "url(`${}`)",
    paddingTop: "122.23px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "300px",
    paddingTop: "122px",
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "200px",
    },
  },
  bodyPaddingTop: {
    marginTop: "-150px",
    paddingLeft: "120px",
    paddingRight: "120px",
    paddingTop: 0,
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "20px",
      marginTop: "-110px",
    },
  },
  RelatedCaseStudiesPaddingTop: {
    paddingTop: "14px",
    paddingLeft: 0,
    paddingRight: 0,
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
}));

const CaseStudies = () => {
  const classes = useStyles();
  const menuId = JSON.parse(localStorage.getItem("menuId"));
  //if (menuId) {
  var GET_PAGE = gql`
    {
      menuItem(id: ${menuId}, idType: DATABASE_ID) {
        id
        label
        connectedNode {
          node {
            ... on Page {
              id
              caseStudies {
                headercontent
                backgroundimage {
                  mediaItemUrl
                }
                bodyimage {
                  mediaItemUrl
                }
                bodycontent
              }
            }
          }
        }
      }
    }
  `;
  //}

  const { loading, error, data } = useQuery(GET_PAGE);
  if (loading) return <p>Loading Page...</p>;
  var pageContent = data?.menuItem.connectedNode?.node.caseStudies;

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <Section
        className={classes.headerPaddingTop}
        style={{
          backgroundImage: `url(${pageContent?.backgroundimage?.mediaItemUrl})`,
        }}
      >
        <Header post={pageContent} />
      </Section>
      <Section className={classes.bodyPaddingTop}>
        <Body post={pageContent} />
      </Section>
      <Section className={classes.RelatedCaseStudiesPaddingTop}>
        <RelatedCaseStudies />
      </Section>
      <Section className={classes.subscribeBottomPaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  );
};

export default CaseStudies;
