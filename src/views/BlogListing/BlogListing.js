import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Section} from "components/organisms"
import {Header, Body, Items, SubscribeBottom} from "./components"
import {gql} from "graphql-tag"
import {Query} from "react-apollo"
import {useQuery} from "@apollo/react-hooks"
import {useLocation} from "react-router-dom"

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

const BlogListing = () => {
  const classes = useStyles()
  const location = useLocation()
  var path = location.pathname.slice(1)

  const GET_POST = gql`
    {
      post(
        id: "${path}"
        idType: SLUG
      ) {
        title
        featuredImage {
          node {
            id
            link
            mediaDetails {
              file
            }
          }
        }
        author {
          node {
            firstName
            lastName
            name
          }
        }
        uri
        slug
        date
        content
      }
    }
  `

  const {loading, error, data} = useQuery(GET_POST)

  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>An error occured!</p>

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Header post={data.post} />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <Body post={data.post} />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  )
}

export default BlogListing
