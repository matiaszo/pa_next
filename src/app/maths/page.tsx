"use client"

import React, { useState } from "react" 

const Maths: React.FC = () => {
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
            <h1>
                Use client com controle de status
            </h1>
            <div>
                <label> Numero 1</label>
                <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <label> Numero 2</label>
                <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
                <h2>
                    Soma
                    {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
                </h2>
                <button onClick={handleSoma}>soma ai</button>

            </div>
        </>
    )
}

export default Maths