import React, { memo } from "react"
import Link from 'next/link'

const Row = memo(({ data }) => {

   const classNames = {
      default: "text-md text-gray-600",
      title: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
      isbn: "text-md text-gray-600 underline",
      description: "mt-6 text-md text-gray-800",
   }

   const blacklistKey = [
      "title",
      "description"
   ]

   return (
      <div className="flex">
         {blacklistKey.indexOf(data.key) === -1 && <div className="text-lg font-bold mr-4">{data.key}: </div>}
         {data.key === "isbn" ?
            <Link href={`/search?isbn=${data.value}`}>
               <a className={classNames[data.key]}>{data.value}</a>
            </Link> :
            <div className={classNames[data.key] || classNames.default}>{data.value}</div>
         }
      </div>
   )
})

export default Row