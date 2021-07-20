import React, { useEffect, useState, KeyboardEvent } from 'react'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'

const TagsInput: React.FC = () => {
  // State variable that store all tags
  const [tags, setTags] = useState<string[]>(['vitortitom@gmail.com'])

  /* Object used to serve as a typed character comparator in function insertInputValue, with the following summary:
   * NumpadEnter: Enter key pressed located in the number section of keyboard
   * Enter: Enter key pressed located in the characters section of keyboard
   * Tab: Tab key pressed
   * Slash: ';' key pressed
   * Space: Space bar pressed
   */
  const registerCharacters: object = {
    0: 'NumpadEnter',
    1: 'Tab',
    3: 'Slash',
    4: 'Space',
    5: 'Enter',
  }

  // Function that check all key pressed in input and record a new tag if the key pressed is any of the key in the onject registerCharacters
  const insertInputValue = (e: any) => {
    for (let i in registerCharacters) {
      if (e.code === registerCharacters[i]) {
        e.preventDefault()
        setTags([...tags, e.target.value])

        e.target.value = ''
      }
    }
  }

  // Function that delete a selected tag using index number assigned in map render function
  const handleDelete = (index: number) => () => {
    let newTagsInstance = tags
    newTagsInstance.splice(index, 1)
    setTags([...newTagsInstance])
  }

  return (
    <TextField
      onKeyDown={insertInputValue}
      fullWidth
      variant="outlined"
      id="tags"
      name="tags"
      placeholder="add Tags"
      label="tags"
      InputProps={{
        startAdornment: tags.map((item, index) => (
          <Chip key={index} tabIndex={-1} label={item} onDelete={handleDelete(index)} />
        )),
      }}
    />
  )
}

export default TagsInput
