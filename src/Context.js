import React, { createContext, useContext, useReducer } from 'react'

const StateContext = createContext()

const initialState = {
  isAuth: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true
      }

    default:
      return state
  }
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
