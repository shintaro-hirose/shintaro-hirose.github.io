import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
      <Fab aria-label="Expand" className={classes.fab} size='large' onClick={scrollTop}>
        <UpIcon />
      </Fab>
  );
}
