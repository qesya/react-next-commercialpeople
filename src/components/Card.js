import React, { memo } from "react"

import DataRow from "./DataRow"

const Card = memo(({ data }) => (
   <div className="w-full md:w-1/2 p-4">
      <div className="min-h-full bg-white p-8 rounded-sm shadow hover:shadow-lg transition-all duration-300">
         {Object.entries(data).map(([key, value]) => (
            key !== "kind" &&
            <DataRow key={key} data={{ key, value }} />
         ))}
      </div>
   </div>
))

export default Card