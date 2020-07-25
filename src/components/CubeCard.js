import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

function CubeCard(props) {
    const [paperMargin, setPaperMargin] = useState('10px');
    const summaryContent = props.summaryContent;

    const useStyles = makeStyles((theme) => ({
        paper:{
            boxShadow: "2px 2px 6px #62DAFB",
            margin: paperMargin
        },
        image:{
            width: "100%",
        },
        workTitle:{
            fontSize:"14px",
            fontFamily: "arial black",
        
        },
        chip: {
            margin: theme.spacing(0.5),
          },
    }));
    const classes = useStyles();

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
            href={summaryContent.triboxLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
                <Tooltip title="商品ページへ行く" placement="top">
                    <img 
                    src={summaryContent.summaryImage}
                    alt="summary"
                    className={classes.image}
                    />
                </Tooltip>
            </Paper>
            <Typography className={classes.workTitle}>{summaryContent.cubeName}</Typography>
            {summaryContent.chipData && summaryContent.chipData.map((data,index) => {
                return (
                    <Chip
                    key={index}
                    label={data}
                    color="primary"
                    className={classes.chip}
                    />
                );
            })}
            
        </div>
    )
}

export default CubeCard;