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
        ]
    }
};

export default nextConfig;
