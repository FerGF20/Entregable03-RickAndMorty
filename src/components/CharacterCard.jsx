import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CharacterCard = ({urlResident}) => {

    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(urlResident)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])

    let residentStatus = ""
    
    if (resident?.status==="Alive") {
        residentStatus = "resident_alive"
    }else if(resident?.status==="Dead"){
        residentStatus = "resident_dead"
    }else{
        residentStatus = "resident_unknown"
    }

  return (
    <article className='character_card'>

        <div className='resident_img_container'>
            <img className='resident_img' src={resident?.image} alt="resident" />
            <h3 className={`${residentStatus} resident_status`}>{resident?.status}</h3>
        </div>

        <div className='resident_info'>
            <h2>{resident?.name}</h2>
            <h4><span>Species: </span>{resident?.species}</h4>
            <h4><span>Origin: </span>{resident?.origin.name}</h4>
            <h4><span>Episodes where appear: </span>{resident?.episode.length}</h4>
        </div>

    </article>
  )
}

export default CharacterCard