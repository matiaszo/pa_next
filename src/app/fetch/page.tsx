"use client"

import { useEffect, useState } from "react";


interface IData {
    name: string;
    id: string;
}


const FetchPage: React.FC = () => {

    const [characters, setCharacters] = useState<IData[]>([])


    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character")
            const data = await res.json()
            
            setCharacters(data.results)      

        }
        load()
    }, [])


    return(
        <>
            <h1> FetchPage Nativo para requisições get</h1>
          {characters.map((item, index) => {
            return(

                <div key={item.id}>
                    <h1>{item.name}</h1>
                </div>
            )
          }
      
        
           
          )}
        </>
    )
}



export default FetchPage;