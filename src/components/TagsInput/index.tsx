import React, { useContext } from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import EmailIcon from '../../assets/images/email.png'

import useStyles from './styles'
import { TagContext } from '../../context/TagContext'

const TagsInput: React.FC = () => {
  const classes = useStyles()

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

  //Function to verify if the email is valid using a regex as comparison unit
  const validEmail = (email: string) => {
    const regexEmail: RegExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

    if (regexEmail.test(email)) {
      emails.push(email)
      setEmails([...emails])
    }
  }

  // Function that check all key pressed in input and record a new tag if the key pressed is any of the key in the onject registerCharacters
  const insertInputValue = (e: any) => {
    for (let i in registerCharacters) {
      if (e.code === registerCharacters[i]) {
        e.preventDefault()

        // Verify if the text in the input contains more than one email separeted by ";"
        if (e.target.value.indexOf(';') >= 0) {
          // Remove all ";" and populate a new array
          const arrayEmails: string[] = e.target.value.split(';')

          // Remove all " "(blank space) in the strings of array and call the function that valid email
          arrayEmails.forEach((element: string, index: number) => {
            arrayEmails[index] = element.trim()
            validEmail(arrayEmails[index])
          })
          e.target.value = ''
        } else {
          validEmail(e.target.value)
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
        id="emails"
        name="emails"
        placeholder="Add new e-mail"
        label="emails"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={EmailIcon} className={classes.emailIcon} />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}

export default TagsInput
