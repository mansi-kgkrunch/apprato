import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Section} from "components/organisms"
import {Header, Categories, Items, SubscribeBottom} from "./components"

import {sas1, sas2, sas3, sas4, sas5} from "./data"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {},
}))

const Blog = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Header />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <Categories />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  )
}

export default Blog
