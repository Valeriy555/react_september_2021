import React, {useEffect, useState} from "react";


export  default function Flights () {

    let [flightList,setFlightsList] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFlightsList (flights.filter(flight => flight.launch_year !== '2020'))

            });
    },[])

    return(
        <div>

            {
                flightList.map(value => <Flights key={value.flight_number}/> )
            }

        </div>
    )
}