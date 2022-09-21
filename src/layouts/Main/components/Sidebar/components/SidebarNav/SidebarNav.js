/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import {Link} from "react-scroll"
import {Link as LinkHref} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0 20px 15px",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  listItemLink: {
    textDecoration: "none",
    cursor: "pointer",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  divider: {
    width: "100%",
  },
  sidebarNavLink: {
    textUnderline: "none",
  },
}))

const SidebarNav = (props) => {
  const {onClose, className, ...rest} = props
  const classes = useStyles()

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/" onClick={onClose} className={classes.sidebarNavLink}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Home
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/#about" onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            About
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/#services" onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Services
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/#team" onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Team
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/#case-studies" onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Case Studies
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref to="/blog" onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Blog
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button size="large" variant="contained" color="primary" fullWidth>
          <Link to="contact" smooth={true} duration={2500} onClick={onClose}>
            Contact
          </Link>
        </Button>
      </ListItem>
    </List>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
}

export default SidebarNav
