
import React, { useEffect, useState } from 'react'
import Card from './Card'


export default function Countries({search}) {
  const [countriesData,setCountriesData] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountriesData(data))
  },[])

 const filteredData = countriesData.filter((country)=>{return country.name.common
                                    .toLowerCase()
                                    .includes(search)}
 )
  
  return (
    <>
   
    <div className="countries-container">
      {filteredData.map((country) => {
        return (
          <Card
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
    </>
  )
}
