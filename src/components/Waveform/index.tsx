import { FC, useEffect, useRef } from 'react'
import { Waveform as WVFRM } from 'tone'
import { useAnimationFrame } from 'framer-motion'
import { useTone } from '../tone/useTone'

export type WaveformProps = Record<never, never>

export const Waveform: FC<WaveformProps> = () => {
  const tone = useTone()
  const waveform = useRef(new WVFRM())
  const div = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    tone.src.connect(waveform.current)
  }, [tone])

  useAnimationFrame(() => {
    if (div.current) {
      // div.current.innerHTML = waveform.current.getValue().join('<br/>')
    }
  })

  return <div style={{ background: 'blue' }} ref={div}></div>
}
