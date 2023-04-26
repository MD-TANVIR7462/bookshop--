import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
export const context = createContext()

function App() {

 
  const contaxtFunc =22
  return (
  
<context.Provider value={contaxtFunc}>
<div className="App">
      <Nav></Nav>
      <Outlet></Outlet>
     
    </div>
</context.Provider>
  )
}

export default App
