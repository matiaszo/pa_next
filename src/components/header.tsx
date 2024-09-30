import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import "./headerStyle.css";



export const Header = () => {
    return(
        <>
            <h1 className="font-robFont flex text-medium justify-center items-center bg-cyan relative w-screen h-10 gap-x-6">
                <Link className="options" href={ROUTES.home}>Home</Link>
                <Link className="options" href={ROUTES.maths}>Maths</Link>
            </h1>
        </>
    )
}
