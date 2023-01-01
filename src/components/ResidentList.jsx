import React from 'react'
import CharacterCard from './CharacterCard'

const ResidentList = ({location}) => {
  return (
    <section>
            {
                location?.residents.map(urlResident => (
                    <CharacterCard key={urlResident} urlResident={urlResident}/>
                ))
            }
      </section>
  )
}

export default ResidentList