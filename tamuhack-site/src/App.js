import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
        This is the new tamuhack site.
    </div>
  </Router>
)

export default hot(module)(App)
