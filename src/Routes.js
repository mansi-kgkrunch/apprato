import React, { useEffect } from 'react';
import { Switch, Redirect,useLocation  } from "react-router-dom";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { RouteWithLayout } from "./common";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";


import {
  Home as HomeView,
  About as AboutView,
  Blog as BlogView,
  BlogListing as BlogListingView,
  BlogListingCategory as BlogListingCategoryView,
  Services as ServicesView,
  Team as TeamView,
  CaseStudies as CaseStudiesView,
  Contact as ContactView,
} from "./views";

const  getKeyByValue=(object, value)=> {
  return Object.keys(object).find(key => object[key] === value);
}

const Routes = () => {

  var current_menu_id='';
  var GET_MENU  = gql`
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
  `
const { loading, errors, data } = useQuery(GET_MENU);
var menuItems = data?.menu.menuItems;

var CurrentMenuArray = [];
{menuItems?.nodes.map(function(menu) {
  CurrentMenuArray[menu.databaseId] = menu.path;
})}

const location = useLocation();
var current_url = location.pathname;
if(current_url.substr(-1) != '/')
{
  current_url=current_url+'/';
}
current_menu_id=getKeyByValue(CurrentMenuArray,current_url);
if(current_menu_id)
{
  console.log(current_menu_id, "menuId");
  localStorage.setItem("menuId", JSON.stringify(current_menu_id));
}


  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        component={ServicesView}
        exact
        layout={MainLayout}
        path="/services/:category"
      />
      <RouteWithLayout
        component={BlogView}
        exact
        layout={MainLayout}
        path="/blog"
      />
      <RouteWithLayout
        component={BlogListingCategoryView}
        exact
        layout={MainLayout}
        path="/blog/:category"
      />
      <RouteWithLayout
        component={BlogListingView}
        exact
        layout={MainLayout}
        path="/:slug"
      />
      <RouteWithLayout
        component={TeamView}
        exact
        layout={MinimalLayout}
        path="/team"
      />
      <RouteWithLayout
        component={CaseStudiesView}
        exact
        layout={MainLayout}
        path="/casestudies/:category"
      />
      <RouteWithLayout
        component={ContactView}
        exact
        layout={MinimalLayout}
        path="/contact"
      />

      <Redirect to="/not-found" status="404" />
    </Switch>
  );
};

export default Routes;
