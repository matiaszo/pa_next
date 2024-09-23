import Link from "next/link";

interface IHeader{
    some: string;
}

export const Header: React.FC<IHeader> = ({some}) => {
    return(
        <h1 className="font-robFont flex text-medium justify-center align-center bg-cyan fixed w-screen">
            {some}
        </h1>
    )
}
