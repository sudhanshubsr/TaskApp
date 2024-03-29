import React from 'react'

const SearchandSortComponent = ({sort, setSort, searchPhrase, setSearchPhrase}) => {
  return (
    <div className="flex items-center gap-2">
    <select
    onChange={(ev) => {setSort(ev.target.value);
    }}
    className="block appearance-none bg-white border-2 border-gray-400 py-2 px-1 rounded-md leading-tight focus:outline-none focus:shadow-outline-blue text-sm" 
  >
    <option value="all">All</option> {/* Exprimental Feature  */}
    <option value="Todo">Todo</option>
    <option value="In Progress">In-Progress</option>
    <option value="Done">Done</option>
  </select>
  </div>
  )
}

export default SearchandSortComponent