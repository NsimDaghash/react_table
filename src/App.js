import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'

function App() {
  return (
    <div className='App'>
      <BasicTable />
      <SortingTable />
    </div>
  )
}

export default App
