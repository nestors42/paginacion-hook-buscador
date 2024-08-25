import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CardPersonaje = () => {
    const{personajeId} = useLoaderData()
  return (
    <div className='container mt-4'>
        <div className='row justify-content-center'>
            <div className='card col-4' style={{width: '18rem !important'}}>
                <img src={personajeId.image} alt={personajeId.image}/>
                <div className='card-body'>
                    <h5>{personajeId.name}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPersonaje