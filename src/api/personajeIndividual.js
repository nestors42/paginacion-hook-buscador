 export const personajeIndividual = async ({params})=>{
    try {
        const res = await fetch (`https://rickandmortyapi.com/api/character/${params.id}`)
        const data = await res.json()
        return {personajeId: data}
    } catch (error) {
        console.log(error)
    }
    
    
}