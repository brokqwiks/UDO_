import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import MainStart from './components/MainStart/MainStart'
import About from './components/About/About'
import Community from './components/Community/Community'
import MainContent from './components/main'

function App() {
  return (
    <div className='main'>
      <Header/>
      <MainStart/>
      <MainContent/>
    </div>
  )
}

export default App
