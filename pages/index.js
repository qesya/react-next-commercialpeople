import Head from "next/head"
import React, { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import Card from "../src/components/Card"
import FilterTab from "../src/components/FilterTab"
import AddTab from "../src/components/AddTab"

import { appSetTab } from "../src/stores/app/action"
import { appLoadInitialData } from "../src/stores/app/data_store"

export default function App() {

  const dispatch = useDispatch()
  const { list, search, activeTab } = useSelector(store => store.app)

  useEffect(
    () => dispatch(appLoadInitialData('from index'))
    , [])

  const tabs = [
    {
      name: "filter",
      label: "FILTER",
    },
    {
      name: "add",
      label: "ADD BOOK / MAGAZINE",
    },
  ]

  const handleFilter = (book) => book.isbn.includes(search) || book.authors.includes(search)

  const handleTitleSort = (x, y) => x.title < y.title ? -1 : (x.title > y.title ? 1 : 0)

  const handleSwitchTab = name => dispatch(appSetTab(name))

  let filteredList = [];
  const map = new Map();
  for (const item of list) {
    if (!map.has(item.isbn)) {
      map.set(item.isbn, true);
      filteredList.push(item);
    }
  }

  const memoList = useMemo(() => filteredList.filter(handleFilter).sort(handleTitleSort), [filteredList, search])

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center">

        <div className="w-full pb-16 bg-black flex flex-col items-center">
          <label className="text-white text-3xl font-bold my-6"><h5>Library App</h5></label>
          <div className="bg-white w-11/12 md:w-3/5">
            <div className="bg-white">
              <nav className="flex flex-row border-b border-gray-400">
                {tabs.map(tab => (
                  <button
                    key={tab.name}
                    onClick={() => handleSwitchTab(tab.name)}
                    className={`${tab.name === activeTab ? "text-black border-b-2 border-black" : "text-gray-600 border-0"} w-1/2 md:w-auto text-sm font-medium py-6 px-8 block focus:outline-none`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            {activeTab === "filter" && <FilterTab />}
            {activeTab === "add" && <AddTab />}
          </div>
        </div>

        <div className="w-full md:w-5/6 py-10 flex flex-wrap justify-center">
          {memoList.length > 0 ?
            memoList.map((data, i) => (
              <Card key={i} data={data} />
            )) :
            <div className="my-20 text-black font-medium text-xl">No Result.</div>
          }
        </div>
      </div>
    </>
  )
}

