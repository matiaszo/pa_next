



const Cards = ({image, read, views, comments, color, fontColor, divideColor}: any) =>{
    return(
        <>
                <div className="flex flex-col ease-in-out duration-500 hover:scale-110 bg-slate-100 rounded-2xl overflow-hidden min-w-72 max-w-80 ">
                    <img src={image.src} className="w-full h-[200px] object-cover rounded-t-2xl" />

                    <div className="flex flex-col justify-center items-center">
                        <h1 className={`${fontColor} font-bold mt-3`}> 1 week ago </h1>
                        <h2 className="text-slate-950 text-3xl font-bold"> Post two </h2>
                    </div>

                    <div className="flex justify-center items-center mt-2 mb-2 p-2 text-center">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsam amet dicta nesciunt reiciendis magni? Veritatis, repellat. Ratione, tenetur? Minus eaque dicta consequatur vitae a nostrum dolorum corrupti dolores perspiciatis?
                        </span>
                    </div>

                    <div className={`flex text-slate-100 font-medium divide-x items-center justify-center w-full ${divideColor}`}>
                    <div className={`flex flex-col p-2 w-1/3 items-center justify-center ${color}`}>
                            <span className="text-xl">
                                {read}
                            </span>
                            <span className="font-thin">
                                Read
                            </span>
                        </div>
                        <div className={`flex flex-col p-2 w-1/3 items-center justify-center ${color}`}>
                            <span className="text-xl">
                                {views}
                            </span>
                            <span className="font-thin">
                                Views
                            </span>
                        </div>
                        <div className={`flex flex-col p-2 w-1/3 items-center justify-center ${color}`}>
                            <span className="text-xl">
                                {comments}
                            </span>
                            <span className="font-thin">
                                Comments
                            </span>
                        </div>
                    </div>
            </div>
        </>
    )   
}

export default Cards;