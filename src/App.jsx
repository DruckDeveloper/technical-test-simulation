// Hooks
import { useState, useEffect } from 'react'
// Constants
import { FACT_CAT_API, CAT__PREFIX_URL } from './constants/constants'

const App = () => {
  const [fact, setFact] = useState('')
  const [catImageUrl, setCatImageUrl] = useState(null)

  useEffect(() => {
    let ignore = false

    const fetchFactData = async () => {
      try {
        const res = await fetch(FACT_CAT_API)
        const json = await res.json()
        setFact(json.fact)

        const firstFactWord = json.fact.split(' ')[0]
        const res2 = await fetch(`https://cataas.com/cat/says/${firstFactWord}?size=50&color=red&json=true`)
        const json2 = await res2.json()
        if (!ignore) {
          setCatImageUrl(json2.url)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchFactData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      {fact ? <h2>{fact}</h2> : <p>Loading</p>}
      {catImageUrl ? <img src={`${CAT__PREFIX_URL}${catImageUrl}`} alt='Imagen de un gato con un mensaje' /> : <p>Loading</p>}
    </>
  )
}

export default App
