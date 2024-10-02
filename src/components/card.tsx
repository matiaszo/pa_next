import cityImg from "@/city.jpg";
import cityImg2 from "@/city2.jpg";
import cityImg3 from "@/city3.jpg";



const Cards = ({image, read, views, comments}: any) =>{
    return(
        <>
            {/* <div className="flex h-[90vh] justify-center items-center"> */}
                <div className="flex flex-col bg-cyan rounded-2xl max-w-[16vw]">
                    <img src={image.src} className="w-[50vw] h-[20vh] rounded-2xl" />

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-orange-400"> 1 week ago </h1>
                        <h2 className="text-slate-950 text-3xl font-bold"> Post two </h2>
                    </div>

                    <div className="flex justify-center items-center mt-8 p-2 text-center">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsam amet dicta nesciunt reiciendis magni? Veritatis, repellat. Ratione, tenetur? Minus eaque dicta consequatur vitae a nostrum dolorum corrupti dolores perspiciatis?
                        </span>
                    </div>

                    <div className="flex  items-center justify-around p-2">
                        <div className="flex flex-col bg-orange-400 p-2 w-20 items-center justify-center rounded-md">
                            <span>
                                7
                            </span>
                            <span>
                                {read}
                            </span>
                        </div>
                        <div className="flex flex-col bg-orange-400 p-2 w-20 items-center justify-center rounded-md">
                            <span>
                                7
                            </span>
                            <span>
                                {views}
                            </span>
                        </div>
                        <div className="flex flex-col bg-orange-400 p-2 w-20 items-center justify-center rounded-md">
                            <span>
                                7
                            </span>
                            <span>
                                {comments}
                            </span>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )   
}

export default Cards;