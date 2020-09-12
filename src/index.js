import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { StateProvider } from './Context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-alecefe-9ul0jzgri.vercel.app/graphql'
})

ReactDOM.render(
  <StateProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>
  , document.getElementById('app'))
