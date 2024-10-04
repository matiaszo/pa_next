import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Header = () => {

    const style = {
        options: "bg-white rounded-[10px] h-[4vh]"
    }

    return(
        <>
            <h1 className="font-robFont flex text-medium justify-center items-center bg-cyan relative w-full h-[5vh] gap-x-6">
                <Link className={style.options} href={ROUTES.home}>Home</Link>
                <Link className={style.options} href={ROUTES.maths}>Maths</Link>
                <Link className={style.options} href={ROUTES.generalFunction}>Função</Link>
                <Link className={style.options} href={ROUTES.cards}>Cards</Link>
                <Link className={style.options} href={ROUTES.fetch}>Fetch</Link>
                <Link className={style.options} href={ROUTES.axiosPage}>Axios</Link>
                <Link className={style.options} href={ROUTES.serverSide}>Server</Link>

            </h1>
        </>
    )
}
