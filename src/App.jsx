import { useState } from 'react'
import "../src/App.css"
import Router from './Routers/Routers'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
      <Router/> 
      </BrowserRouter>
    </>
  )
}

export default App
