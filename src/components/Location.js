import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Residents from './Residents';
import header from '../img/headerr.jpg'
import bkgrInitial from '../img/charge.gif'

const Location = () => {

    const [loading, setLoading] = useState(false)
    const [location, setLocation ] = useState({})
    const [id, setId] = useState("")
    const [bkgr, setBkgr] = useState(bkgrInitial)

    useEffect(() =>{
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
                setLoading(true)
                setBkgr(null)
            
    },[])

    const search = e =>{
        e.preventDefault()
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data))
            setId("")
    }
    useEffect( () =>{
        document.body.style = `background: url(${bkgr})`
    },[bkgr])

    return (
    <div>  
        {
            loading && (
                <>                
                    <div className='body'>

                        <header>
                            <img src={header} alt="" />
                        </header>

                        <div>
                            <h1>Rick and Morty Wiki</h1>
                        </div>

                        <form className='input' onSubmit={search}>
                            <input
                                
                                type="text" 
                                value={id} 
                                onChange={e => setId(e.target.value)}
                                placeholder= "Search for ID"
                            />
                            <button className='button' type='submit'>
                                Search
                            </button>
                        </form>

                        <div className='location w '>
                            <h2>{location.name}</h2>
                            <div>
                                <p><b>Type: </b>{location.type}</p>
                                <p><b>Dimension: </b>{location.dimension}</p>
                                <p><b>Residents: </b>{location.residents?.length}</p>
                                <p><b>ID: </b>{location.id}</p>
                                
                            </div>
                        </div>

                        <div className='w'>
                            <h3>Residents</h3>
                        </div>

                        <div className='grid'>
                            {location.residents?.map( resident => (
                                <Residents resident={resident} key={resident}/>
                            ))}
                        </div>
                    </div>
                </>
            )
        }

        
    </div>  
    );
};

export default Location;