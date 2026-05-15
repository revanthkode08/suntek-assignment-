import React, { useRef,useEffect } from 'react'

function SearchBar({searchCountry}) {
  const inputRef=useRef(null)
  const debounceRef=useRef(null)
  const searchForCountry=(obj)=>{
    const value = obj.target.value
    // Clear previous timer
    if (debounceRef.current) { clearTimeout(debounceRef.current) }
    // Set new timer
    debounceRef.current = setTimeout(() => { searchCountry(value) }, 500) // wait 500ms
  }
  // used for auto focus
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div className="w-full flex justify-center mt-10 sticky top-0">
      <div className="bg-white shadow-md rounded-xl p-6 w-96">
        <h1 className='text-2xl font-semibold text-gray-700 mb-4 text-center'>Search Countries</h1>
            <input ref={inputRef} type="text" placeholder='Search by Country Name' onChange={searchForCountry} id="" 
            className='w-full
                    px-4 py-2
                    border border-gray-300
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
            '/>
      </div>
    </div>
  )
}

export default SearchBar