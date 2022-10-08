import React from 'react'
import { Helmet } from 'react-helmet'
import Routes from './routes'

function App() {
  return (
    <>
      <Helmet>
        <html lang="en-GB" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Silva Digital - Genesis</title>
      </Helmet>
      <Routes />
    </>
  )
}

export default App
