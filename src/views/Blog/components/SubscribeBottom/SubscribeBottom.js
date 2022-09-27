import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { spacing } from "@material-ui/system/spacing";
import { useState } from "react";
import jsonp from "jsonp";
import queryString from "query-string";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
};

const useStyles = makeStyles((theme) => ({
  // textfield: {
  //   color: "#666",
  //   background: "#FFF",
  //   backgroundColor: "#FFF",
  //   input: {
  //     color: "#FFF",
  //     background: "#FFF",
  //   },
  //   "&:hover": {
  //     background: "#FFF",
  //   },
  //   "&:visited": {
  //     background: "#FFF",
  //   },
  //   "&:active": {
  //     background: "#FFF",
  //   },
  // },
  // textfieldGrid: {
  //   [theme.breakpoints.up("xs")]: {
  //     paddingBottom: "1.0rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     paddingRight: "1.0em",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     paddingRight: "1.0em",
  //   },
  //   [theme.breakpoints.up("xl")]: {
  //     paddingRight: "1.0em",
  //   },
  // },
  // heading: {
  //   "& h2": {
  //     [theme.breakpoints.down("md")]: {
  //       margin: "1.5em 0 0",
  //     },
  //     [theme.breakpoints.down("sm")]: {
  //       margin: "1em 0 0",
  //     },
  //   },
  //   "& h6": {
  //     margin: "1.5em 0",
  //     [theme.breakpoints.down("sm")]: {
  //       margin: "1em 0 0",
  //     },
  //   },
  //   [theme.breakpoints.up("xs")]: {
  //     paddingRight: "3rem",
  //     paddingBottom: "3rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     paddingRight: "3rem",
  //     paddingBottom: "3rem",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     paddingRight: "7rem",
  //     paddingBottom: "3rem",
  //   },
  //   [theme.breakpoints.up("xl")]: {
  //     paddingRight: "3rem",
  //     paddingBottom: "3rem",
  //   },
  // },
  // image: {
  //   maxWidth: "80%",
  //   height: "auto",
  //   [theme.breakpoints.up("lg")]: {
  //     paddingLeft: "4rem",
  //   },
  //   [theme.breakpoints.down("lg")]: {
  //     paddingLeft: "2rem",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     paddingLeft: "0",
  //     margin: "0 auto",
  //   },
  // },
  // reversemob: {
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column-reverse",
  //   },
  // },
  // listItemButton: {
  //   padding: "10px",
  //   "&:hover": {},
  //   "&:link": {},
  //   color: "white",
  //   whiteSpace: "nowrap",
  //   borderRadius: "16px",
  //   minWidth: "15.375rem",
  //   fontSize: "2rem",
  //   [theme.breakpoints.down("lg")]: {
  //     fontSize: "1.5rem",
  //     minWidth: "10rem",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "1rem",
  //     minWidth: "8rem",
  //   },
  //   textTransform: "initial",
  //   color: "#FFF",
  // },
  root: {
    "& .MuiInputLabel-formControl": {
      color: "#0e44ff",
      padding: "0 30px",
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },

    "& .MuiInputBase-root.MuiInput-root.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-multiline.MuiInput-multiline": {
      borderBottom: "2px solid #0e44ff",
    },
    "& h3": {
      marginBottom: "18px",
    },
    // "& .makeStyles-root-91 .MuiInputBase-root.MuiInput-root.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-multiline.MuiInput-multiline": {},
    // "& .MuiFormLabel-root.Mui-focused": {
    //   padding: "0 30px !important",
    // },
    ".MuiInputLabel-formControl": {
      left: "8px !important",
    },
  },
  messageForm: {
    color: "#0e44ff",
    paddingLeft: "120px",
    paddingRight: "120px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  kgSendMessageButton: {
    color: "#0e44ff",
    padding: "0 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  messageButton: {
    display: "block",
    marginLeft: "auto",
    marginTop: "50px",
    backgroundColor: "transparent",
    padding: "10px 36px",
    color: "#0e44ff",
    border: "2px solid #0e44ff",
    borderRadius: "unset",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginTop: "10px",
      padding: "6px 18px",
    },
  },
  textfiled: {
    width: "33.33%",
    marginRight: 0,
    padding: "0 30px",
    "& #outlined-textarea-label": {},
    ".MuiInputLabel-formControl": {
      left: "8px !important",
    },
    "& .MuiOutlinedInput-root .MuiInput-underline": {
      borderColor: "green",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
      padding: 0,
      marginBottom: "40px",
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: 0,
      padding: 0,
      marginBottom: "40px",
      padding: 0,
    },
  },
  div: {
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  title: {
    color: "#0e44ff",
    marginBottom: "20px",
    padding: "0 30px",
    paddingTop: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      color: "#000",
    },
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const SubscribeBottom = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
    };
    if (email == "" || firstName == "" || lastName == "") {
      alert("Please enter your first name, last name and email address");
    } else {
      jsonp(
        `https://apprato.us20.list-manage.com/subscribe/post-json?u=6057569a58ca23e4af3b36f76&amp;id=d1fd48334b&${queryString.stringify(
          formData
        )}`,
        { param: "c" },
        (err, data) => {
          console.log("err:", err);
          console.log("data:", data);
        }
      );
      alert("Thank you for signingup to our newsletter");
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" >
        <Grid item md={8} sx={12} className={classes.title}>
          <Typography variant="h4">
            Ready to grow your on-line business?
          </Typography>
          <Typography variant="h4">Let's talk.</Typography>
        </Grid>
        <Grid item md={12} className={classes.form}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <div className={classes.div}>
              <TextField
                id="standard-required"
                label="First name*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={firstName}
                // InputLabelProps={{ shrink: true , focused: classes.labelFocused}}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="standard-required"
                label="Last name*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={lastName}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="standard-required"
                label="Company name*"
                placeholder="Placeholder"
                multiline
                InputProps={{
                  disableUnderline: true,
                }}
                className={classes.textfiled}
              />
            </div>
            <div className={classes.div}>
              <TextField
                id="standard-required"
                label="Email*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={email}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-required"
                label="Telephone number (optional)"
                placeholder="Placeholder"
                multiline
                InputProps={{
                  disableUnderline: true,
                }}
                className={classes.textfiled}
              />
              <TextField
                id="standard-required"
                label="Project details (optional)"
                placeholder="Placeholder"
                multiline
                InputProps={{
                  disableUnderline: true,
                }}
                className={classes.textfiled}
              />
            </div>
            <div className={classes.kgSendMessageButton}>
              <Button className={classes.messageButton} onClick={handleSubmit}>
                send message
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid
        container
        justify="space-between"
        className={classes.messageFormMobile}
      >
        <Grid item md={8} sx={12} className={classes.title}>
          <Typography variant="h3">subscribe to our newsletter.</Typography>
          <Typography
            variant="p"
            component="div"
            className={classes.description}
            gutterBottom
          >
            Get news and insights to run a smarter eCommerce business.
          </Typography>
        </Grid>
        <Grid item md={12} className={classes.form}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <div className={classes.div}>
              <TextField
                id="standard-required"
                label="First name*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={firstName}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="standard-required"
                label="Surname*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={lastName}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="standard-required"
                label="Email*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
                value={email}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.kgSendMessageButton}>
              <Button className={classes.messageButton} onClick={handleSubmit}>
                send message
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid> */}
    </div>
  );
};

SubscribeBottom.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default SubscribeBottom;
