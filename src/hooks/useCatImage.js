import { useState, useEffect } from 'react'
import { IMAGE_CAT_API } from '../constants/constants'

const useCatImage = (fact) => {
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const imageUrl = IMAGE_CAT_API(`${fact.split(' ')[0]}`)
    fetch(imageUrl)
      .then(resp => resp.json())
      .then(json => setCatImageUrl(json.url))
  }, [fact])

  return catImageUrl
}

export default useCatImage
