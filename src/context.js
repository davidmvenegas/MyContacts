import { React, useState, useContext, createContext } from 'react'

export const useContactsContext = () => useContext(allContactsContext)
export const allContactsContext = createContext()

export const ContactsContextProvider = ({ children }) => {
    const [input, setInput] = useState('')

    const allContactsValues = {
        input,
        setInput,
    }

    return (
        <allContactsContext.Provider value={allContactsValues}>{children}</allContactsContext.Provider>
    )
}