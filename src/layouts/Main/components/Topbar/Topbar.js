import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import {
  Grid,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  Collapse,
} from "@material-ui/core";
import { Link as LinkHref } from "react-router-dom";
import { Image } from "components/atoms";
import { useDispatch } from "react-redux";
import { menuID } from "redux/slices/MenuId";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .kg_cust_child .MuiListItem-root:hover ": {
      background: "#5cb6eb",
    },
    "& .kg_cust_child .MuiListItem-root:hover a": {
      color: "#fff !important",
    },
    "& .MuiList-root li:hover > ul": {
      opacity: 1,
      visibility: "visible",
    },
    "& .kg_cust_child .MuiListItem-root a": {
      color: "#202f43 !important",
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 0, "0px"),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 0, "0px"),
    },
  },
  toolbar: {
    position: "absolute",
    top: "0",
    zIndex: "1",
    width: "100%",
    padding: "15px 120px",
    paddingTop: "25px",
    "@media (max-width:1180px)": {
      padding: "15px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      // padding: theme.spacing(0, 0, 12)
      padding: "0px 20px",
      paddingTop: "15px",
    },
  },
  listItem: {
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
      height: "auto",
    },
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none !important",
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    color: "#0e44ff",
  },
  listItemTextHome: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none !important",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    color: "#fff",
  },
  listItemButtonHome: {
    whiteSpace: "nowrap",
    minWidth: "15.375rem",
    backgroundColor: "transparent",
    border: "2px",
    borderColor: "white",
    fontSize: "2rem",
    boxShadow: "unset",
    border: "2px solid white",
    borderRadius: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem",
    },
    textTransform: "initial",
  },
  listItemButton: {
    borderRadius: 0,
    whiteSpace: "nowrap",
    minWidth: "15.375rem",
    backgroundColor: "transparent",
    border: "2px",
    borderColor: "#0e44ff",
    fontSize: "2rem",
    boxShadow: "unset",
    border: "2px solid white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem",
    },
    textTransform: "initial",
    color: "#0e44ff",
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "end",
    },
  },
  logoContainer: {
    width: "100%",
    maxWidth: "220px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "220px",
    },
  },
  listItemSubMenu: {
    position: "absolute",
    top: "60px",
    backgroundColor: "#fff",
    padding: "0px 12px",
    justifyContent: "center",
    borderRadius: "3px",
    opacity: "0",
    visibility: "hidden",
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
    top: "6px",
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
  logoImage: {
    // [theme.breakpoints.down("md")]: {
    height: "auto",
    // },
  },
  kgLogoContainer: {
    flexGrow: 0,
    maxWidth: "15%",
    flexBasis: "15%",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
  menuContainer: {
    flexGrow: 0,
    maxWidth: "70%",
    flexBasis: "70%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ButtonContainer: {
    flexGrow: 0,
    maxWidth: "15%",
    flexBasis: "15%",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",
      justifyContent: "end",
    },
    "@media (max-width:960px)": {
      justifyContent: "flex-end !important",
    },
  },
  subMenuItems: {
    borderBottom: "0.4px solid #2630683d",
    padding: "0px !important",
  },
  subMenuList: {
    textDecoration: "none",
    color: "#202f43",
    width: "100%",
    display: "block",
    padding: "8px 16px",
  },
}));

