import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Section} from "components/organisms"
import {Header, Categories, Items, SubscribeBottom} from "./components"
import {gql} from "graphql-tag"
import {Query} from "react-apollo"
import {useQuery} from "@apollo/react-hooks"
import {useLocation} from "react-router-dom"
import {useParams} from "react-router-dom"

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

const BlogListingCategory = () => {
  const classes = useStyles()
  const location = useLocation()
  const {category} = useParams()

  const GET_CATEGORY_POSTS = gql`
    {
      posts(where: {categoryName: "${category}"}) {
        nodes {
          id
          title
          uri
          slug
          date
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  `

  const {loading, error, data} = useQuery(GET_CATEGORY_POSTS)

  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>An error occured!</p>

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Header />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <Items post={data.posts} />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  )
}

export default BlogListingCategory
