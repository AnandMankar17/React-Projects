
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import Countries from './components/Countries'
import { useState } from 'react'

import './App.css'

const App = () => {
  const [search, setSearch] = useState('');

  
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setSearch={setSearch}/>
          <SelectMenu />
        </div>
        <Countries search={search}/>
      </main>
    </>
  )
}

export default App
