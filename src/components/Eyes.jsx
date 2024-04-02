import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(

        () => {
            window.addEventListener("mousemove", (e) => {

                let mouseX = e.clientX;

                let mouseY = e.clientY;
                let diffrenceX = mouseX-window.innerWidth / 2;

                let diffrenceY =mouseY- window.innerHeight / 2;

                var angle = Math.atan2(diffrenceY, diffrenceX) * (180 / Math.PI);
                setRotate(angle-180);
            })
        }
    );




    return (
        <div className='eyes w-full h-screen overflow-hidden cursor-pointer'>
            <div data-scroll data-scroll-speed="-.4" className="relative w-full h-full bg-cover bg-center bg-black">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        
                        <div  className="relative w-2/3 h-2/3 rounded-full flex justify-center items-center text-white bg-zinc-900">
                            PLAY

                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-9 h-9 rounded-full bg-zinc-100">
                                </div>

                            </div>


                        </div>

                    </div>
                    
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full flex justify-center items-center text-white bg-zinc-900">
                            PLAY

                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-9 h-9 rounded-full bg-zinc-100">
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Eyes