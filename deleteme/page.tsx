"use client"
import Image from "next/image";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

interface IData{
  name: string;
  id: string;
}

export default function Home() {

  const [characters, setCharacters]= useState<IData[]>([])
  const [name, setName]= useState<string>("")

  useEffect(() => {
    const load = async () =>{
      const res = await fetch(`https://dragonball-api.com/api/characters/?name=${name}`);
      const data = await res.json();

      if(name == ""){

        setCharacters(data.items);
      }else{
        setCharacters(data);
      }
    }
    load()
  }, [name])

  return (
    <>
    <input type="text" value={name} placeholder="nome" onChange={(event)=>setName(event.target.value)}/>
      <div>
        {characters.map((item,index)=>{
          return(
            <div key={index}>
              <h1>{item.id}</h1>
              <p>{item.name}</p>
              <Link href={`/person/${item.id}`}> aperta</Link>
            </div>
          )
        })}
      </div>
    </>
  );
}
