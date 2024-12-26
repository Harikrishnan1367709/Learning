import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from './components/ui/provider'
import LandingPage from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <LandingPage />
    </Provider>
  </StrictMode>,
)
