import React from "react"
import PlayersList from "./playerslist"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Player List</h1>
      <PlayersList />
    </div>
  )
}

export default App
