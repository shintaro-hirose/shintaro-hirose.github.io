import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import WorkModal from './WorkModal'



//material-ui

function WorkCard(props) {
    const [open, setOpen] = useState(false);
    const [paperMargin, setPaperMargin] = useState('10px');
    const summaryContent = props.summaryContent;

    const useStyles = makeStyles(() => ({
        paper:{
            boxShadow: "2px 2px 6px #62DAFB",
            margin: paperMargin
        },
        image:{
            width: "100%",
        },
        workTitle:{
            fontSize:"20px",
            fontFamily: "arial black",
        
        }
    }));
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleMouseOver = () => {
        setPaperMargin('5px')
    }

    const handleMouseOut = () => {
        setPaperMargin('10px')
    }

    return (
        <div>
            <Paper 
            className={classes.paper} 
            component={Button} 
            onClick={handleOpen} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
                <img 
                src={summaryContent.summaryImage}
                alt="summary"
                className={classes.image}
                />
            </Paper>
            <Typography className={classes.workTitle}>{summaryContent.workTitle}</Typography>
            <WorkModal
            open={open}
            handleClose={handleClose}
            summaryContent={summaryContent}
            />
        </div>
    )
}

export default WorkCard;