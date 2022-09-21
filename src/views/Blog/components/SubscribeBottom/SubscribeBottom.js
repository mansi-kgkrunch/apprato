import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Button, Link} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import {spacing} from "@material-ui/system/spacing"
import {useState} from "react"
import jsonp from "jsonp"
import queryString from "query-string"

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
  textfield: {
    color: "#666",
    background: "#FFF",
    backgroundColor: "#FFF",
    input: {
      color: "#FFF",
      background: "#FFF",
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
  textfieldGrid: {
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "1.0rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "1.0em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "1.0em",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "1.0em",
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
  listItemButton: {
    padding: "10px",
    "&:hover": {},
    "&:link": {},
    color: "white",
    whiteSpace: "nowrap",
    borderRadius: "16px",
    minWidth: "15.375rem",
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem",
    },
    textTransform: "initial",
    color: "#FFF",
  },
}))

const SubscribeBottom = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()

  // create state variables for each input
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // http://eepurl.com/hS2FCL
    // url: https://apprato.us20.list-manage.com/subscribe/post
    // <input type="hidden" name="u" value="6057569a58ca23e4af3b36f76">
    // <input type="hidden" name="id" value="d1fd48334b">
    // <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
    // <label for="MERGE1">First Name</label>
    // <label for="MERGE2">Last Name</label>

    const formData = {
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    }
    if (email == "" || firstName == "" || lastName == "") {
      alert("Please enter your first name, last name and email address")
    } else {
      jsonp(
        `https://apprato.us20.list-manage.com/subscribe/post-json?u=6057569a58ca23e4af3b36f76&amp;id=d1fd48334b&${queryString.stringify(
          formData
        )}`,
        {param: "c"},
        (err, data) => {
          console.log("err:", err)
          console.log("data:", data)
        }
      )
      alert("Thank you for signingup to our newsletter")
    }
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <form onSubmit={handleSubmit}>
        <Grid container justify="space-between">
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Typography variant="h3" component="div" gutterBottom>
              subscribe to our newsletter
            </Typography>
          </Grid>
          <Grid item alignItems="center" xs={12} md={12} lg={12} xl={12}>
            <Typography variant="p" component="div" gutterBottom>
              Get news and insights to optimise your business through a
              application development and smarter eCommerce
              <br />
              <br />
              <br />
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            xs={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.textfieldGrid}
          >
            <TextField
              required
              fullWidth
              id="FNAME"
              label="First Name"
              type="search"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.textfieldGrid}
          >
            <TextField
              required
              fullWidth
              id="LNAME"
              label="Last Name"
              type="text"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.textfieldGrid}
          >
            <TextField
              fullWidth
              id="EMAIL"
              label="Email"
              type="text"
              variant="filled"
              InputProps={{
                className: classes.textfield,
              }}
              InputLabelProps={{
                className: classes.textfield,
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.textfieldGrid}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.listItemButton}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

SubscribeBottom.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default SubscribeBottom
