import React, { useState } from 'react'
import TagsInput from './components/TagsInput'

interface keyPressObj {
  code: string
  target: { value: string }
  preventDefault: Function
}

const App: React.FC = () => {
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
  const insertInputValue = (e: keyPressObj) => {
    for (let i in registerCharacters) {
      if (e.code === registerCharacters[i]) {
        e.preventDefault()
        setTags([...tags, e.target.value])
      }
    }
  }

  // State variable that store all tags
  const [tags, setTags] = useState<string[]>([
    'contato@rarolabs.com.br',
    'nao-responda@rarolabs.com.br',
  ])

  return (
    <div className="App">
      <TagsInput
        onKeyDown={(e: keyPressObj) => insertInputValue(e)}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        tags={tags}
      />
    </div>
  )
}

export default App
