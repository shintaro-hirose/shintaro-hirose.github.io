import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//material-ui
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
//icons
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: "rgb(40, 44, 52, 0.9)",
    maxWidth: "80%",
    textAlign: "center",
    color: "#fff",
    outline: 'none',
    padding:"10px"
  },
  title:{
    fontSize: "30px",
    fontFamily: "arial black",
    display: "inline",
    flex: 1,
  },
  content:{
    fontSize: "16px",
  },
  image:{
    width: "90%",
    [theme.breakpoints.down('xs')]: {
      display: 'none'

    },
  },
  closeButton:{
    fontSize: "35px",
    color: "#fff"
  },
  explain:{
    fontSize: "18px",
    fontWeight: "bold"
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function WorkModal(props) {
  const classes = useStyles();
  const open = props.open;
  const handleClose = props.handleClose;
  const summaryContent = props.summaryContent;


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box display="flex" textAlign="center">
              <Typography className={classes.title}>{summaryContent.workTitle}</Typography>
              <Button marginright="8px" onClick={handleClose}>
                <CloseIcon className={classes.closeButton} />
              </Button>
            </Box>
            
            <hr size="2" ></hr>
            <Grid container spacing={1}>
              <Grid item sm={6} xs={12}>
              <img 
                src={summaryContent.summaryImage}
                alt="summary"
                className={classes.image}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box textAlign="left">
                <Typography className={classes.explain}>
                    {summaryContent.workExplain}
                  </Typography>
                  <br />
                  <br />
                  {summaryContent.chipData.map((data,index) => {
                    return (
                      <Chip
                        key={index}
                        label={data}
                        className={classes.chip}
                      />
                    );
                  })}
                  <br />        
                  <br />
                  {
                    summaryContent.char1 === "" ? (
                      null
                    ) : (
                  <Typography className={classes.content}>
                    ・　{summaryContent.char1}
                  </Typography>
                    )
                  }     
                  {
                    summaryContent.char2 === "" ? (
                      null
                    ) : (
                  <Typography className={classes.content}>
                    ・　{summaryContent.char2}
                  </Typography>
                    )
                  }
                  {
                    summaryContent.char3 === "" ? (
                      null
                    ) : (
                  <Typography className={classes.content}>
                    ・　{summaryContent.char3}
                  </Typography>
                    )
                  }     
                </Box>
                <Box marginTop="40px">
                <Grid container spacing={1} >
                  <Grid item sm={6} xs={12}>
                    <Box>
                      <Button 
                      href={summaryContent.demoUrl}
                      size="large"
                      variant="contained"
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <LanguageIcon />
                        {`　サイトを見る`}
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box>
                      <Button 
                      href={summaryContent.githubUrl}
                      variant="contained"
                      color="primary"
                      size="large"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <GitHubIcon />
                        {`　ソースコードを見る`}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}