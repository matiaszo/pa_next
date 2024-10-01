"use client"
import { useState } from "react";

const generalFunction = () => {

    interface IProps{
        a: string;
        b: string;
    }

    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")

    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const [respSub, setRespSub] = useState<number | undefined>(0)
    const [respMult, setRespMult] = useState<number | undefined>(0)
    const [respDiv, setRespDiv] = useState<number | undefined>(0)

    const msgError = "Digite um valor válidos"

    const handleAll = ({a,b}: IProps) =>{

        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if(!isNaN(n2) && !isNaN(n1)){
            setRespSoma(n1 + n2)
            setRespSub(n1 - n2)
            setRespMult(n1 * n2)
            setRespDiv(n2 !== 0 ? n1 / n2 : undefined)
        }else{
            setRespSoma(undefined)
            setRespSub(undefined)
            setRespMult(undefined)
            setRespDiv(undefined)
        }
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center h-[90vh]">
                <div className="flex flex-col justify-center items-center bg-emerald-100 p-6 rounded-2xl">
                    <h1 className="flex mb-5 bg-sky-300 p-1 rounded-md">Função reaproveitada</h1>

                    <div className="flex flex-col gap-1">
                        <input className="text-center" type="text" placeholder="Numero 01" value={numero1} onChange={(event) => setNumero1(event.target.value)}/>
                        <input className="text-center" type="text" placeholder="Numero 02" value={numero2} onChange={(event) => setNumero2(event.target.value)}/>
                    </div>
                    <div>
                    </div>
                    <div>
                        <button className="bg-emerald-300 rounded-md p-1 mt-3 mb-3" onClick={() => handleAll({a: numero1, b: numero2})}>Calcular todos</button>
                    </div>
                    <div>
                        <div className="flex justify-around">
                            <h2>Soma: </h2>
                            <p>{!isNaN(respSoma ?? NaN) ? respSoma: msgError}</p>
                        </div>
                        <div className="flex justify-around">
                            <h2>Subtração: </h2>
                            <p>{!isNaN(respSub ?? NaN) ? respSub: msgError}</p>
                        </div>
                        <div className="flex justify-around">
                            <h2>Multiplicacao: </h2>
                            <p>{!isNaN(respMult ?? NaN) ? respMult: msgError}</p>
                        </div>
                        <div className="flex justify-around">
                            <h2>Divisão: </h2>
                            <p>{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(5): msgError}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default generalFunction;