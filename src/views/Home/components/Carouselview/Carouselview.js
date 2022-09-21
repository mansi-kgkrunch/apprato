import React from "react"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import Carousel from "react-material-ui-carousel"
import {Grid, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  placementGrid: {
    display: "flex",
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  logoimage: {
    [theme.breakpoints.down("xl")]: {
      height: "5.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "8.5rem",
    },
    [theme.breakpoints.down("md")]: {
      height: "3.5em",
    },
    width: "auto",
  },
  coverImage: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
  imageleft: {
    backgroundImage: `url(${"../images/casestudies/Aquila_Image.jpg"})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      minHeight: "46vw",
      backgroundPosition: "0px -30px",
      minWidth: "80vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      backgroundPosition: "0 0",
      minHeight: "35vw",
      minWidth: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "0 0",
      minWidth: "auto",
      height: "auto",
    },
  },
  imageleft2: {
    backgroundImage: `url(${"../images/casestudies/ACER_Graphic.jpg"})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      minHeight: "46vw",
      backgroundPosition: "0px -30px",
      minWidth: "80vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      backgroundPosition: "0 0",
      minHeight: "35vw",
      minWidth: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "0 0",
      minWidth: "auto",
      height: "auto",
    },
  },
  imageleft3: {
    backgroundImage: `url(${"../images/casestudies/Adore_Graphic.jpg"})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      minHeight: "46vw",
      backgroundPosition: "0px -30px",
      minWidth: "80vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      backgroundPosition: "0 0",
      minHeight: "35vw",
      minWidth: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "0 0",
      minWidth: "auto",
      height: "auto",
    },
  },
  imageleft4: {
    backgroundImage: `url(${"../images/casestudies/Farm2_Market_graphic.jpg"})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      minHeight: "46vw",
      backgroundPosition: "0px -30px",
      minWidth: "80vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      backgroundPosition: "0 0",
      minHeight: "35vw",
      minWidth: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "0 0",
      minWidth: "auto",
      height: "auto",
    },
  },
  whitebg: {
    background: "#fff",
    padding: "6.25em",
    [theme.breakpoints.down("lg")]: {
      padding: "3.25em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2.75em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
    "& h6": {
      margin: "1.5em 0 0",
    },
    "& h4": {
      margin: "0.5em 0 0",
    },
  },
  headingh2: {
    marginBottom: "180px",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
  },
  title: {
    marginBottom: "120px",
    maxWidth: "45%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "50px",
      maxWidth: "550px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
    },
  },
}))

const Carouselview = (props) => {
  const classes = useStyles()

  return (
    <div name="case-studies" id="case-studies">
      <Grid className={classes.title} container>
        <Typography variant="h5">
          Delivering accelerated outcomes by working in accountable partnership.
        </Typography>
      </Grid>
      <Grid container>
        <Carousel
          NextIcon={<img src="./images/right.png" width="20" alt="" />}
          PrevIcon={<img src="./images/left.png" width="20" alt="" />}
          className="consultantreel"
          animation="fade"
          autoPlay="false"
          interval="3600000"
          stopAutoPlayOnHover="true"
          cycleNavigation="false"
          navButtonsAlwaysVisible="false"
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "4px",
              color: "#fff",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#3377ff",
            },
          }}
        >
          <Grid container>
            <Grid item container xs={12} md={6} lg={6}>
              <div className={classes.imageleft}></div>
            </Grid>
            <Grid
              item
              container
              className={classes.whitebg}
              justify="flex-start"
              xs={12}
              md={6}
              lg={6}
            >
              <img
                src="images/casestudies/Aquila_Logo.jpg"
                className={classes.logoimage}
                alt=""
              />
              <Typography variant="h4" style={{width: "100%"}}>
                Supporting Aquilas growth
              </Typography>

              <Typography variant="subtitle2">Development</Typography>
              <Typography variant="h6">
                As part of the brand expansion, Apprato worked with Aquila to
                increase their digital reach and support their growing eCommerce
                requirements . We integrated Emarsys Omnichannel Customer
                Engagement Platform to allow Aquila to export data feeds and
                develop mail lists and record sales metric engagements with
                front-end engagement trackers. We updated the payment gateway to
                Braintree with Kount for AI Driven Fraud Protection. And
                implemented an Advanced Look Book Engine to show case seasonal
                fashion apparel.
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item container xs={12} md={6} lg={6}>
              <div className={classes.imageleft2}></div>
            </Grid>
            <Grid
              item
              container
              className={classes.whitebg}
              justify="flex-start"
              xs={12}
              md={6}
              lg={6}
            >
              <img
                src="images/casestudies/ACER_Logo.jpg"
                className={classes.logoimage}
                alt=""
              />
              <Typography variant="h4" style={{width: "100%"}}>
                Upgrading ACERs Technology
              </Typography>

              <Typography variant="subtitle2">
                Consulting, Developing, Support & Scaling
              </Typography>
              <Typography variant="h6">
                Apprato assisted A.C.E.R in Migrating and upgrading their old
                project from the Magento 1 platform to the Magento 2 platform.
                We also advised on solutions to better support Multiple auto
                scaling architecture and admin node processes of staging and
                production systems through continuous deployment & integration
                of ERP product stock, exporting data to financial systems and
                backorder & On Account processes.
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item container xs={12} md={6} lg={6}>
              <div className={classes.imageleft3}></div>
            </Grid>
            <Grid
              item
              container
              className={classes.whitebg}
              justify="flex-start"
              xs={12}
              md={6}
              lg={6}
            >
              <img
                src="images/casestudies/Adorn Cosmetics.png"
                className={classes.logoimage}
                alt=""
              />
              <Typography variant="h4" style={{width: "100%"}}>
                Aiding Adorns Development
              </Typography>

              <Typography variant="subtitle2">
                Consulting, Developing, Support & Scaling
              </Typography>
              <Typography variant="h6">
                Apprato assisted Adorn in augmenting their Development team to
                meet the appetite for their development goals. We upgraded
                Adorns server infrastructure to support increased capacity for
                expected customer growth. Apprato debugged and correct Magento
                extensions to work with out issues with in their environment. We
                also reconfigured Adorns checkout to include AfterPay and
                implemented Facebook Catalogue Sync for extended marketing
                capability.
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item container xs={12} md={6} lg={6}>
              <div className={classes.imageleft4}></div>
            </Grid>
            <Grid
              item
              container
              className={classes.whitebg}
              justify="flex-start"
              xs={12}
              md={6}
              lg={6}
            >
              <img
                src="images/casestudies/Farm2Market_Logo_B.W.svg"
                className={classes.logoimage}
                alt=""
              />
              <Typography variant="h4" style={{width: "100%"}}>
                Supporting Farm2markets Technology
              </Typography>

              <Typography variant="subtitle2">
                Develop Maintain Continuous Improvement
              </Typography>
              <Typography variant="h6">
                Apprato has helped Farm2market by advising and planning their
                technology stack as part of their initial development process.
                We have been a continued technology partner of Farm2market from
                their inception when establishing their double-ended
                marketplace. We have helped to sustain their growth strategy
                with technology by implementing and customising integrations to
                reach more customers with promotional and loyalty software and
                complex transport integrations.
              </Typography>
            </Grid>
          </Grid>
        </Carousel>
      </Grid>
    </div>
  )
}

Carouselview.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Carouselview
