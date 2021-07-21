import React from 'react'
import { Typography } from '@material-ui/core'

import TagsInput from './components/TagsInput'
import useStyles from './styles/styles'
import TagsDisplay from './components/TagsDisplay'

import { TagContextProvider } from './context/TagContext'

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <TagContextProvider>
      <div className={classes.appMainContainer}>
        <Typography variant="h2" className={classes.titlePage}>
          Insert all tags
        </Typography>

        <TagsInput />

        <TagsDisplay />
      </div>
    </TagContextProvider>
  )
}

export default App
