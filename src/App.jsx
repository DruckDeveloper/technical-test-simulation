// Fetch custom hooks
import useFact from './hooks/useFact'
import useCatImage from './hooks/useCatImage'
// url for generated cat image
import { CAT__PREFIX_URL } from './constants/constants'

const App = () => {
  const fact = useFact()
  const catImageUrl = useCatImage(fact)

  return (
    <main className='app'>
      <h1>App de gatitos</h1>
      {fact ? <h2>{fact}</h2> : <p>Loading</p>}
      {catImageUrl ? <img src={`${CAT__PREFIX_URL}${catImageUrl}`} alt='Imagen de un gato con un mensaje' /> : <p>Loading</p>}
    </main>
  )
}

export default App
