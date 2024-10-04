import Link from "next/link";
import { Suspense } from "react";

type IData = {
    results : {
        name: string;
        status: string;
        id: string
    }[]
}


const serverPage: React.FC = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data : IData = await res.json();

    console.log(data)

    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {data.results.map(item => {
                    return(
                        <div key={item.id} className="w-[200px]">

                            <div className="bg-white w-full p-[5px] text-center rounded-t-[30px] flex flex-col gap-[10px] items-center">
                                <strong>{item.name}</strong>
                                <div className={item.status === "Alive" ? "bg-emerald-200 w-[15px] h-[15px]" : "bg-red-500 w-[15px] h-[15px]"}></div>
                                <div className="w-full bg-green-400 text-center text-stone-600">
                                    <Link href={`/perso/${item.id}`}>ABRIR</Link>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </Suspense>
        </>
    )
}

export default serverPage