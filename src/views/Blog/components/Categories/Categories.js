import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"
import {SectionHeader} from "components/molecules"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"

const bull = (
  <Box
    component="span"
    sx={{display: "inline-block", mx: "2px", transform: "scale(0.8)"}}
  >
    •
  </Box>
)

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
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
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
    [theme.breakpoints.up("xs")]: {
      paddingRight: "0rem",
      paddingBottom: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "2rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
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
  },
  card: {
    backgroundColor: "#FFF",
    paddingLeft: "2rem",
    paddingRight: "2rem",
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
  },
}))

const Categories = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  const {categories} = useParams()

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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/upgrading.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Upgrading
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/shipping.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Shipping
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/payment.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Payment
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/customisation.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Customisation
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/design.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Design
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
            <Card sx={{minWidth: 275}} className={classes.card}>
              <CardContent>
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <img
                  src="../images/blog/categories/startups.png"
                  className={classes.icon}
                  alt=""
                />
                <Typography variant="h5" component="div">
                  Startups
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary"></Typography>
                <Typography variant="body2">
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
  )
}

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Categories
