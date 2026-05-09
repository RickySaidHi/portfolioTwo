import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);


  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2500)

    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <>
     {isLoading && (
        <LoadingScreen fading={isFading} />
      )}
      <section id="center">
        <p className="text-6xl text-red-300">Welcome to the portfolio</p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
