import React, { useEffect } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Contact = () => {
  const { personajes } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(()=>{
  //   console.log(searchParams.get('nombre'))
  // },[searchParams])

  const handleChange = (e) => {
    let filter = e.target.value;
    setSearchParams({ keyword: filter });
  };
  return (
    <div className="container py-2">
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Busca tu personaje.."
        onChange={handleChange}
        value={searchParams.get('keyword') ? searchParams.get('keyword') : ''}
      />
      {personajes.filter((item)=>{
        let filter = searchParams.get('keyword') // lo que escribe el usuario
        let name = item.name.toLowerCase()

        if(!filter){
          return true
        }else{
          return name.startsWith(filter.toLowerCase())
        }
      })
      
      
      
      
      
      .map((item) => (
        <li key={item.id}>
          <Link to={`/contact/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Contact;
