import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import {
  Hero,
  Experts,
  Readysetcode,
  Consultants,
  Carouselview,
  Partners,
  Plans,
  Services,
  ServicesMobile,
  MessageForm,
  Work,
  Insights,
} from "./components";

import { sas1, sas2, sas3, sas4, sas5 } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sectionPaddingTop: {
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: 0,
    paddingRight: 0,
  },
  pagePaddingTop: {
    //paddingTop: theme.spacing(3),
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: "40px",
    paddingRight: 0,
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      //paddingTop: theme.spacing(5)
      padding: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: "40px",
      //paddingLeft: theme.spacing(16)
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionNoPaddingBottom: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  sectionMarginBottom: {
    marginBottom: "20px",
    paddingTop: "80px",
  },
  shape: {},
}));

const Home = () => {
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
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionPaddingTop}>
        <Plans />
      </Section>
      {wide ? (
        <Section className={classes.sectionPaddingTop}>
          <ServicesMobile />
        </Section>
      ) : (
        <Section className={classes.sectionPaddingTop}>
          <Services />
        </Section>
      )}
      <Section className={classes.sectionPaddingTop}>
        <Experts />
      </Section>
      <Section className={classes.sectionNoPaddingBottom}>
        <Work />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Insights />
      </Section>
      <Section className={classes.sectionMarginBottom}>
        <MessageForm />
      </Section>
    </div>
  );
};

export default Home;
