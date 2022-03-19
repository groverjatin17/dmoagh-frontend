import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {useTranslation} from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MobileMenuBar({ handleMobileMenuClose }) {
  const classes = useStyles();
  const [expandedPanel, setPanelState] = useState(null);
  const {t} = useTranslation();
  const menu = useSelector((state) => state.homepageReducers.menu);

  const handleClick = (panelId) => {
    if (panelId === expandedPanel) {
      setPanelState(null);
    } else {
      setPanelState(panelId);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {menu &&
        menu.map((menuItem) => {
          if (menuItem.subItems.length > 0) {
            return (
              <div key={menuItem.menuItemId}>
                <ListItem
                  button
                  onClick={() => handleClick(menuItem.menuItemId)}
                >
                  <ListItemText primary={t(menuItem.menuItemTitle)} />
                  {expandedPanel === menuItem.menuItemId ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={expandedPanel === menuItem.menuItemId}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {menuItem.subItems.map((subItem) => (
                      <Link
                        to={subItem.subItemLink}
                        key={subItem.subItemId}
                        onClick={handleMobileMenuClose}
                      >
                        <ListItem button className={classes.nested}>
                          <ListItemText primary={t(subItem.subItemTitle)} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          }
          return (
            <Link
              to={menuItem.menuLink}
              key={menuItem.menuItemId}
              onClick={handleMobileMenuClose}
            >
              <ListItem button>
                <ListItemText primary={t(menuItem.menuItemTitle)} />
              </ListItem>
            </Link>
          );
        })}
    </List>
  );
}
