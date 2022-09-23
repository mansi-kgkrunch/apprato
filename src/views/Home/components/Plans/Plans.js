import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Image } from "components/atoms";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px"
    }
  },
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
  expertbox: {
    filter: "drop-shadow(0px 20px 35px rgba(13,68,255,0.2))",
    borderRadius: theme.spacing(3),
    background: "#ffffff",
    padding: "5rem 6.25rem",
    margin: "9.375rem -30px",
    width: "auto",
    [theme.breakpoints.down("xl")]: {
      padding: "3rem 3.25rem",
      margin: "6.375rem -30px"
    },
    [theme.breakpoints.down("lg")]: {
      padding: "2.5rem 1.5rem",
      margin: "6.375rem -30px"
    },
    [theme.breakpoints.down("md")]: {
      padding: "2.5em 2em",
      margin: "6em 0px"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 1em 1em",
      margin: "3em 0px"
    }
  },
  experts: {
    margin: "40px 20px 0",
    "& li": {
      lineHeight: "42px",
      padding: 0,
      listStyle: "inside",
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
      margin: "20px 20px 0"
    }
  },
  images: {
    "& img": {
      [theme.breakpoints.up("sm")]: {
        height: "8rem"
      },
      [theme.breakpoints.up("md")]: {
        height: "9.5rem"
      },
      [theme.breakpoints.up("lg")]: {
        height: "12rem"
      }
    }
  }
}));

const Plans = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <Grid container justify="space-between">
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Typography variant="h4" style={{ marginBottom: "25px" }}>
            Plan, produce, deploy.
          </Typography>
          <Typography>
            As specialists in custom design and engineering of leading
            technology, our offering consnsists of complete end-to-end service
            that creates value, builds relationships and helps your bussiness
            thrive in our digital world.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Plans.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Plans;
