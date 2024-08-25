
export const obtenerPersonajes = async ()=>{
    const url = 'https://rickandmortyapi.com/api/character'
    try {
        const res = await fetch(url)
        const data = await res.json()
        return {personajes: data.results}
    } catch (error) {
        console.log(error)
    }
}