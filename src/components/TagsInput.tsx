import React, { useEffect } from 'react'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'

export default function TagsInput(props) {
  const { onSelectTags, tags, ...other } = props
  const [selectedItem, setSelectedItem] = React.useState([])
  useEffect(() => {
    setSelectedItem(tags)
  }, [tags])

  const handleDelete = (item: string, index: number) => () => {
    let newTagsInstance = tags
    newTagsInstance.splice(index, 1)
  }

  return (
    <TextField
      InputProps={{
        startAdornment: selectedItem.map((item, index) => (
          <Chip key={index} tabIndex={-1} label={item} onDelete={handleDelete(item, index)} />
        )),
      }}
      {...other}
    />
  )
}
TagsInput.defaultProps = {
  tags: [],
}
