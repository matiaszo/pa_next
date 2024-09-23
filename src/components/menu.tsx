import Link from "next/link";

interface IMenu{
}


export const Menu: React.FC<IMenu> = () => {

    const style = {
        p: "text-pink-500 font-robFont text-large 2lg justify-center align-center",
        label: "text-white font-robFont",
        center: "flex justify-center items-center w-full h-screen",
        form: "bg-slate-700 p-10 m-10 rounded-lg"
    }

    return(
        <>
        <div className={style.center}>
                <form className={style.form} action="">
                <label className={style.label} htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"/><br /><br />
                <label className={style.label} htmlFor="age">Idade:</label>
                <input type="text" name="age" placeholder="Digite a sua idade"/><br /><br />
                <label className={style.label} htmlFor="gender">Sexo:</label>
                <input type="text" name="gender" placeholder="Digite o seu sexo"/><br />
            </form>
        </div>
        </>
    )
}
    