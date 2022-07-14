import { useState, useEffect } from 'react'
import './App.css'
import EmptySlots from './emptySlot'
import MoleContainer from './moleContainer'
import Mole from './mole'

const App =() => {


  return (
    <div className="App">
<MoleContainer />
<EmptySlots />
<Mole />
    </div>
  )
}

export default App
