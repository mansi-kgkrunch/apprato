import React from "react"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  placementGrid: {
    display: "flex",
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  coverImage: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
  imageleft: {
    backgroundImage: `url(${"../images/Aquila_Image.jpg"})`,
    minHeight: "862px",
    backgroundSize: "cover",
    backgroundPosition: "-179px -116px",
    backgroundRepeat: "no-repeat",
    width: `calc(100vw + 48px)`,
  },
  myimg: {
    margin: "6.25em 0",
    [theme.breakpoints.down("md")]: {
      margin: "0em 0 2rem",
      maxWidth: "20%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      margin: "0em 0 4rem",
      maxWidth: "25%",
    },
  },
  mydesc: {
    marginRight: "10.125em",
    [theme.breakpoints.down("md")]: {
      float: "right",
      margin: "0 0 0 2.5em",
      display: "inline-block",
      width: "72%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginRight: "4.125em",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 1.5em 1.5em",
      display: "inline-block",
      width: "72%",
    },
    "& h4": {
      marginBottom: "40px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
    },
  },
  mytext: {
    margin: "1em 0 6.25rem",
    paddingRight: "74rem",
    display: "block",
    [theme.breakpoints.down("md")]: {
      paddingRight: "2rem",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingRight: "25rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1rem",
      margin: "1em 0 3.25rem",
    },
  },
}))

const Readysetcode = (props) => {
  const classes = useStyles()

  return (
    <div name="services" id="services">
      <Grid container justify="space-between">
        <Typography variant="h2">ready. set. code.</Typography>
        <Typography variant="h5" className={classes.mytext}>
          As specialists in custom design and engineering of leading technology,
          our offering consists of complete end-to-end service that creates
          value, builds relationships and helps your business thrive in our
          digital world.
        </Typography>
      </Grid>
      <Grid container justify="space-between" spacing={5}>
        <Grid item container alignItems="center" xs={12} md={4} lg={4}>
          <img src="../images/agile.png" className={classes.myimg} alt="" />
          <div className={classes.mydesc} spacing={10}>
            <Typography variant="h4">agile</Typography>
            <Typography variant="h6">
              We can handle your entire project from start to finish, or
              collaborate with your team on a continuous engagement.
            </Typography>
          </div>
        </Grid>
        <Grid item container alignItems="center" xs={12} md={4} lg={4}>
          <img src="../images/inspiring.png" className={classes.myimg} alt="" />
          <div className={classes.mydesc}>
            <Typography variant="h4">inspiring</Typography>
            <Typography variant="h6">
              We can help you transform an idea into a viable product by
              defining your business goals and building a roadmap to the best
              possible solution.
            </Typography>
          </div>
        </Grid>
        <Grid item container alignItems="center" xs={12} md={4} lg={4}>
          <img src="../images/skilled.png" className={classes.myimg} alt="" />
          <div className={classes.mydesc}>
            <Typography variant="h4">skilled</Typography>
            <Typography variant="h6">
              We can architect a robust and scalable backend solution, integrate
              and evolve an existing system, or build a custom solution from
              scratch.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

Readysetcode.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Readysetcode
