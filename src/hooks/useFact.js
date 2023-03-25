import { useState, useEffect } from 'react'
import { FACT_CAT_API } from '../constants/constants'

const useFact = () => {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(FACT_CAT_API)
      .then(res => res.json())
      .then(json => setFact(json.fact))
  }, [])

  return fact
}

export default useFact
