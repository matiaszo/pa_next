/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () =>{

        return[
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/operacoes",
                destination: "/maths",
            },
            {
                source: "/funcao-reaproveitada",
                destination: "/general-function",
            },
            {
                source: "/cards",
                destination: "/cartoes",
            },
        ]
    }
};

export default nextConfig;
