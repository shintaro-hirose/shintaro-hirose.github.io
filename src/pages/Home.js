import React, {useState, useEffect} from 'react';
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
import WorkCard from '../components/WorkCard';
import CubeCard from '../components/CubeCard';
import QiitaPostCard from '../components/QiitaPostCard';
//work texts
import {workContents} from '../texts/text';
import {cubeContents} from '../texts/cubeContent';
//axios
import axios from 'axios';

const useStyles = makeStyles(() => ({
    logo:{
        width: "250px",
        marginTop: '20px'
    },
    title:{
        fontSize: "30px",
        fontWeight: "bold",
        fontFamily: "arial black",
        marginTop:"40px"
    },
    container:{
        width: "90%",
        maxWidth: '1000px',
        margin: "0 auto",
        paddingBottom: '50px',
    }
}));

function Home() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [qiitaPosts, setQiitaPosts] = useState(null);

    useEffect(() => {
        const getQiitaPosts = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get('https://qiita.com/api/v2/users/shinhiro/items');
                setQiitaPosts(response.data);
            } catch (error) {
                 setIsError(true);
            }
            setIsLoading(false);
        }
        getQiitaPosts();
    }, [])
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
                <Grid container spacing={0}>
                    {workContents.map((data,index) => {
                        return (
                            <Grid item sm={4} xs={12} key={index}>
                                <WorkCard
                                summaryContent={data}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Typography className={classes.title}>
                Qiita Posts
            </Typography>
            <hr size="2" color="#62DAFB"></hr>
            <Box className={classes.container}>
                {!isLoading && qiitaPosts && qiitaPosts.map(data => {
                    return (
                        <QiitaPostCard
                        content={data}
                        key={data.id}
                        />
                    );
                })}
            </Box>
            {/* <Typography className={classes.title}>
                Cube Collection
            </Typography>
            <hr size="2" color="#62DAFB"></hr>
            <br/> */}
            {/* <Box className={classes.container}>
                <Grid container spacing={0}>
                    {cubeContents.map((data,index) => {
                        return (
                            <Grid item sm={2} xs={6} key={index}>
                                <CubeCard
                                summaryContent={data}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box> */}
        </div>
    )
}

export default Home;