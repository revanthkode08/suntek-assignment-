import React from 'react'

function CountryCard({countryObj}) {
    console.log('each country')
    console.log(countryObj)
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-4 w-full">
            <img src={`${countryObj.flags.png}`} alt={`${countryObj.flags.alt}`} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
                <p className="text-lg font-bold text-gray-800">Name :{countryObj.name.common}</p>
                <p className="text-sm text-gray-600">Capital: {countryObj.capital?.[0] || "N/A"}</p>
                <p className="text-sm text-gray-600">Population :{countryObj.population}</p>
                <p className="text-sm text-gray-600">Region :{countryObj.region}</p>
            </div>
        </div>
  )
}

export default CountryCard