import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { appSetSearch } from "../stores/app/action"


const Search = () => {

   const dispatch = useDispatch()
   const [debounce, setDebounce] = useState("")

   useEffect(() => {
      const handler = setTimeout(() => dispatch(appSetSearch(debounce)), 700)
      return () => clearTimeout(handler)
   }, [debounce, dispatch])

   const handleSearch = ({ target }) => setDebounce(target.value)

   return (
      <div className="w-full md:w-2/5 mr-0 md:mr-4 flex flex-col">
         <label className="text-sm font-medium text-black py-2">Search ISBN / Authors</label>
         <input
            type="text"
            value={debounce}
            onChange={handleSearch}
            placeholder="Search isbn / author ..."
            className="padding-input w-full border border-gray-500 hover:border-2 focus:border-2 hover:border-black focus:border-black focus:outline-none rounded-sm"
            autoFocus
         />
      </div>
   )
}

export default Search