import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core"
import {Image} from "components/atoms"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    padding: 0,
    textAlign: "center",
    display: "unset",
    [theme.breakpoints.down("md")]: {
      padding: "3em 1em 1em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 0.5em 0.5em",
    },
  },
  expertbox: {
    filter: "drop-shadow(0px 20px 35px rgba(13,68,255,0.2))",
    // borderRa dius: theme.spacing(3),
    background: "#4b69d6",
    padding: "5rem 6.25rem",
    margin: "9.375rem -30px",
    width: '100%',
    [theme.breakpoints.down("xl")]: {
      // padding: "3rem 3.25rem",
      // margin: "6.375rem -30px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "2.5rem 1.5rem",
      margin: "6.375rem -30px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2.5em 2em",
      margin: "6em 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 1em 1em",
      margin: "3em 0px",
    },
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
        lineHeight: "32px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
        lineHeight: "28px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        lineHeight: "25px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      margin: "20px 20px 0",
    },
  },
  images: {
    "& img": {
      [theme.breakpoints.up("sm")]: {
        height: "8rem",
      },
      [theme.breakpoints.up("md")]: {
        height: "9.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        height: "12rem",
      },
    },
  },
}))

const Experts = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="about"
      id="about"
    >
      <Grid
        container
        justify="space-between"
        spacing={10}
        className={classes.expertbox}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={5}
          data-aos={"fade-up"}
        >
          <Typography variant="h3" style={{color: "#0e44ff"}}>
            certified experts.
          </Typography>

          <List className={classes.experts}>
            <ListItem>Adobe Certified Expert Commerce Developer</ListItem>
            <ListItem>Magento2 Certified Cloud Developer</ListItem>
            <ListItem>AWS Certified Cloud Practitioner</ListItem>
            <ListItem>Prince2 Foundation Certified Developer</ListItem>
          </List>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifycontent="center"
          justify="flex-start"
          xs={12}
          md={7}
          data-aos={"fade-up"}
          className={classes.images}
        >
          <List style={{width: "100%", display: "flex"}}>
            <ListItem className={classes.image}>
              <Image
                src="/images/Layer_125.svg"
                alt=""
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </ListItem>
            <ListItem className={classes.image}>
              <Image
                src="/images/Layer_129.svg"
                alt=""
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </ListItem>
            <ListItem className={classes.image}>
              <Image
                src="/images/Layer_123.svg"
                alt=""
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </ListItem>
            <ListItem className={classes.image}>
              <Image
                src="/images/Layer_128.svg"
                alt=""
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

Experts.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Experts
