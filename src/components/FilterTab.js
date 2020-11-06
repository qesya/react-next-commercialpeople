import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Search from "./Search"
import Select from "./Select"

import { appSetSearch } from "../stores/app/action"


const FilterTab = () => {

   const dispatch = useDispatch()
   const { authors } = useSelector(store => store.app)

   const handleSelectAuthor = value => dispatch(appSetSearch(value))

   return (
      <div className="p-10 flex flex-col items-center">
         <div className="w-full flex flex-col md:flex-row">
            <Search />
            <div className="w-full md:w-3/5">
               <Select
                  label="Filter all by Author"
                  items={authors}
                  itemId="email"
                  itemLabel={data => `${data.email} (${data.firstname} ${data.lastname})`}
                  onChange={handleSelectAuthor}
                  placeholder="Filter by authors..."
               />
            </div>
         </div>
      </div>
   )
}

export default FilterTab