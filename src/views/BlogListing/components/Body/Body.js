import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Typography, TextField, Button, Link} from "@material-ui/core"
import {SectionHeader} from "components/molecules"

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginBottom: "1rem",
    color: "#666",
    background: "#FFF",
    backgroundColor: "#FFF",
    input: {
      color: "#FFF",
      background: "#FFF",
      borderBottomColor: "#FFF",
    },
    "&:hover": {
      background: "#FFF",
    },
    "&:visited": {
      background: "#FFF",
    },
    "&:active": {
      background: "#FFF",
    },
  },
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
  banner: {
    height: "100%",
    width: "100%",
  },
  subscription: {
    backgroundColor: "#000",
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
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "7rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
  },
  workTogether: {
    backgroundColor: "#1d2a3c",
    padding: "2rem",
  },
  body: {
    backgroundColor: "#FFF",
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  subscribeRight: {
    display: "none",
    padding: "2rem",
    backgroundColor: "#f8f9fe",
  },
  subscribeRightText: {
    color: "#FFF",
  },
  content: {
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  bannerGrid: {
    backgroundColor: "#FFF",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  contentGrid: {},
}))

const Body = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  const post = props.post

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          alignItems="center"
          xs={12}
          sm={9}
          md={9}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
          className={classes.body}
        >
          <Grid
            item
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.bannerGrid}
          >
            {post.featuredImage != null ? (
              <img
                className={classes.banner}
                src={
                  "https://backend.apprato.com.au/wp-content/uploads/" +
                  post.featuredImage.node.mediaDetails.file
                }
              />
            ) : null}
          </Grid>
          <div>
            <div className={classes.content}>
              <div dangerouslySetInnerHTML={{__html: post.content}} />
            </div>
          </div>
        </Grid>
        <Grid
          item
          justify="flex-start"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.right}
        >
          <Grid
            item
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.subscribeRight}
          >
            <Typography variant="h3" component="div" gutterBottom>
              subscribe to our newsletter
            </Typography>
            <Typography variant="p" component="div" gutterBottom>
              Get news and insights to optimise your business through
              application development and smarter eCommerce
              <br />
              <br />
            </Typography>
            <TextField
              fullWidth
              id="filled-search"
              label="Your First Name"
              type="search"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
            />
            <TextField
              fullWidth
              id="filled-search"
              label="Your Last Name"
              type="search"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
            />
            <TextField
              fullWidth
              id="filled-search"
              label="Your Email"
              type="search"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
            />
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.listItemButton}
            >
              Subscribe
            </Button>
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.workTogether}
          >
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              className={classes.subscribeRightText}
            >
              let's work together
            </Typography>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              className={classes.subscribeRightText}
            >
              Speak to a digital specialist now - not a salesman
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.listItemButton}
              href="mailto:contact@apprato.com.au"
            >
              Get in touch
            </Button>
          </Grid>
        </Grid>
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
