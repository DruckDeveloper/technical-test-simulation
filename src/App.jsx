// Hooks
import { useState, useEffect } from 'react'
// Constants
import { FACT_CAT_API, CAT__PREFIX_URL } from './constants/constants'

const App = () => {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    fetch(FACT_CAT_API)
      .then(res => res.json())
      .then(json => setFact(json.fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const imageUrl = `https://cataas.com/cat/says/${fact.split(' ')[0]}?size=50&color=red&json=true`
    fetch(imageUrl)
      .then(resp => resp.json())
      .then(json => setCatImageUrl(json.url))
  }, [fact])

  return (
    <>
      <h1>App de gatitos</h1>
      {fact ? <h2>{fact}</h2> : <p>Loading</p>}
      {catImageUrl ? <img src={`${CAT__PREFIX_URL}${catImageUrl}`} alt='Imagen de un gato con un mensaje' /> : <p>Loading</p>}
    </>
  )
}

export default App