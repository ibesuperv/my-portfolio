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
        <div id='eyes'>
            <div data-scroll data-scroll-speed="-.4" className="holder">
                <div className="eyes -translate-x-[50%] -translate-y-[50%]">
                    <div className="eye">
                        
                        <div  className="black-eye ">
                            PLAY

                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line -translate-x-[50%] -translate-y-[50%]">
                                <div className="white-eye">
                                </div>

                            </div>


                        </div>

                    </div>
                    
                    <div className="eye">
                        <div className="black-eye ">
                            PLAY

                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line -translate-x-[50%] -translate-y-[50%]">
                                <div className="white-eye">
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