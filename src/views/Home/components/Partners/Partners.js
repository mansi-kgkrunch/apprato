import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import {
  Box,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    opacity: '1',
    margin: '80px 5em',
    [theme.breakpoints.down('md')]: {
      maxWidth: '20vw',
      margin: '20px 3em 0',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20vw',
      margin: '20px 1em',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '11vw',
      margin: '60px 1.5em 0',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '11vw',
      margin: '80px 3.5em 0',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '7vw',
    },
  },
  navigationContainer: {
    textAlign: 'center',
    margin: '0 auto',
    padding: '8rem 0 0',
    minHeight: '30em',

    [theme.breakpoints.down('lg')]: {
      padding: '4rem 0',
      minHeight: '20em',
    },    
    [theme.breakpoints.down('md')]: {
      padding: '4rem 0 0',
      minHeight: '17em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3rem 0 0',
      minHeight: 'auto',
    },
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    margin: '',
    width: 'auto',
    lineHeight: '4rem',
  },
  listItemText: {
    lineHeight: '0',
    color: '#202f43',
    fontWeight: 500,
    padding: '0',
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    paddingBottom: '1em',
    '&:hover':{
      color: '#0d44ff',
      borderBottom: '0.2em solid #0d44ff',
    },
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },  
  partners: {
    textAlign: 'center',
    margin: '0 auto 17.1875rem',
    display: 'block',
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto 5rem',
    },    
  },
  parentp:{
    display: 'block',
    margin: '0 auto',
    width: '100%'
  },
  childp:{
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}));

const Partners = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data1, data2, data3, data4, data5, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spaces={0} justify="flex-start"> 
        <Grid item align="center" style={{margin:'0 7vw'}}>
        <Typography variant="h4">
          From connected services to commerce platforms, we provide you with the custom tools you need to emerge as a leader in your industry.
        </Typography>
        </Grid>
      </Grid>
      <Box className={classes.navigationContainer}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Platform as a Service" {...a11yProps(0)} />
            <Tab label="Item Marketing" {...a11yProps(1)} />
            <Tab label="Inventory & Integration" {...a11yProps(2)} />
            <Tab label="Payments and Security" {...a11yProps(3)} />
            <Tab label="Shipping & Fulfillment" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Grid container justif="center" alignItems="center" className={classes.parentp}>
              {data1.map((item, index) => (
                <Grid item xs={4} md={2} key={index} className={classes.childp}>
                    <embed
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                    />
                </Grid>
              ))}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Grid container justif="center" alignItems="center" className={classes.parentp}>
              {data2.map((item, index) => (
                <Grid item xs={4} md={2} key={index} className={classes.childp}>
                    <embed
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                    />
                </Grid>
              ))}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Grid container justif="center" alignItems="center" className={classes.parentp}>
              {data3.map((item, index) => (
                <Grid item xs={4} md={2} key={index} className={classes.childp}>
                    <embed
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                    />
                </Grid>
              ))}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Grid container justif="center" alignItems="center" className={classes.parentp}>
              {data4.map((item, index) => (
                <Grid item xs={4} md={2} key={index} className={classes.childp}>
                    <embed
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                    />
                </Grid>
              ))}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Grid container justif="center" alignItems="center" className={classes.parentp}>
              {data5.map((item, index) => (
                <Grid item xs={4} md={2} key={index} className={classes.childp}>
                    <embed
                      src={item.logo}
                      alt={item.name}
                      className={classes.logo}
                    />
                </Grid>
              ))}
            </Grid>
        </TabPanel>
      </Box>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data1: PropTypes.array.isRequired,
  data2: PropTypes.array.isRequired,
  data3: PropTypes.array.isRequired,
  data4: PropTypes.array.isRequired,
  data5: PropTypes.array.isRequired,
};

export default Partners;
