"use client"

import React, { useState } from "react" 

export default function Maths() {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const msgError = "Digite um numero valido"

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2)
        }else{
            setRespSoma(undefined)
        }
    }
    return(
        <>
            <div className="font-robFont flex justify-center items-center mt-52">
                <div className="flex flex-col justify-center items-center border-2 border-black rounded-2xl">
                    <div className="flex justity-around items-center m-2 text-center">
                        <label className=" rounded-md"> Primeiro numero: </label>
                        <input type="text" className="text-center" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <label> Segundo numero: </label>
                        <input type="text" className="text-center" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-emerald-200 p-1 rounded-md" onClick={handleSoma}>Somar</button>
                        <h2>
                            Resultado: 
                            {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
                        </h2>

                    </div>
                </div>
            </div>
        </>
    )
}

// export default Maths