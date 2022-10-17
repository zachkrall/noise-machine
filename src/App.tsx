import { ToneProvider } from './components/tone/context'
import { applyGlobalStyles } from './theme'
import { PrimaryView } from './views/PrimaryView'

function App() {
  applyGlobalStyles()

  return (
    <ToneProvider>
      <PrimaryView />
    </ToneProvider>
  )
}

export default App
