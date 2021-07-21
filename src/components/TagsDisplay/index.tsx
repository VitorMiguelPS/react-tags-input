import React, { useContext } from 'react'
import { Typography, Grid, Chip } from '@material-ui/core'

import { TagContext } from '../../context/TagContext'
import useStyles from './styles'

const TagsDisplay: React.FC = () => {
  const classes = useStyles()
  const { emails, setEmails } = useContext(TagContext)

  // Function that delete a selected tag using index number assigned in map render function
  const handleDelete = (index: number) => () => {
    let newTagsInstance = emails
    newTagsInstance.splice(index, 1)
    setEmails([...newTagsInstance])
  }

  return (
    <Grid className={classes.tagsBox}>
      {emails.map((item, index) => (
        <Chip key={index} tabIndex={-1} label={item} onDelete={handleDelete(index)} />
      ))}
    </Grid>
  )
}

export default TagsDisplay
