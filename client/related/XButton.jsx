import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import { positions } from '@material-ui/system';


const useStyles = makeStyles({
  xButton: {
    edge: -10
  }
});

export default function XButton(props) {
  const classes = useStyles();

  // TODO: add onClick functionality that removes product from outfit

  return (
    <HighlightOffIcon size="small" class={classes.xButton}/>
  );
}

