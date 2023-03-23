import { useState, useEffect } from 'react'
import { FACT_CAT_API, IMAGE_CAT_API } from './constants/constants'

const App = () => {
  const [fact, setFact] = useState('Hello mdk world')

  useEffect(() => {
    fetch(FACT_CAT_API)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  console.log(fact)

  return (
    <>
      <h2>App de gatitos</h2>
      <p>{fact}</p>
    </>
  )
}
export default App
