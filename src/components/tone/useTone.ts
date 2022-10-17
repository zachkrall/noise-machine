import { useContext, useState } from 'react'
import { toneContext } from './context'

export const useTone = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const tone = useContext(toneContext)

  tone.volume.value = -10
  tone.playbackRate = 1

  console.log('init state', tone)

  const pushState = () => {
    const playing = tone.state !== 'stopped'
    setIsPlaying(() => {
      return playing
    })
    window.ipcRenderer.send(playing ? 'PLAYING' : 'STOPPED')
  }

  const start = () => {
    console.log('starting tone', tone)
    tone.start()
    pushState()
  }

  const stop = () => {
    console.log('stopping tone', tone)
    tone.stop()
    pushState()
  }

  const setVolume = (volume: number) => {
    tone.volume.value = volume
    pushState()
  }

  const setType = (type: 'brown' | 'pink' | 'white') => {
    tone.type = type
    pushState()
  }

  return {
    start,
    stop,
    setVolume,
    setType,
    src: tone,

    isPlaying
  }
}
