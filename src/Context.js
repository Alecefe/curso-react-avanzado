import React, { createContext, useContext, useReducer } from 'react'

const StateContext = createContext()
const token = window.sessionStorage.getItem('token')

const initialState = {
  isAuth: token
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.sessionStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuth: action.payload
      }

    case 'LOGOUT':
      window.sessionStorage.removeItem('token')
      return {
        ...state,
        isAuth: ''
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
