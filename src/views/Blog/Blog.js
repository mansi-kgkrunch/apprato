import React from "react";
import { makeStyles ,createMuiTheme } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import {
  Header,
  Categories,
  Items,
  SubscribeBottom,
  Featured,
  MostRecent,
} from "./components";

import { sas1, sas2, sas3, sas4, sas5 } from "./data";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  rootSection: {
    paddingTop: "122px",
    paddingLeft: "120px",
    paddingRight: "120px",
    paddingBottom: "80px",
    backgroundColor: "hsl(230deg 30% 96%)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "20px",
    },
    // [theme.breakpoints.up("md")]: {
    //   backgroundColor: "blue",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   backgroundColor: "green",
    // },
    // [theme.breakpoints.down("lg")]: {
    //   paddingTop: "122px",
    //   paddingLeft: "120px",
    //   paddingRight: "120px",
    // },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(5),
    },
  },
  pageHeaderPaddingTop: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  pageCategoriesPaddingTop: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {},
  subscribeBottomPaddingTop: {
    backgroundColor: "#f9f9f9",
    paddingLeft: "90px",
    paddingRight: "90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  pageFeaturedPaddingTop: {
    padding: 0,
  },
  pageMostRecentPaddingTop: {
    padding: 0,
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.rootSection}>
        <Section className={classes.pageHeaderPaddingTop}>
          <Header />
        </Section>
        <Section className={classes.pageCategoriesPaddingTop}>
          <Categories />
        </Section>
      </Grid>

      <Section className={classes.pageFeaturedPaddingTop}>
        <Featured />
      </Section>
      <Section className={classes.pageMostRecentPaddingTop}>
        <MostRecent />
      </Section>
      <Section className={classes.subscribeBottomPaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  );
};

export default Blog;