const Topbar = (props) => {
  const { onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const page = window.location.pathname;
  const HomePage = page.length;

  // });
  const GET_MENU = gql`
    {
      menu(id: "dGVybTozNg==") {
        menuItems(first: 100) {
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
  const [open, setOpen] = React.useState(false);
  const [menuId, setMenuId] = React.useState();
  var menuItems = data?.menu.menuItems;
  var parentId = [];
  function handleClick(id) {
    localStorage.setItem("menuId", JSON.stringify(id));
  }
  function handleCollpaseClick(id) {
    setOpen(!open);
    setMenuId(id);
  }
  function handleMouseHover(id) {
    setOpen(!open);
    setMenuId(id);
  }
  return (
    <div className={classes.root}>
      <Toolbar
        disableGutters
        className={classes.toolbar + " kg_header"}
        {...rest}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            item
            container
            xs={8}
            md={4}
            lg={3}
            xl={3}
            data-aos={"fade-up"}
            className={classes.kgLogoContainer}
          >
            <div className={classes.logoContainer}>
              {/* <a href="/" title="thefront"> */}
              <LinkHref to="/">
                {HomePage === 1 ? (
                  <Image
                    className={classes.logoImage}
                    src="/images/Apprato_Logo_white.png"
                    alt="thefront"
                    lazy={false}
                  />
                ) : (
                  <Image
                    className={classes.logoImage}
                    src="/images/Apprato_Logo_blue.svg"
                    alt="thefront"
                    lazy={false}
                  />
                )}
                {/* </a> */}
              </LinkHref>
            </div>
          </Grid>
          <Grid
            item
            container
            justifyContent="start"
            xs={2}
            md={6}
            lg={6}
            xl={6}
            data-aos={"fade-up"}
            className={classes.menuContainer}
          >
            <Hidden smDown>
              <List className={classes.navigationContainer}>
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
                          {menu.childItems.edges.length > 0 ? (
                            <>
                              <Typography
                                variant="body1"
                                color="textPrimary"
                                className={
                                  HomePage === 1
                                    ? classes.listItemTextHome
                                    : classes.listItemText
                                }
                                onClick={() => (
                                  handleClick(menu.databaseId),
                                  handleCollpaseClick(menu.databaseId)
                                )}
                                onMouseOver={() =>
                                  handleMouseHover(menu.databaseId)
                                }
                                onMouseLeave={() =>
                                  handleMouseHover(menu.databaseId)
                                }
                              >
                                {menu.label}
                                {menu.childItems.edges.length > 0 ? (
                                  <span>
                                    {/* {HomePage === 1 ? (
                                      <img
                                        src="/images/arrow.png"
                                        className={classes.menuIcon}
                                      />
                                    ) : ( */}
                                    <img
                                      src="/images/down_icon.png"
                                      className={classes.InnermenuIcon}
                                    />
                                    {/* )} */}
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
                                      {/* {HomePage === 1 ? (
                                        <img
                                          src="/images/arrow.png"
                                          className={classes.menuIcon}
                                        />
                                      ) : ( */}
                                      <img
                                        src="/images/down_icon.png"
                                        className={classes.InnermenuIcon}
                                      />
                                      {/* )} */}
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
                          {menu.databaseId == menuId ? (
                            //  <Collapse in={open} timeout="auto" unmountOnExit>
                            menu.childItems ? (
                              <>
                                <List
                                  className={
                                    classes.listItemSubMenu + " kg_cust_child"
                                  }
                                  onMouseLeave={() =>
                                    handleMouseHover(menu.databaseId)
                                  }
                                >
                                  {menu.childItems.edges.map(function(
                                    childMenu
                                  ) {
                                    return (
                                      <>
                                        <ListItem
                                          id={childMenu.node.databaseId}
                                          key={childMenu.node.id}
                                          className={classes.subMenuItems}
                                        >
                                          <LinkHref
                                            onClick={() => (
                                              handleClick(
                                                childMenu.node.databaseId
                                              ),
                                              handleCollpaseClick(
                                                menu.databaseId
                                              )
                                            )}
                                            className={classes.subMenuList}
                                            to={`${childMenu.node.path}`}
                                          >
                                            <Typography
                                              className={classes.subMenu}
                                            >
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
                            )
                          ) : (
                            /* </Collapse> */
                            ""
                          )}
                        </ListItem>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
                {/* <LinkHref
                  to={`/case-studies`}
                  style={{
                    textDecoration: "none",
                    position: "relative",
                  }}
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
                    case Studies
                  </Typography>
                </LinkHref> */}
              </List>
            </Hidden>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            xs={2}
            md={2}
            lg={3}
            xl={3}
            justifyContent="flex-start"
            className={classes.ButtonContainer}
          >
            <Hidden smDown>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={
                  HomePage === 1
                    ? classes.listItemButtonHome
                    : classes.listItemButton
                }
              >
                <Link to="contact" smooth={true} duration={2500}>
                  Get in touch
                </Link>
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                onClick={onSidebarOpen}
                aria-label="Menu"
              >
                {HomePage === 1 ? (
                  <img src="/images/mobilenav.png" alt="" />
                ) : (
                  <img src="/images/Hamburger_Menu.png" alt="" />
                )}
              </IconButton>
            </Hidden>
          </Grid>
        </Grid>
        <div className={classes.flexGrow} />
      </Toolbar>
    </div>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
