import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  heading: {
    "& h2": {
      [theme.breakpoints.down('md')]: {
        margin: '1.5em 0 0',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '1em 0 0',
      },
    },
    "& h6": {
      margin: '1.5em 0',
      [theme.breakpoints.down('sm')]: {
        margin: '1em 0 0',
      },
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: '12rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight: '23rem',
    },
  },
  image: {
    maxWidth: '80%',
    height: 'auto',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '4rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
      margin: '0 auto',
    },
  },
  reversemob:{
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  }
}));

const Header = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        className={classes.reversemob}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={'fade-up'}
          className={classes.heading}
        >
          <SectionHeader
            title={
              <div>
                apprato blog
              </div>
            }
            subtitle="The Apprato blog is the hub for developers, business owners, managers and entrepreneurs featuring technology, news, resources and insights that help run smarter application and eCommerce businesses."
            align="left"
            disableGutter
            titleVariant="h2"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          xs={12}
          md={6}
          lg={6}
          xl={6}
          data-aos={'fade-up'}
        >
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Header;
