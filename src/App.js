import React, {useEffect} from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"
import {Router, useLocation, useHistory} from "react-router-dom"
import {createBrowserHistory} from "history"
import {ThemeProvider} from "@material-ui/core/styles"
import {Paper, CssBaseline} from "@material-ui/core"
import AOS from "aos"

import theme from "./theme"
import Routes from "./Routes"

import "./theme/AktivGrotesk/fonts.css"
import "react-lazy-load-image-component/src/effects/opacity.css"
import "aos/dist/aos.css"

/* Google Tag Manager
import TagManager from "react-gtm-module"
const tagManagerArgs = {
  gtmId: "G-3SNKMGKWLV",
}
TagManager.initialize(tagManagerArgs)
*/

// Set up Google Analytics inside our project, GA needs to be initialized. This needs to be done before any of the other tracking functions will record any data.
import ReactGA from "react-ga"
const TRACKING_ID = "G-3SNKMGKWLV" // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

const browserHistory = createBrowserHistory()

browserHistory.listen((location) => {
  const hash = window.location.hash

  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (window.location.action === "POP") {
      return
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0)

    // Scroll to from other pages to home page ids
    if (window.location.hash) {
      // Fragment exists
      setTimeout(() => {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        const options = {
          behavior: "smooth",
          duration: 2300,
        }
        if (element) {
          element.scrollIntoView(options)
        }
      }, 1500)
    } else {
      // Issue with Safari subscribe form not loading on /blog pages when hitting the back button, so just refresh the browser in this case.
      if (window.location.href.indexOf("blog") > -1) {
        //alert("..")
        window.location.reload(false)
      }
    }
  })
})

const App = () => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: "ease-in-out",
  })

  const client = new ApolloClient({
    uri: "https://backend.apprato.com.au/graphql",
    cache: new InMemoryCache(),
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </Paper>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
