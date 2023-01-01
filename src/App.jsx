import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import ResidentList from './components/ResidentList'


function App() {

  const [location, setLocation] = useState()

  const getDataDimension = (idDimension) => {
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
    axios.get(URL)
      .then(res => setLocation((res.data)))
      .catch(err => {
        alert('wrong dimension')
        console.log(err)
      })
  }
  
  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])


  const handleSubmit = event => {
    event.preventDefault()
    const dimesionSearch = event.target.searchValue.value
    getDataDimension(dimesionSearch)
  }
  


  return (
    <div className="App">

      <img className='background_img' src="https://images3.alphacoders.com/812/812062.png" alt="" />

      <h1>Rick and Morty Wiki</h1>

      <form onSubmit={handleSubmit}>
            <input id='searchValue' type="text" placeholder='type a location id'/>
            <button className='form_btn' type='submit'>Search</button>
      </form>

      <LocationInfo location={location}/>
      <ResidentList location={location}/>

    </div>
  )
}

export default App
