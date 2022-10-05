import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, Tabs, Tab } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { isWhiteSpaceLike } from "typescript";
const useStyles = makeStyles(theme => ({
  root: {},
  services: {
    margin: "40px 20px 0",
    "& li": {
      lineHeight: "42px",
      padding: 0,
      listStyle: "none",
      display: "list-item",
      fontSize: "2rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.2rem",
        lineHeight: "32px"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
        lineHeight: "28px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "25px"
      }
    },
    [theme.breakpoints.down("lg")]: {
      margin: "20px 0px 0"
    }
  },
  serviceButton: {
    display: "block",
    marginTop: "15px",
    backgroundColor: "transparent",
    padding: "10px 36px",
    color: "#0290d8",
    padding: "10px 0px",
    textAlign: "left",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "transparent !important"
    }
  },
  serviceText: {
    maxWidth: "65% !imporatant",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "65%",
      margin: "auto"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "65%",
      margin: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "107px"
    }
  },
  tabStyleDefault: {
    color: "white",
    borderBottom: "none !important",
    display: "block",
    margin: 0,
    padding: 0
  },
  tabStyleActive: {
    color: "gray",
    borderBottom: "none !important",
    display: "block",
    margin: 0,
    padding: 0
  },
  tabLabel: {
    fontSize: "18px",
    textAlign: "left",
    alignItems: "unset"
  },
  serviceMobile: {
    backgroundColor: "#091d35",
    padding: "80px 20px"
  },
  accordian: {
    color: "white",
    backgroundColor: "unset"
    // "&::before": {
    //   backgroundColor: "#0290d8"
    // },
    // "&::after": {
    //   backgroundColor: "#0290d8"
    // },
    // "& .Mui-expanded:after": {
    //   backgroundColor: "#0290d8"
    // }
  },
  accordionDetail: {
    flexDirection: "column"
  }
}));

const ServicesMobile = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      name="serviceMobile"
      id="serviceMobile"
      className={classes.serviceMobile}
    >
      <Typography variant="h1" style={{ color: "#fff", paddingBottom: "30px" }}>
        Our Services.
      </Typography>
      <Grid container justify="space-between">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.accordian}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Strategy</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button className={classes.serviceButton}>Learn More...</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.accordian}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Creative</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button className={classes.serviceButton}>Learn More...</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.accordian}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>eCommerce</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button className={classes.serviceButton}>Learn More...</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.accordian}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Applications</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button className={classes.serviceButton}>Learn More...</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className={classes.accordian}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Audits</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Button className={classes.serviceButton}>Learn More...</Button>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

ServicesMobile.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default ServicesMobile;
