import React from 'react'
import Navbar from "../src/components/Navbar"
import './app.css'
import Card from "../src/components/Card"
import data from "../src/components/data.js"






function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      
  />)})

  return (<div>
    <Navbar/>

      
      {cards}
    

    
    </div>
  )
}

export default App