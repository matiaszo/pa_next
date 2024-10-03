import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IFooter{
    thi: string;
    is: string;
    a: string;
    foot: boolean;
}

export const Footer: React.FC<IFooter> = ({thi, is, a, foot}) =>{

    const style = {
        f: "font-robFont flex text-medium justify-center items-center bg-cyan relative bottom-0 w-screen h-[5vh]"
    }

    return(
            <Link href={ROUTES.maths} className={style.f}>{thi}  {is} {a}?  {(foot)? "true":"false"}</Link>
    )
}   
