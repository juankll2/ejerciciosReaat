const CAT_ENDPONT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFacts = async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json()
    const { fact } = data
    return fact
}