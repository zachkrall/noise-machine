import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const app = document.querySelector<HTMLDivElement>('div#app')

if (app) {
  const root = createRoot(app)
  root.render(<App />)
} else {
  document.body.innerHTML = `<h1>an error occured</h1>`
}
