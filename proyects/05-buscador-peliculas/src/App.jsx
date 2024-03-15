import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  const isFIrstInput = useRef(true)

  useEffect (()=>{
    if (isFIrstInput.current){
      isFIrstInput.current = search === ''
      return
    }
    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if(search.length<3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  },[search])
  return{search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies: mappedMovies , getMovies, loading} = useMovies({search, sort})
  const debounceGetMovies = useCallback (
    debounce(search =>{
    console.log('search')
    getMovies({search})
  },500)
  ,[getMovies]
  )
  // const inputRef = useRef()

  const handleSumbit = (event) =>{
    event.preventDefault()
    ///////////////////
    //* extraer varios campos con js
    ///////////////////
    // const {query} = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    getMovies(search)
    //////////////////
    //Para extraer un input con js
    /////////////////
    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')
    //console.log(query)
    //
    //*
    
    // const inputEl = inputRef.current
    // const value1 = inputEl.value
    // const value = inputRef.current.value
    // console.log(value)
  }

  const handleChange = (event) =>{
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avangers, Star Wars, Avatar ...'></input>
          <input type='checkbox' onChange={handleSort} checked={sort}></input>
          <button type='sumbit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading 
          ?<p>Cargando....</p>
          :<Movies movies={mappedMovies}/>
        }
      </main>
    </div>
  )
}

export default App
