"use client"


import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    id: string;
    name: string;
    gender: string,
    status: string;
    species: string;
    image: string;
}


const axiosPage: React.FC = () => {

    const [character, setCharacter] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const [page, setPage] = useState<string>("")
    const [name, setName] = useState<string>("")

    useEffect(() => {
    
        api.get(`/character/?page=${page}&name=${name}`).then((res) => {
            const data = res.data.results
            setCharacter(data)
            setErro(false)
        }).catch((error) => {
            if(error.response.status === 404){
                setMessage("Pagina encontrou nao doidao")
            }
            if(error.response.staus === 500){
                setMessage("erro 500")
            }
            setErro(true)
        })
        
        return () => {
            
        }
    },[page,name])
    

    return(
        <>
            <div className="w-full flex justify-start">
                <input type="text" placeholder="Pagina 1/43" onChange={(e) => setPage(e.target.value)}/>
                <input type="text" placeholder="Nome"        onChange={(e) => setName(e.target.value)}/>
            </div>

            {erro && <h5 className="text-white">{message}</h5>}
        
            <div className="flex flex-wrap gap-[40px]">
                {character.map(item => {
                    return(
                        <div key={item.id} className="w-64 bg-stone-200 rounded-[24px] hover:scale-110 translate-transition duration-100">
                            <Image className="rounded-t-[24px]" src={item.image} alt="..." width={300} height={300} priority/>
                            <div className="p-[10px]">
                                <p className="text-center">{item.name}</p>
                                <p className="text-center">{item.status == "Dead" ? "☠" : "💚"}</p>
                                <p className="text-center">{item.species == "Human" ? (item.gender == "Female" ? "🙍🏻‍♀️" : "🙍🏻‍♂️"): item.gender == "Female" ? "♀️👽" : "♂️👽"}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default axiosPage;