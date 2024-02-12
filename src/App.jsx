import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
     <h1>Authentication</h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
