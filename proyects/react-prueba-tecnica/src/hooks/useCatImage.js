import { useEffect, useState } from "react"

export function useCatImage ({fact}) {

    const [imageUrl, setImageUrl] = useState()
    
    useEffect(() => {
        if(!fact) return
        const threeFirstWorld = fact.split(' ',3).join(' ')
        console.log(threeFirstWorld)
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWorld}?fontSize=50&fontColor=red`)
    }, [fact])
    return { imageUrl }
}