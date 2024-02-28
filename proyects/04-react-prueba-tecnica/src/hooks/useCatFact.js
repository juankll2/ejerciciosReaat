import { useState, useEffect } from "react"
import { getRandomFacts } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState() 
    const refreshRandoFact = () =>{
        getRandomFacts().then(newFact => setFact(newFact))
    }
    useEffect(refreshRandoFact, [])
    return { fact, refreshRandoFact }
}
