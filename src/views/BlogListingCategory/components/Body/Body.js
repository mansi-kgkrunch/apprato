import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"
import {SectionHeader} from "components/molecules"

const useStyles = makeStyles((theme) => ({
  heading: {
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
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "12rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "23rem",
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
}))

const Body = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  console.log("body props")
  console.log(props.post)
  const post = props.post

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={9}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
          className={classes.heading}
        >
          <div>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
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

Body.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Body
