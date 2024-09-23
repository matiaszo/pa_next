import Link from "next/link";

interface IFooter{
    thi: string;
    is: string;
    a: string;
    foot: boolean;
}

export const Footer: React.FC<IFooter> = ({thi, is, a, foot}) =>{

    const style = {
        f: "font-robFont flex text-medium justify-center align-center bg-cyan absolute bottom-0 w-screen"
    }

    return(
            <h3 className={style.f}>{thi}  {is} {a}?  {(foot)? "true":"false"}</h3>
    )
} 