import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './components/Lista.jsx'
// import TestUseState from '../src/excercises/class2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TestUseState /> */}
    <Lista />
  </React.StrictMode>,
)