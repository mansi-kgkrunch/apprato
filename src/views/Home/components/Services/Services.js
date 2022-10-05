import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, Tabs, Tab } from "@material-ui/core";
import { Image } from "components/atoms";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import { Button } from "react-scroll";
import { Link } from "react-scroll";
const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    padding: 0,
    textAlign: "center",
    display: "unset",
    [theme.breakpoints.down("md")]: {
      padding: "3em 1em 1em"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 0.5em 0.5em"
    }
  },
  serviceBackgroundImage: {
    backgroundImage: 'url("/images/hero_section.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  servicebox: {
    // filter: "drop-shadow(0px 20px 35px rgba(13,68,255,0.2))",
    // borderRadius: theme.spacing(3),
    // background: "#ffffff",
    // padding: "5rem 6.25rem",
    // margin: "9.375rem -30px",
    // width: "auto",
    // [theme.breakpoints.down("xl")]: {
    //   padding: "3rem 3.25rem",
    //   margin: "6.375rem -30px"
    // },
    // [theme.breakpoints.down("lg")]: {
    //   padding: "2.5rem 1.5rem",
    //   margin: "6.375rem -30px"
    // },
    // [theme.breakpoints.down("md")]: {
    //   padding: "2.5em 2em",
    //   margin: "6em 0px"
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "1.5em 1em 1em",
    //   margin: "3em 0px"
    // }
  },
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
    border: "2px solid #0290d8",
    borderRadius: "unset"
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
    color: "white",
    borderBottom: "none !important",
    display: "block",
    margin: 0,
    padding: 0,
    opacity: "0.8 !important"
  },
  tabLabel: {
    fontSize: "18px",
    textAlign: "left",
    alignItems: "unset",
    width: "100%"
  }
}));

const Services = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div
      className={clsx(classes.root, className, "kg_service_section")}
      {...rest}
      name="service"
      id="service"
    >
      <Grid container justify="space-between" className={classes.servicebox}>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
          className={classes.serviceBackgroundImage + " kg_image"}
          style={{ color: "white", padding: "120px" }}
        >
          <Typography
            variant="h5"
            style={{
              width: "100%"
            }}
          >
            Our Services.
          </Typography>

          {/* <List className={classes.services}>
            <ListItem style={{ paddingBottom: "20px", color: "#f2f3f8" }}>
              _Strategy
            </ListItem>
            <ListItem style={{ paddingBottom: "20px" }}>Creative</ListItem>
            <ListItem style={{ paddingBottom: "20px" }}>eCommerce</ListItem>
            <ListItem style={{ paddingBottom: "20px" }}>Applications</ListItem>
            <ListItem style={{ paddingBottom: "20px" }}>Audits</ListItem>
          </List> */}

          <Tabs
            value={tab}
            onChange={handleTabChange}
            className={classes.kgDesktopHome}
          >
            <Tab
              label={<span className={classes.tabLabel}>_Strategy</span>}
              className={
                tab === 0 ? classes.tabStyleActive : classes.tabStyleDefault
              }
            />
            <Tab
              label={<span className={classes.tabLabel}>Creative</span>}
              className={
                tab === 1 ? classes.tabStyleActive : classes.tabStyleDefault
              }
            />
            <Tab
              label={<span className={classes.tabLabel}>eCommerce</span>}
              className={
                tab === 2 ? classes.tabStyleActive : classes.tabStyleDefault
              }
            />
            <Tab
              label={<span className={classes.tabLabel}>Applications</span>}
              className={
                tab === 3 ? classes.tabStyleActive : classes.tabStyleDefault
              }
            />
            <Tab
              label={<span className={classes.tabLabel}>Audits</span>}
              className={
                tab === 4 ? classes.tabStyleActive : classes.tabStyleDefault
              }
            />
          </Tabs>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifycontent="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={"fade-up"}
          style={{ backgroundColor: "#f6f6f6" }}
          className="kg_tab_content"
        >
          {tab === 0 && (
            <Grid className={classes.serviceText}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Button className={classes.serviceButton}>Learn More</Button>
            </Grid>
          )}
          {tab === 1 && (
            <Grid className={classes.serviceText}>
              <Typography>
                dfsdfsdfdsf Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Typography>
              <Button className={classes.serviceButton}>Learn More</Button>
            </Grid>
          )}
          {tab === 2 && (
            <Grid className={classes.serviceText}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Button className={classes.serviceButton}>Learn More</Button>
            </Grid>
          )}
          {tab === 3 && (
            <Grid className={classes.serviceText}>
              <Typography>Tab 3 content</Typography>
              <Button className={classes.serviceButton}>Learn More</Button>
            </Grid>
          )}
          {tab === 4 && (
            <Grid className={classes.serviceText}>
              <Typography>Tab 4 content</Typography>
              <Button className={classes.serviceButton}>Learn More</Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Services;
