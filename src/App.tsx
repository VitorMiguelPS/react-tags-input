import React from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'

import TagsInput from './components/TagsInput'
import useStyles from './styles/styles'
import TagsDisplay from './components/TagsDisplay'

import { TagContextProvider } from './context/TagContext'

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <TagContextProvider>
      <Grid container justify="center" alignItems="center" className={classes.appMainContainer}>
        <Paper elevation={3} className={classes.appMainPaper}>
          <Typography variant="h2" className={classes.titlePage}>
            E-mails List
          </Typography>

          <TagsInput />

          <TagsDisplay />
        </Paper>
      </Grid>
    </TagContextProvider>
  )
}

export default App
