import { createContext, FC, ReactNode } from 'react'
import { Noise } from 'tone'

export const toneContext = createContext(new Noise().toDestination())

export type ToneProviderProps = {
  children?: ReactNode
}

export const ToneProvider: FC<ToneProviderProps> = ({ children }) => {
  const t = new Noise().toDestination()

  return <toneContext.Provider value={t}>{children}</toneContext.Provider>
}
