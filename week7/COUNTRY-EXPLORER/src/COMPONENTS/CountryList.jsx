import React from 'react'
import CountryCard from './CountryCard.jsx'

function CountryList({countryList,error,loading}) {
    if(loading) return <p className='text-center text-lg mt-10 text-gray-600'>Loading.......</p>
    if(error!==null) return <p className='text-center text-lg mt-10 text-red-500'> {error}</p>
    if (!countryList || countryList.length === 0)
        return <p className="text-center text-lg mt-10 text-gray-500">No countries found</p>
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Countries</h1>
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6">
        {countryList.map((countryObj) => ( <CountryCard key={countryObj.cca3} countryObj={countryObj} />))}
      </div>
    </div>
  )
}

export default CountryList