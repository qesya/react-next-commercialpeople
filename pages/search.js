import { useRouter } from 'next/router'
import Head from "next/head"
import Card from "../src/components/Card"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { appLoadInitialData } from "../src/stores/app/data_store"

export default function SearchPage() {

   const dispatch = useDispatch()
   const router = useRouter()

   const [dataLoaded, setDataLoaded] = useState(false);

   const { isbn } = router.query

   const list = useSelector(
      store => store.app.list
   )

   const secondList = list.filter(
      (item) => item.isbn === isbn
   )


   let filteredList = [];
   const map = new Map();
   for (const item of secondList) {
      if (!map.has(item.isbn)) {
         map.set(item.isbn, true);
         filteredList.push(item);
      }
   }

   useEffect(
      () => dispatch(appLoadInitialData('from search')).then(() => {
         setTimeout(() => {
            setDataLoaded(true)
         }, 1000)
      })
      , [])

   return (<>
      <Head>
         <title>App</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center">

         <div className="w-full pb-16 bg-black flex flex-col items-center">
            <label className="text-white text-3xl font-bold my-6"><h5>Search by ISBN</h5></label>
         </div>

         {
            dataLoaded === true &&
            <div className="w-full md:w-5/6 py-10 flex flex-wrap justify-center">
               {
                  filteredList.length > 0 ?
                     filteredList
                        .map((data, i) => (
                           <Card key={i} data={data} />
                        )) :
                     <div className="my-20 text-black font-medium text-xl">No Results are found for that ISBN.</div>
               }
            </div>
         }

         {
            dataLoaded === false &&
            <div className="w-full md:w-5/6 py-10 flex flex-wrap justify-center">
               <div className="my-20 text-black font-medium text-xl">Searching data for the given ISBN...</div>
            </div>
         }
      </div>
   </>
   )

}