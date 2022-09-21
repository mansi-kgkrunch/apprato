import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"
import {SectionHeader} from "components/molecules"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {gql} from "graphql-tag"
import {useQuery, useMutation} from "@apollo/react-hooks"
import TextTruncate from "react-text-truncate"
import {Link} from "react-router-dom"

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
  card: {
    backgroundColor: "#FFF",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
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
  categories: {
    margin: "5rem",
    backgroundColor: "#000000",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      margin: "5rem",
      backgroundColor: "#000000",
    },
  },
}))

const Items = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()

  //              <CardMedia component="img" height="140" image="" alt="" />
  const posts = props.post.nodes

  function removeHTML(str) {
    var tmp = document.createElement("DIV")
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ""
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        {posts.map((item) => (
          <Grid
            item
            container
            justify="flex-start"
            xs={12}
            md={4}
            lg={4}
            xl={4}
            data-aos={"fade-up"}
            className={classes.heading}
          >
            <Link to={`/${item.slug}`} className={classes.cardLink}>
              <Card sx={{maxWidth: 345}} className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text={removeHTML(item.content)}
                      textTruncateChild={<a href="#"></a>}
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{item.date}</Button>
                  <Button size="small">5 min read</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

Items.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Items
//export default graphql(getPosts)(Items) // Bind the query to the compoent to have access to the variables in the return.
