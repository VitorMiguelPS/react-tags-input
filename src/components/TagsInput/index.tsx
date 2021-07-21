import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'

import { TagContext } from '../../context/TagContext'

const TagsInput: React.FC = () => {
  const {
    emails, // Context variable that store all tags list
    setEmails, // Context function that update tags list
  } = useContext(TagContext)

  /* Object used to serve as a typed character comparator in function insertInputValue, with the following summary:
   *   NumpadEnter: Enter key pressed located in the number section of keyboard
   *   Enter: Enter key pressed located in the characters section of keyboard
   *   Tab: Tab key pressed
   *   Slash: ';' key pressed
   *   Space: Space bar pressed
   */
  const registerCharacters: object = {
    0: 'NumpadEnter',
    1: 'Tab',
    3: 'Slash',
    4: 'Space',
    5: 'Enter',
  }

  //Function to verify if the email is valid using a regex as comparison method
  const verifyEmail = (email: string) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    return regexEmail.test(email)
  }

  // Function that check all key pressed in input and record a new tag if the key pressed is any of the key in the onject registerCharacters
  const insertInputValue = (e: any) => {
    for (let i in registerCharacters) {
      if (e.code === registerCharacters[i]) {
        e.preventDefault()

        if (verifyEmail(e.target.value)) {
          setEmails([...emails, e.target.value])
          e.target.value = ''
        }
      }
    }
  }

  return (
    <>
      <TextField
        onKeyDown={insertInputValue}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
      />
    </>
  )
}

export default TagsInput
