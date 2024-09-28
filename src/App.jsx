import { useState } from 'react'
import './App.css'
import Layout from './components/shared/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import SampleList from './components/sample/SampleList'
function App() {

  return (

    <>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Dashboard/>}></Route>
           <Route path="/sample" element={<SampleList/>}></Route>
  
        </Route>
        

      </Routes>
    </Router>
    </>
  )
}

export default App
