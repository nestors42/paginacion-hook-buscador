/* para hacer este buscador, lo primero que tengo que hacer es, definir una variable con el hook
useSearchParams ejemplo:
const [buscdor, setSearchBuscador] = useSearchParams()
* luego en el input del buscador, voy a agregar el evento onChange={handleChange} con este evento
le digo al input que cuando se modifique el input se ejecute la funcion handleChange, esa funcion la tengo
que crear luego, y lo que va a hacer es recibir el parametro e, que lo que va a hacer es con el setSearchParams
dentro de sus parametros voy a colocar la propiedad como por ejemplo en forma de objeto ({nombre: e.target.value}) 
y el  e.target.value es decir lo que el usuario coloque dento del input
quedaria asi: setSearchParams({nombre: e.target.value}) tambien podria crear un let y alojar ahi el e.target.value y
llamarlo despues de 'nombre' ejemplo de la funcion handleChange:
const handleChange = (e)=>{
    let filter = e.target.value
    setSearchParams({nombre: filter})}
*con esto ya tendria todo para ver la query que escribe el usuario en la propiedad que yo hice en este caso la propiedad
se llama 'nombre', setSearchParams({nombre: filter})} es decir hice que lo que escribio el usuario
viaje arriba en el buscador donde estan los endpoints.
* ahora quiero que lo que escriba el usuario tambien se muestre en el campo del input, para esto en el
input voy a poner value={aca poner la variable de estado que cree con setSearch recordemos que fue la 
variable llamada buscador, y le pondria get para obtener la query que cree, en este caso nombre}
entonces quedaria asi en el input:
value={buscador.get('nombre')}

*ahora en el input voy a preguntar si existe la query nombre entonces que me traiga esa query, si no que sea un texto vacio:
todo esto en value:
value={buscador.get('nombre') ? buscador.get('nombre') : ''}
* ya estarian conectados los parametros de busqueda con lo que escribe el usuario en el input

* ahora yo quiero filtar los personaje, peliculas, series o lo que sea.
entonces en este caso antes de mapear los personajes los voy a filtrar:
{personajes.filter((item)=>{
        let filter = searchParams.get('keyword') // lo que escribe el usuario
        let name = item.name.toLowerCase()

        if(!filter){
          return true
        }else{
          return name.startsWith(filter.toLowerCase())
        }
      })

*/