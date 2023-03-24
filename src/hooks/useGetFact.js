import { useState, useEffect } from 'react'
import { FACT_CAT_API } from '../constants/constants'

const useGetFact = async () => {
  const [fact, setFact] = useState('')

  const fetchFact = async () => {
    try {
      const response = await fetch(FACT_CAT_API)
      const data = await response.json()
      await setFact(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFact()
  }, [])

  const fistFactWord = fact.split(' '[0])
  return { fact, fistFactWord }
}

export { useGetFact }
