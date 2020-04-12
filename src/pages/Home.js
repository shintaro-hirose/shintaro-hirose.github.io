import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
//images
import logo from '../images/portfolio-logo-2.svg';

//material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

//components
import WorkCard from '../components/WorkCard'

//work texts
import {workContents} from '../texts/text'

const useStyles = makeStyles(() => ({
    logo:{
        width: "250px",
    },
    title:{
        fontSize: "30px",
        fontWeight: "bold",
        fontFamily: "arial black",
        marginTop:"40px"
    },
    container:{
        maxWidth: "1000px",
        margin: "20px auto 0 auto"
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.container} display="flex">
                <Box flex={1}>
                    <img 
                    src={logo}
                    alt="logo"
                    className={classes.logo}
                    />
                </Box>
                <Tooltip title="Github" placement="left">
                    <Button
                    href="https://github.com/shintaro-hirose?tab=repositories" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: "white"}}
                    >
                        <GitHubIcon
                        />
                    </Button>
                </Tooltip>
            </Box>
            <Typography className={classes.title}>
                My Projects
            </Typography>
            <hr size="2" color="#62DAFB"></hr>
            <Box className={classes.container}>
                <Grid container spacing={10}>
                    <Grid item sm={4} xs={12}>
                        <WorkCard 
                        summaryContent={workContents[0]}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <WorkCard 
                        summaryContent={workContents[1]}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <WorkCard
                        summaryContent={workContents[2]}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item sm={4} xs={12}>
                        <WorkCard 
                        summaryContent={workContents[3]}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <WorkCard 
                        summaryContent={workContents[4]}
                        />
                    </Grid>
                    {/* <Grid item sm={4} xs={12}>
                        <WorkCard
                        summaryContent={{
                            summaryImage: image3,
                            workTitle: "React Number Guess"
                        }}
                        />
                    </Grid> */}
                </Grid>
            </Box>
        </div>
    )
}

export default Home;