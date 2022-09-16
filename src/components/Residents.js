import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({ resident }) => {

    const [residents, setResidents] = useState({})
    const [status, setStatus] = useState("green")

    useEffect(() => {
        axios.get(resident)
            .then(res => {
                setResidents(res.data)
                setStatus(res.data.status)
            })
    },[resident])

    console.log(status);

    let color = ["circle"]

        if(status === "Alive"){
            color.push("green")
        } else if(status === "Dead"){
            color.push("red")
        } else {
            color.push("yellow")
        }

    // c
    return (
            <div className='card'>

                <div>
                    <img src={residents.image} alt="" />
                </div>

                <div className='name'>
                    <h2>{residents.name}</h2>
                </div>

                <div className='info'>

                    <div className='status'>
                        <div className={color.join(' ')}></div>
                        
                        <h4>Status:</h4>
                        <p>{residents.status}</p>
                    </div>

                    <div className='details'>
                        <h4>Gender:</h4>
                        <p>{residents.gender}</p>
                        <h4>Raza:</h4>
                        <p>{residents.species}</p>
                        <h4>Origin:</h4>
                        <p>{residents.location?.name}</p>
                        <h4>Type:</h4>
                        <p>{residents.type}</p>
                    </div>

                </div>
            </div>
    );
};

export default Residents;