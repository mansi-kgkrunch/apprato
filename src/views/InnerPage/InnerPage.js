import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Header, Body, Experts, SubscribeBottom } from "./components";

import { sas1, sas2, sas3, sas4, sas5 } from "./data";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionPaddingTop: {
    backgroundColor: "#f2f3f8",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: 0,
    paddingRight: 0,
  },
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
    // backgroundColor: "#f2f3f8",
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

const InnerPage = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);

  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        if (window.innerWidth <= size) {
          setWidth(true);
        } else {
          setWidth(false);
        }
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [setWidth]);

    return width;
  };
  const wide = useWindowWide(1020);
  return (
    <div className={classes.root}>
      {/* <Section className={classes.headerPaddingTop}>
        <Header />
      </Section> */}
      <Section className={classes.headerPaddingTop}>
        <Body />
      </Section>
      <Section className={classes.sectionPaddingTop}>
        <Experts />
      </Section>
      <Section className={classes.subscribeBottomPaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  );
};

// InnerPage.propTypes = propTypes;
// InnerPage.defaultProps = defaultProps;
// #endregion

export default InnerPage;
