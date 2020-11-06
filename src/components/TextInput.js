import React, { memo } from "react"


const TextInput = memo(({ label, type = "text", ...props }) => (
   <div className="w-full py-2 flex flex-col">
      <label className="text-sm font-medium text-black py-2">{label}</label>
      <input
         type={type}
         {...props}
         className="padding-input w-full border border-gray-500 hover:border-2 focus:border-2 hover:border-black focus:border-black focus:outline-none rounded-sm"
         autoComplete="off"
         spellCheck="off"
      />
   </div>
))

export default TextInput