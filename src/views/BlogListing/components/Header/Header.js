import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Avatar} from "@material-ui/core"
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
  sizeAvatar: {
    height: 75,
    width: 75,
    marginRight: "20px",
    marginTop: "0rem",
  },
  author: {
    marginRight: "20px",
  },
  authorGrid: {},
  banner: {
    marginTop: "4rem",
    height: "100%",
    width: "100%",
  },
}))

const Header = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  const post = props.post

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between">
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={9}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
        >
          <SectionHeader
            title={post.title}
            subtitle="The Apprato Blog is the hub for business owners, managers, entrepreneurs and developers featuring key technology news, resources and insights."
            align="left"
            disableGutter
            titleVariant="h2"
          />
          {post.author.node.firstName == "Jordan" ? (
            <Avatar
              alt={post.author.node.firstName}
              src="/images/blog/author-jordan_pearce.png"
              className={classes.sizeAvatar}
            />
          ) : (
            <Avatar
              alt={post.author.node.firstName}
              src="/images/consultants/Stephen.png"
              className={classes.sizeAvatar}
            />
          )}
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xl={9}
            data-aos={"fade-up"}
            className={classes.authorGrid}
          >
            <p className={classes.author}>
              <strong>
                by{" "}
                {post.author.node.firstName + " " + post.author.node.lastName}{" "}
              </strong>
            </p>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
          ></Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={4}
          lg={4}
          xl={4}
          data-aos={"fade-up"}
        ></Grid>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Header
