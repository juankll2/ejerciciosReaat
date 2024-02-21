import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

const CAT_ENDPONT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPONT_IMAGE_URL = `https://cataas.com/cat/says/${firstWorld}?fontSize=50&fontColor=red`


export function App (){
    const { fact, refreshRandoFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    // para recuperar la cita al cargar la pag con una funciuon
    // useEffect(()=>{
    //     fetch('https://catfact.ninja/fact')
    //     .then(res => res.json())
    //     .then(data => {
    //         const { fact } = data
    //         setFact(fact)
    //     })
    // },[])



    // recuperar la imagen cada vez que tenemos una cita nueva
    // useEffect(() => {
    //     if(!fact) return
    //     const threeFirstWorld = fact.split(' ',3).join(' ')
    //     console.log(threeFirstWorld)
    //     setImageUrl(`https://cataas.com/cat/says/${threeFirstWorld}?fontSize=50&fontColor=red`)

    //     // fetch(`https://cataas.com/cat/says/${threeFirstWorld}?fontSize=50&fontColor=red`)
    //     // .then(res => res.blob())
    //     // .then(blob => {
    //     //     const { imageUrl } = URL.createObjectURL(blob)
    //     //     const {imageElement} = document.createElement('img')
    //     //     // imageElement.src = imageUrl
    //     //     setImageUrl(imageUrl)
    //     // })
    // }, [fact])

    const handleClick = async () => {
        // const newFact = await getRandomFacts()
        // setFact(newFact)
        refreshRandoFact()
    }

    return(
        <main>
            <h1>Aplicacion de gatitos</h1>
            <button onClick={handleClick}>Get new afct</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='img'/>}
        </main>
    )
}