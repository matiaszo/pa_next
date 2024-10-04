/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: 
            [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },

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
            {
                source: "/pagina-com-fetch",
                destination: "/fetch",
            },
            {
                source: "/axiosPage",
                destination: "/axios-page",
            },
            {
                source: "/serverPage",
                destination: "/server-side",
            },
        ]
    }
};

export default nextConfig;
