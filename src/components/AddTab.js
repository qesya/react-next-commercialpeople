import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { jsonToCSV } from "react-papaparse"

import TextInput from "./TextInput"
import Select from "./Select"

import { appAddList } from "../stores/app/action"

import { handleSubmitSaveExport } from "../services/export"

const AddTab = () => {

   const dispatch = useDispatch()
   const [kind, setKind] = useState("")
   const [form, setForm] = useState({
      title: "",
      isbn: "",
      authors: "",
      description: "",
      publishedAt: "",
   })
   const kindsList = [
      { id: "book", label: "book" },
      { id: "magazine", label: "magazine" },
   ]
   const book = [
      { name: "title", label: "Book Title", placeholder: "Enter Title" },
      { name: "isbn", label: "Book ISBN", placeholder: "Enter ISBN" },
      { name: "authors", label: "Book Author", placeholder: "Enter Author" },
      { name: "description", label: "Book Description", placeholder: "Enter Description" },
   ]

   const magazine = [
      { name: "title", label: "Magazine Title", placeholder: "Enter Title" },
      { name: "isbn", label: "Magazine ISBN", placeholder: "Enter ISBN" },
      { name: "authors", label: "Magazine Author", placeholder: "Enter Author" },
      { name: "publishedAt", label: "Published Date", type: "date" },
   ]

   const kindForm = { book, magazine }

   const handleChangeKind = value => setKind(value)

   const handleChangeText = ({ target }) => setForm(state => ({ ...state, [target.name]: target.value }))

   return (
      <div className="p-10 flex flex-col">
         <div className="flex flex-col items-center">
            <div className="w-full md:w-2/3 p-0 md:px-2 self-start">
               <Select
                  label="Select the kind you want to add"
                  items={kindsList}
                  itemId="id"
                  itemLabel="label"
                  onChange={handleChangeKind}
                  placeholder="Select kind"
               />
            </div>

            <div className="py-8 flex flex-wrap ">
               {kindForm[kind] && kindForm[kind].map(field => (
                  <div key={field.name} className="w-full md:w-1/2 p-0 md:p-2">
                     <TextInput
                        label={field.label}
                        value={form[field.name]}
                        onChange={handleChangeText}
                        {...field}
                     />
                  </div>
               ))}
            </div>
            <button
               disabled={!kind}
               className={`${kind ? "bg-gray-800 hover:bg-black" : "bg-gray-600 cursor-not-allowed"} w-64 px-4 py-3 text-white text-sm font-bold focus:outline-none`}
               onClick={() => handleSubmitSaveExport(dispatch, kind, form, appAddList)}
               data-testid="save-button"
            >
               Save & Export to CSV
            </button>
         </div>
      </div>
   )
}

export default AddTab