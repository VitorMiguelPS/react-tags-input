import React, { createContext, useState, ReactNode } from 'react'

// Interface that will set type of variables used as context
interface TagList {
  emails: string[]
  setEmails: Function
}

// Creating instance to context and setting types using interface TagList
const TagContext = createContext<TagList>({ emails: [], setEmails: null })

/*Context function responsable to main assignments of context that are:
 * create the viables "emails" and that will store and register a list of registered emails
 * create a function "setEmails" that will register new emails
 * return the context information to other components
 */
const TagContextProvider = ({ children }: { children: ReactNode }) => {
  const [emails, setEmails] = useState<string[]>(['vitortitom@gmail.com'])

  return <TagContext.Provider value={{ emails, setEmails }}>{children}</TagContext.Provider>
}

export { TagContext, TagContextProvider }
