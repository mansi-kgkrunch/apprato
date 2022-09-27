import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInput-underline:before": {
      border: 0,
    },
  },
  gridContainer: {
    padding: "10px",
    height: "100%",
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
    "& h5": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
      marginBottom: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      flexGrow: "0",
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "4rem",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      margin: "0 auto",
    },
  },
  reversemob: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  cardLink: {
    textDecoration: "none",
    "& :hover": {
      backgroundColor: "#1948e8",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  card: {
    boxShadow: "none",
    backgroundColor: "#FFF",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    // "& :hover": {
    //   backgroundColor: "#1948e8",
    //   color: "#fff",
    // },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  categories: {
    margin: "5rem",
    backgroundColor: "#000000",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      margin: "5rem",
      backgroundColor: "#000000",
    },
  },
  icon: {
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  subtitle: {
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

const Categories = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const { categories } = useParams();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between">
        <Grid
          item
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/upgrading`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/upgrading.png"
                  className={classes.icon}
                  alt="hii"
                />
                <Typography variant="h5">Upgrading</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/shipping`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/shipping.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5">Shipping</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/payment`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/payment.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5">Payment</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/customisation`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/customisation.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5">Customisation</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/design`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/design.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5">Design</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
          className={classes.gridContainer}
        >
          <Link to={`/blog/startups`} className={classes.cardLink}>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/startups.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5">Startups</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2" className={classes.subtitle}>
                  We can architect a robust and scaleable backend solution,
                  integrate and evolve an existing system.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={"fade-up"}
        ></Grid>
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Categories;
