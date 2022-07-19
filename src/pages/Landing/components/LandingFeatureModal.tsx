// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import {
  Box, styled, BoxProps, Typography,
  Backdrop, Fade, Modal, TextField, MenuItem, Button, Grid, CircularProgress
} from '@mui/material'

// THIRD PARTY IMPORTS
import { Octokit } from "octokit";
import {APP_DOWNLOAD} from "@navigation/CONSTANTS";
import {Translation} from "@src/i18n";

// PROJECT IMPORTS


// ===========================|| LANDING - FEATURE - MODAL ||=========================== //

const currencies = [
  {
    value: 'watchit-app',
    label: 'Application',
  },
  {
    value: 'watchit-site',
    label: 'Website',
  },
  {
    value: 'watchit-marketplace',
    label: 'Marketplace',
  }
];

const LandingFeatureModal: FC = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const [issueId, setIssueId] = React.useState(null as null | string)
  const [repo, setRepo] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [message, setMessage] = React.useState('')
  const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN ?? ''})

  const handleClose = () => setOpen(false)
  const handleOpen = () => {
    setOpen(true)
    setIssueId(null)
    setRepo('')
    setTitle('')
    setMessage('')
  }

  const sendIssue = async () => {
    if (!repo || !title || !message) return
    console.log("send issue")
    console.log(repo)
    console.log(title)
    console.log(message)
    console.log(process.env.REACT_APP_GIT_TOKEN)
    setIssueId('')

    await octokit.request(`POST /repos/ZorrillosDev/${repo}/issues`, {
      owner: 'ZorrillosDev',
      repo: repo,
      body: message,
      title: title,
      labels: ['feature', 'user_request']
    }).then((res) => {
      console.log("RESPONSE")
      console.log(res)
      setIssueId(res.data.number ?? null)
    })
  }

  return (
    <>
      <Typography
        color={(theme) => Object.is(theme.palette.mode, 'light') ? 'primary.light' : 'text.primary'}
        variant={'body2'} onClick={handleOpen} sx={{ opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
      >
        Suggest a feature
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ open }
        onClose={ handleClose }
        closeAfterTransition
        BackdropComponent={ Backdrop }
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <LandingFeatureModalContent>
            {
              issueId === '' ? (
                <LandingFeatureModalLoader>
                  <CircularProgress />
                </LandingFeatureModalLoader>
              ) : <></>
            }
            {
              !issueId ? (
                <Grid container spacing={3} justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <Typography id="transition-modal-title" variant="h4" component="h2" textAlign='center'>
                      Suggest a feature
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="title" label="Title" value={title} fullWidth
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="message" label="Message" value={message} fullWidth
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-select-currency"
                      select label="Repo" value={repo} fullWidth
                      onChange={(e) => setRepo(e.target.value)}
                      helperText="Please select the project where "
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color='secondary' variant='contained' size='large'
                      fullWidth onClick={sendIssue} disableElevation
                    >
                      Send Feature
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={3} justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                    <Typography variant="h4" textAlign='center' color={(theme) => theme.palette.success.main}>
                      Feature added Successfully
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4" textAlign='center'>
                      Your feature ID is <strong>{issueId}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color='success' variant='contained' size='large'
                      fullWidth onClick={handleClose} disableElevation
                    >
                      Done
                    </Button>
                  </Grid>
                </Grid>
              )
            }
          </LandingFeatureModalContent>
        </Fade>
      </Modal>
    </>
  )
}

export const LandingFeatureModalContent = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '1rem',
  borderRadius: '1rem',
  width: '20rem',
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none !important',
  outline: 'none !important'
}))

export const LandingFeatureModalLoader = styled(Box)<BoxProps>(( ) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: 10,
  backgroundColor: 'rgba(0,0,0,0.5)'
}))

export default LandingFeatureModal
