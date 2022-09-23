import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, TextField, Button } from "@material-ui/core";
import { Image } from "components/atoms";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-formControl": {
      color: "#0e44ff",
      padding: "0 30px",
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
      // [theme.breakpoints.down("md")]: {
      //   color: "#0e44ff",
      //   padding: "0 30px",
      // },
    },
    // "& .MuiFormControl-root.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.Mui-focused.Mui-focused": {
    //   color: "#0e44ff",
    //   padding: "0 30px !important",
    //   [theme.breakpoints.down("sm")]: {
    //     padding: 0,
    //   },
    // },
    "& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-multiline.MuiInput-multiline": {
      borderBottom: "2px solid #0e44ff !important",
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
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  messageForm: {
    paddingLeft: "90px",
    paddingRight: "90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

const MessageForm = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      name="messageForm"
      id="messageForm"
    >
      <Grid container justify="space-between" className={classes.messageForm}>
        <Grid item md={8} sx={12} className={classes.title}>
          <Typography variant="h4">
            Ready to grow your on-line business?
          </Typography>
          <Typography variant="h4">Let's talk.</Typography>
        </Grid>
        <Grid item md={12} className={classes.form}>
          <Box component="form" noValidate>
            <div className={classes.div}>
              <TextField
                id="standard-required"
                label="First name*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
              />
              <TextField
                id="standard-required"
                label="Last name*"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
              />
              <TextField
                id="standard-required"
                label="Company name*"
                placeholder="Placeholder"
                multiline
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
              />
              <TextField
                id="standard-required"
                label="Telephone number (optional)"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
              />
              <TextField
                id="standard-required"
                label="Project details (optional)"
                placeholder="Placeholder"
                multiline
                className={classes.textfiled}
              />
            </div>
            <div className={classes.kgSendMessageButton}>
              <Button className={classes.messageButton}>send message</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

MessageForm.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MessageForm;
