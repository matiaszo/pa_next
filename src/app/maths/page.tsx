"use client"

import React, { useState } from "react" 

const style = {
    flexCenter: "font-robFont flex justify-center items-center h-[89vh]"
}


export default function Maths() {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const msgError = "Digite um numero valido"

    const handleSum = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2)
        }else{
            setRespSoma(undefined)
        }
    }
const handleSubtraction = () =>{
    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)

    if (!isNaN(n1) && !isNaN(n2)){
        setRespSoma(n1 - n2)
    }else{
        setRespSoma(undefined)
    }
}
    const handleMultiplication = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 * n2)
        }else{
            setRespSoma(undefined)
        }
    }
    const handleDivision = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 / n2)
        }else{
            setRespSoma(undefined)
        }
    }

    return(
        <>
            <div className={style.flexCenter}>
                <div className="flex flex-col justify-center items-center border-2 border-black rounded-2xl">
                    <div className="flex justity-around items-center m-2 text-center">
                        <label className=" rounded-md"> Primeiro numero: </label>
                        <input type="text" className="text-center" value={numero1} onChange={(event) => setNumero1(event.target.value)}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <label> Segundo numero: </label>
                        <input type="text" className="text-center" value={numero2} onChange={(event) => setNumero2(event.target.value)}/>
                    </div>
                    <div className="flex mt-5 gap-x-4">
                        <button className="bg-emerald-200 p-1 rounded-md" onClick={handleSum}>Somar</button>
                        <button className="bg-blue-200 p-1 rounded-md" onClick={handleSubtraction}>Subtrair</button>
                        <button className="bg-orange-200 p-1 rounded-md" onClick={handleMultiplication}>Multiplicar</button>
                        <button className="bg-red-200 p-1 rounded-md" onClick={handleDivision}>Dividir</button>
                    </div>
                        <div className="flex flex-row min-w-63 justify-around items-center mt-3">
                            <p>
                                Resultado:
                            </p> 
                            <p>
                                {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
                            </p>
                        </div>
                </div>
            </div>
        </>
    )
}

// export default Maths