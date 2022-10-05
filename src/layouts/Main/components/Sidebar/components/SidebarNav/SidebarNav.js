/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
  Collapse,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";
import { Link as LinkHref } from "react-router-dom";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
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
  listItemSubMenu: {
    position: "absolute",
    top: "84px",
    backgroundColor: "#fff",
    padding: "0px 12px",
    justifyContent: "center",
    borderRadius: "3px",
    // opacity: "0",
    // visibility: "hidden",
    padding: 0,
    minWidth: "260px",
    left: 0,
  },
  subMenu: {
    fontSize: "18px",
    fontWeight: "600",
  },
  menuIcon: {
    right: "0px",
    width: "24px",
    filter: "invert(1)",
    height: "24px",
    content: "''",
    position: "relative",
    top: "5px",
    [theme.breakpoints.down("md")]: {
      top: "3px !important",
      right: "-2px",
    },
  },
  InnermenuIcon: {
    right: "0px",
    width: "24px",
    height: "24px",
    content: "''",
    position: "relative",
    top: "5px",
    [theme.breakpoints.down("md")]: {
      top: "3px !important",
      right: "-2px",
    },
  },
}));

const SidebarNav = (props) => {
  const { onClose, className, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const page = window.location.pathname;
  const HomePage = page.length;
  const GET_MENU = gql`
    {
      menu(id: "dGVybTozNg==") {
        menuItems {
          nodes {
            id
            label
            path
            parentDatabaseId
            databaseId
            childItems {
              edges {
                node {
                  id
                  label
                  path
                  databaseId
                }
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_MENU);
  var menuItems = data?.menu.menuItems;
  var parentId = [];

  function handleClick(id) {
    localStorage.setItem("menuId", JSON.stringify(id));
    setOpen(!open);
  }
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
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
      </ListItem> */}
      {menuItems?.nodes.map(function(menu) {
        parentId.push(menu.databaseId);

        return (
          <>
            {!parentId.includes(menu.parentDatabaseId) ? (
              <ListItem
                id={menu.id}
                className={classes.listItem}
                key={menu.databaseId}
              >
                {menu.childItems ? (
                  <>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={
                        HomePage === 1
                          ? classes.listItemTextHome
                          : classes.listItemText
                      }
                      onClick={() => handleClick(menu.databaseId)}
                    >
                      {menu.label}{" "}
                      {menu.childItems.edges.length > 0 ? (
                        <span>
                          <img
                            src="/images/blue_arrow.png"
                            className={classes.InnermenuIcon}
                          />
                        </span>
                      ) : (
                        ""
                      )}
                      <input
                        type="hidden"
                        value={menu.databaseId}
                        className="kg_main_menu"
                      ></input>
                    </Typography>
                  </>
                ) : (
                  <>
                    <LinkHref
                      to={`/${menu.path.split("/")[1]}`}
                      style={{
                        textDecoration: "none",
                        position: "relative",
                      }}
                      onClick={() => handleClick(menu.databaseId)}
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        className={
                          HomePage === 1
                            ? classes.listItemTextHome
                            : classes.listItemText
                        }
                      >
                        {menu.label}{" "}
                        {menu.childItems.edges.length > 0 ? (
                          <span>
                            {HomePage === 1 ? (
                              <img
                                src="/images/arrow.png"
                                className={classes.menuIcon}
                              />
                            ) : (
                              <img
                                src="/images/blue_arrow.png"
                                className={classes.InnermenuIcon}
                              />
                            )}
                          </span>
                        ) : (
                          ""
                        )}
                        <input
                          type="hidden"
                          value={menu.databaseId}
                          className="kg_main_menu"
                        ></input>
                      </Typography>
                    </LinkHref>
                  </>
                )}

                <Collapse in={open} timeout="auto" unmountOnExit>
                  {menu.childItems ? (
                    <>
                      <List
                        className={classes.listItemSubMenu + " kg_cust_child"}
                      >
                        {menu.childItems.edges.map(function(childMenu) {
                          console.log(childMenu);
                          return (
                            <>
                              <ListItem
                                id={childMenu.node.databaseId}
                                key={childMenu.node.id}
                                style={{
                                  borderBottom: "0.4px solid #2630683d",
                                }}
                              >
                                <LinkHref
                                  onClick={() =>
                                    handleClick(childMenu.node.databaseId)
                                  }
                                  to={`/${menu.label.toLowerCase()}/${
                                    childMenu.node.path.split("/")[2]
                                  }`}
                                  style={{
                                    textDecoration: "none",
                                    color: "#202f43",
                                  }}
                                >
                                  <Typography className={classes.subMenu}>
                                    {childMenu.node.label}
                                  </Typography>
                                  <input
                                    type="hidden"
                                    value={menu.databaseId}
                                    className="kg_sub_menu"
                                  ></input>
                                </LinkHref>
                              </ListItem>
                            </>
                          );
                        })}
                      </List>
                    </>
                  ) : (
                    ""
                  )}
                </Collapse>
              </ListItem>
            ) : (
              ""
            )}
          </>
        );
      })}
      <ListItem className={classes.listItem}>
        <Button size="large" variant="contained" color="primary" fullWidth>
          <Link to="contact" smooth={true} duration={2500} onClick={onClose}>
            Contact
          </Link>
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;
