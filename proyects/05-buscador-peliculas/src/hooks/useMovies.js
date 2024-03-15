import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
// import withResult from '../mocks/withResults.json'
// import noResults from '../mocks/withResults.json'

export function useMovies ({ search, sort }) {
    const [movies, setMoies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)


    // para funciones
    const getMovies = useCallback( async ({search}) =>{
        if (search === previousSearch.current) return

        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({search})
            setMoies(newMovies)
        }
        catch (e) {
            setError(e.message)
        }
        finally{
            setLoading(false)
        }
    },[])
    // Guardar un valor o recalcular un valor 
    const sortedMovies = useMemo(() => {
        return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        :movies

    }, [sort, movies])

    return {movies: sortedMovies, getMovies, loading}
}