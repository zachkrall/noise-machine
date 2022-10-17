import { useTone } from '../components/tone/useTone'
import { Waveform } from '../components/Waveform'

export const PrimaryView = () => {
  const tone = useTone()

  return (
    <div>
      Hello, World.
      <Waveform />
      <button onClick={() => tone.start()}>Start</button>
      <button onClick={() => tone.stop()}>Stop</button>
      <button onClick={() => tone.setType('white')}>white</button>
      <button onClick={() => tone.setType('brown')}>brown</button>
      <button onClick={() => tone.setType('pink')}>pink</button>
    </div>
  )
}
