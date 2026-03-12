import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './COMPONENTS/SearchBar.jsx'
import CountryList from './COMPONENTS/CountryList.jsx'

function App() {
  let [countryList,setCountries]=useState([])
  let [country,setCountry]=useState('all')
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)

  useEffect(()=>{
        async function getData() {
          setLoading(true)
          try{
                let res=await fetch(`https://restcountries.com/v3.1/${country}?fields=name,flags,capital,region,population,cca3`)
                if(!res.ok) throw new Error('Not Found')
                let data=await res.json()
              console.log(data)
                setCountries(data)
          }catch(err){
            setCountries([]) 
            console.log(err.message)
            setError(err.message)
          }finally{
            setLoading(false)
          }
        }
        getData()
  },[country])

  const searchCountry=(countryName)=>{
    if(!countryName) setCountry('all')
    else setCountry(`name/${countryName}`)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center pt-8 text-gray-800">Country Explorer</h1>
      <SearchBar  searchCountry={searchCountry}/>
      <CountryList countryList={countryList}  error={error} loading={loading}/>
    </div>
  )
}

export default App
