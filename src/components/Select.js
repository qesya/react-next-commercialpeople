import React, { memo, useState } from "react"


const Select = memo(props => {

   const [isOpen, setOpen] = useState(false)
   const [label, setLabel] = useState({
      value: "",
      display: "",
   })

   const handleToggleOpen = () => setOpen(state => !state)

   const handleClearAuthors = () => {
      setLabel({ value: "", display: "" })
      props.onChange("")
   }

   return (
      <div className="w-full relative flex flex-col">
         <label className="text-sm font-medium text-black py-2">{props.label}</label>
         <button type="button" onClick={handleToggleOpen} className="padding-input w-full text-left border border-gray-500 hover:border-2 focus:border-2 hover:border-black focus:border-black focus:outline-none rounded-sm">
            {label.value ?
               <div className="flex justify-between"><span>{label.display}</span><span onClick={handleClearAuthors}>&times;</span></div> :
               <span className="text-gray-600">{props.placeholder}</span>}
         </button>
         {(isOpen || props.isOpen) && <Options setLabel={setLabel} setOpen={setOpen} {...props} />}
      </div>
   )
})

const Options = memo(({ setLabel, setOpen, items, itemId, itemLabel, onChange }) => {

   const display = data => typeof itemLabel === "function" ? itemLabel(data) : data[itemLabel]
   const handleClick = data => {
      setLabel({ value: data[itemId], display: display(data) })
      setOpen(false)
      onChange(data[itemId])
   }

   return (
      <div className="absolute z-50 left-0 top-0 w-full mt-20 bg-white border border-t-0 border-gray-600 shadow-lg">
         <ul>
            {items &&
               items.map((data, i) => (
                  <li
                     key={i}
                     onClick={() => handleClick(data)}
                     className="px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 border-b border-gray-200 cursor-pointer"
                  >
                     {display(data)}</li>
               ))}
         </ul>
      </div>
   )
})

export default Select