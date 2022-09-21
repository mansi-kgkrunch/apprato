import React from "react"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {Grid, Typography} from "@material-ui/core"

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 10000, min: 2880},
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: {max: 2880, min: 1024},
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: {max: 1024, min: 0},
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  consultantTitle: {
    marginTop: "18.75rem",
    marginBottom: "6.25rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "8.75rem",
      marginBottom: "3.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3.75rem",
      marginBottom: "1.25rem",
    },
  },
  consultant: {
    borderRadius: "30px",
    backgroundImage: "linear-gradient(0deg, #ebf0ff 0%, #ffffff 100%)",
    border: "4px solid #ffffff",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  consultantimage: {
    lineHeight: "2.75rem",
    padding: "0 3.75em",
    [theme.breakpoints.down("md")]: {
      lineHeight: "0.5rem",
      padding: "3em 1.5em",
    },
    [theme.breakpoints.between("md", "lg")]: {
      lineHeight: "0.5rem",
      padding: "0 1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "0.5rem",
      padding: "1em 0.5em",
    },
  },
  subline: {
    display: "inline-block",
    width: "100%",
    lineHeight: "60px",
    marginBottom: "50px",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "40px",
      marginBottom: "15px",
    },
  },
  imageroot: {
    display: "block",
  },
  sectionstyle: {
    marginBottom: "200px",

    [theme.breakpoints.down("lg")]: {
      marginBottom: "100px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "25px",
    },
  },
}))

const Consultants = (props) => {
  const classes = useStyles()

  const CustomRightArrow = ({onClick, ...rest}) => {
    return (
      <button
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
        onClick={() => onClick()}
      >
        <img src="./images/right.png" width="20" alt="" />
      </button>
    )
  }

  const CustomLeftArrow = ({onClick, ...rest}) => {
    return (
      <button
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
        onClick={() => onClick()}
      >
        <img src="./images/left.png" width="20" alt="" />
      </button>
    )
  }

  return (
    <div className={classes.sectionstyle} name="team" id="team">
      <Grid
        container
        justify="space-between"
        className={classes.consultantTitle}
      >
        <Typography variant="h2">featured consultants.</Typography>
      </Grid>

      <div className={classes.carouselContainer}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={[]}
          responsive={responsive}
          centerMode={false}
          ssr={false}
          partialVisible={false}
          renderButtonOutside={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Jordan.png"
                className={classes.consultant}
                alt="Jordan Pearce"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Jordan Pearce
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                General Manager
              </Typography>
              <Typography variant="subtitle1">
                Enterprise Architect
                <br />
                AWS Certified
                <br />
                <br />
              </Typography>
              <Typography variant="h6">
                Jordan is a seasoned technology leader and systems developer,
                with experience in both the commercial and government sectors.
                Jordan is MBA graduate with extensive experience in developing
                all aspects of eCommerce businesses.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Stephen.png"
                className={classes.consultant}
                alt="Stephen Goudie"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Stephen Goudie
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                Senior Software Engineer
              </Typography>
              <Typography variant="subtitle1">
                Adobe Certifed Magento Developer
                <br />
                AWS Certified
                <br />
                React / NodeJS
                <br />
                System Integrator
                <br />
                <br />
              </Typography>
              <Typography variant="h6">
                Stephen has worked as a software engineer for several leading
                Australian companies both externally, client side and as an
                independent contractor and consultant. With over 10 years of IT
                experience particularly in the e-commerce space as an expert in
                the Magento platform. He is a passionate full stack developer
                with skills in App Development, React, NodeJs, AWS, DevOps,
                integration and cloud systems.
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Anja.png"
                className={classes.consultant}
                alt="Anja Ishmuk"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Anja Ishmuk
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                Senior Software Engineer
              </Typography>
              <Typography variant="subtitle1">
                React, React Native
                <br />
                NodeJS, Golang,
                <br />
                Solidity Blockchain
                <br />
                <br />
              </Typography>
              <Typography variant="h6">
                Full Stack Senior software engineer frontend leading experience
                in React, React Native (Headless desktop & mobile), blockchain ,
                NodeJS, GoLang, AWS Services & Security expert.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Vishal.png"
                className={classes.consultant}
                alt="Vishal Panchal"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Vishal Panchal
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                Software Developer
              </Typography>
              <Typography variant="subtitle1">
                Adobe Certifed Developer
                <br />
              </Typography>
              <Typography variant="h6">
                We can help you transform an idea into a viable product by
                defining your business goals and building a roadmap to the best
                possible solution.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Jim.png"
                className={classes.consultant}
                alt="Jim Atanasovski"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Jim Atanasovski
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                Senior Designer
              </Typography>
              <Typography variant="h6">
                Building on 15 years agency experience across brand, creative
                and design, Jim helps businesses build value, purpose and
                direction through experiences that engage and convert.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              xs={12}
              md={4}
              lg={6}
              xl={6}
              className={classes.imageroot}
            >
              <img
                src="../images/consultants/Johnathan.png"
                className={classes.consultant}
                alt="Johnathan Encavey"
              />
            </Grid>
            <Grid
              item
              container
              className={classes.consultantimage}
              justify="flex-start"
              xs={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Typography variant="h5" display="block">
                Johnathan Encavey
              </Typography>
              <Typography variant="subtitle2" className={classes.subline}>
                Project manager and client manager
              </Typography>
              <Typography variant="h6">
                His Role is to identify gaps in existing business that require a
                unique technical solution. If required, we will engage our team
                at Apprato and I will project manage the team to deliver
                whatever the solution is. Including Apps, CRM, back office
                processes, Websites, Social, Media, Marketing, PR
              </Typography>
            </Grid>
          </Grid>
        </Carousel>
      </div>
    </div>
  )
}

Consultants.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Consultants
