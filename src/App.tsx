import React from 'react'
import { ToneProvider } from './components/tone/context'
import { PrimaryView } from './views/PrimaryView'

function App() {
  return (
    <ToneProvider>
      <PrimaryView />
    </ToneProvider>
  )
}

export default App
