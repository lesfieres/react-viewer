import React, { useState } from 'react'; // eslint-disable-line no-unused-vars, prop-types
import AssignmentIcon from '@material-ui/icons/Assignment';
import PropTypes from 'prop-types';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core';

export const DisplayCardType = Object.freeze({
  List: 'DISPLAY_CARD_TYPE_LIST',
  SmallCard: 'DISPLAY_CARD_TYPE_SMALL_CARD',
  BigCard: 'DISPLAY_CARD_TYPE_BIG_CARD',
});

const styles = {
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  checkboxRoot: {
    padding: 8,
    margin: 6,
  },
};

const prepareDisplayTypes = displayType => {
  const displayTypes = [false, false, false];
  switch (displayType) {
    case DisplayCardType.List:
      displayTypes[0] = true;
      break;
    case DisplayCardType.SmallCard:
      displayTypes[1] = true;
      break;
    case DisplayCardType.BigCard:
    default:
      displayTypes[2] = true;
      break;
  }
  return displayTypes;
};

const ItemDisplaySelect = props => {
  const { classes } = props;

  const displayTypes = [
    DisplayCardType.List,
    DisplayCardType.SmallCard,
    DisplayCardType.BigCard,
  ];
  const icons = [<MenuIcon />, <AppsIcon />, <AssignmentIcon />];
  const buttonsState = prepareDisplayTypes(props.displayType);

  return (
    <div className={classes.buttonBox}>
      {icons.map((icon, index) => (
        <MuiCheckbox
          key={index}
          classes={{
            root: classes.checkboxRoot,
            checked: classes.checkboxChecked,
          }}
          icon={icon}
          checkedIcon={icon}
          checked={buttonsState[index]}
          onChange={() => {
            props.setCurrentDisplayCardType(displayTypes[index]);
          }}
        />
      ))}
    </div>
  );
};

ItemDisplaySelect.propTypes = {
  displayType: PropTypes.string.isRequired,
  setCurrentDisplayCardType: PropTypes.func.isRequired,
};

export default withStyles(styles)(ItemDisplaySelect);
