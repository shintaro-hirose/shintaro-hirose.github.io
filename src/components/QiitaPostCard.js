import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

import lgtmImage from '../images/lgtm.svg';

const useStyles = makeStyles((theme) => ({
    paper:{
        textAlign: 'left',
        margin: '20px auto',
        backgroundColor: "#3A3F49",
        padding: "8px"
    },
    title:{
        fontSize:"21px",
        margin: "10px 0"
    },
    lgtm: {
        display: 'inline',
        margin: "0 10px"
    },
    date:{
        fontSize:  "13px",
        color: "#e0e0e0",
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    likeCount:{
        display: 'inline',
        fontSize: "15px",
    },
}));

export default function QiitaPostCard(props) {
    const content = props.content;
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.date}>
                {content.created_at.slice(0,10)}
            </Typography>
            {content.tags && content.tags.map(data => {
                return (
                    <Chip
                    key={data.name}
                    label={data.name}
                    color="inherit"
                    size="small"
                    className={classes.chip}
                    />
                );
            })}
            <Typography className={classes.title}>
                <Link 
                href={content.url}
                target="_blank" 
                rel="noopener noreferrer"
                color="textPrimary"
                >
                    {content.title}
                </Link>
            </Typography>
            <img
            src={lgtmImage}
            alt="summary"
            className={classes.lgtm}
            />
            <Typography className={classes.likeCount}>
                {content.likes_count}
            </Typography>
        </Paper>
    )
}
