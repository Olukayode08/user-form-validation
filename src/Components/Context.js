import React from 'react'

const FormContext = React.createContext()

const Context = ({children}) => {
  return (
    <>
      <FormContext.Provider>
        {children}
      </FormContext.Provider>
    </>
  )
}

export  {Context, FormContext}
