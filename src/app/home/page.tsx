import Link from "next/link";
import Cards from "../../components/card";
import cityImg from "@/city.jpg";
import cityImg2 from "@/city2.jpg";
import cityImg3 from "@/city3.jpg";
import { StaticImageData } from "next/image";


const data: {img: StaticImageData; read: string; views: string; comments: string; color:string; divideColor: string; fontColor: string} [] = [
    {
    img: cityImg,
    read: "7",
    views: "7000",
    comments: "500",
    color: "bg-pink-500",
    divideColor: "divide-pink-700",
    fontColor: "text-pink-500"
    },
    {
    img: cityImg2,
    read: "8",
    views: "6000",
    comments: "500",
    color: "bg-orange-500",
    divideColor: "divide-orange-700",
    fontColor: "text-orange-500"
    },
    {
    img: cityImg3,
    read: "9",
    views: "4000",
    comments: "500",
    color: "bg-green-500",
    divideColor: "divide-green-700",
    fontColor: "text-green-500"
    }
]

export default function Home(){

    const style = {
        p: "text-pink-500 font-robFont text-large 2lg justify-center align-center",
        label: "text-white font-robFont",
        center: "flex justify-center items-center w-full h-[90vh]",
        form: "bg-slate-700 p-10 m-10 rounded-lg"
    }

    return(
        <>
        {/* <div className={style.center}>
                <form className={style.form} action="">
                <label className={style.label} htmlFor="name">Nome:</label>
                <input className="rounded-2xl p-1" type="text" name="name" placeholder="Digite o seu nome"/><br /><br />
                <label className={style.label} htmlFor="age">Idade:</label>
                <input className="rounded-2xl p-1" type="text" name="age" placeholder="Digite a sua idade"/><br /><br />
                <label className={style.label} htmlFor="gender">Sexo:</label>
                <input className="rounded-2xl p-1" type="text" name="gender" placeholder="Digite o seu sexo"/><br />
            </form>
        </div> */}

        {data.map((item, index) => (
                <Cards key={index} image={item.img} read={item.read} views={item.views} comments={item.comments} color={item.color} divideColor={item.divideColor} fontColor={item.fontColor}/>
        ))}
        </>
    )
}
    