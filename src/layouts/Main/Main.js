import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery} from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(../images/bg-layers.png) no-repeat top',
    margin: '0 auto 0',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 1em 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 6em 0',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '80px 16.875rem 40px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '30px 4em 0',
    },
    height: '100%',
  },
  rootfooter: {
    background: theme.palette.background.footer,
    margin: '0 auto 0',
    [theme.breakpoints.down('xl')]: {
      padding: '0 11em 0',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 7em 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 5em 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 2em 0',
    },
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div>
    <div className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      />
      <main>
        {children}
      </main>
    </div>
    <div>
      <div className={clsx({
          [classes.rootfooter]: true,
        })}>
        <Footer />
      </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
