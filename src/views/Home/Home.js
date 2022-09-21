import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import {
  Hero,
  Experts,
  Readysetcode,
  Consultants,
  Carouselview,
  Partners,
} from './components';

import { sas1, sas2, sas3, sas4, sas5 } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        <Section className={classes.pagePaddingTop}>
          <Experts />
        </Section>
        <Section className={classes.pagePaddingTop}>
          <Readysetcode />
        </Section>
        <Section className={classes.pagePaddingTop}>
          <Consultants />
        </Section>
        <Section className={classes.pagePaddingTop}>
          <Carouselview />
        </Section>
        <Section>
          <Partners data1={sas1} data2={sas2} data3={sas3} data4={sas4} data5={sas5} />
        </Section>
    </div>
  );
};

export default Home;
