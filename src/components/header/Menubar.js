import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import CloseIcon from '../../assets/icons/close.svg';
import MobileMenuBar from './MobileMenuBar';
import { menuItems } from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    display: 'none',
    color: '#001653',
    textTransform: 'uppercase',
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Menubar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const menuItemsValue = menuItems();
    dispatch({
      type: 'SET_MENU',
      payload: menuItemsValue,
    });
  }, [dispatch]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menu = useSelector((state) => state.homepageReducers.menu);
  const submenu = useSelector((state) => state.homepageReducers.submenu);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    if (mobileMoreAnchorEl) {
      handleMobileMenuClose(null);
    } else {
      setMobileMoreAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const renderMenu = submenu && submenu.length > 0 && (
    <div>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {submenu.length > 0 &&
          submenu.map((subItem) => (
            <Link
              to={subItem.subItemLink}
              key={subItem.subItemId}
              onClick={() => {
                dispatch({
                  type: 'CURRENT_SUBMENU',
                  payload: null,
                });
              }}
            >
              <StyledMenuItem>
                <ListItemText primary={t(subItem.subItemTitle)} />
              </StyledMenuItem>
            </Link>
          ))}
      </Menu>
    </div>
  );

  const renderMobileMenu = isMobileMenuOpen && (
    <MobileMenuBar handleMobileMenuClose={handleMobileMenuClose} />
  );

  return (
    <>
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar className="flex justify-center">
            <div className={classes.sectionDesktop}>
              {menu &&
                menu.map((menuItem) => (
                  <button
                    key={menuItem.menuItemId}
                    type="button"
                    className="focus:outline-none"
                    onClick={(e) => {
                      dispatch({
                        type: 'CURRENT_SUBMENU',
                        payload: menuItem.subItems,
                      });
                      if (menuItem.menuLink) {
                        navigate(menuItem.menuLink);
                      }
                      handleProfileMenuOpen(e);
                    }}
                  >
                    <Typography className={classes.title} variant="h6" noWrap>
                      {t(menuItem.menuItemTitle)}
                    </Typography>
                  </button>
                ))}
            </div>
            <div className={classes.sectionMobile}>
              <span
                onClick={handleMobileMenuOpen}
                color="inherit"
                className="outline-none"
                role="button"
                onKeyDown={() => {}}
                tabIndex={0}
              >
                {!mobileMoreAnchorEl ? (
                  <img
                    src={MenuIcon}
                    alt="menu-icon"
                    className="h-10 outline-none"
                  />
                ) : (
                  <img
                    src={CloseIcon}
                    alt="menu-icon"
                    className="h-10 outline-none"
                  />
                )}
              </span>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-500" />
    </>
  );
}
