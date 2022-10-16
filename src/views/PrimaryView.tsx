import { useTone } from '../components/tone/useTone'

export const PrimaryView = () => {
  const tone = useTone()
  return (
    <div>
      Hello, World.
      <button onClick={() => tone.start()}>Start</button>
      <button onClick={() => tone.stop()}>Stop</button>
      <button onClick={() => tone.setType('white')}>white</button>
      <button onClick={() => tone.setType('brown')}>brown</button>
      <button onClick={() => tone.setType('pink')}>pink</button>
    </div>
  )
}
