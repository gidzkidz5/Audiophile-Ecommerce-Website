import AboutAudiophile from "./AboutAudioPhile";
import Button1 from "./Button1";
import Button2 from "./Button2";
import CategoriesBar from "./CategoriesBar";

import { useState, useEffect } from "react";


export default function Home() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    let screenSize = '';
  
    // Determine the src value based on the screen width

    if (screenWidth < 561) { // Mobile
      screenSize = 'mobile';
    } else if (screenWidth >= 561 && screenWidth < 1024) { // Tablet
      screenSize = 'tablet';
    } else { // Desktop
      screenSize = 'desktop';
    }

    return(
        <>
        <div id="front-page-feature">
            <div className="front-page-text-container ff-sanserif flex">
                <h1 className="fs-overline uppercase font-white" style={{opacity: "0.5"}}>New Product</h1>
                <h2 className="uppercase font-white">XX99 MARK II HEADPHONES</h2>
                <p className="font-white fs-body" style={{opacity: "0.5"}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>

            <Button1 
                title = "see product"
            />
        </div>

        <CategoriesBar/>

        <section id="showcase-feature" className="ff-sanserif">
            <div id="showcase-zx9">
                <img src={"../src/assets/home/" + screenSize + "/image-speaker-zx9.png"}/>
                <div className="showcase-text-container1">
                    <h1 className="fs-1 font-white uppercase">ZX9 speakers</h1>
                    <p className="fs-body font-white" style={{opacity: "0.75"}}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button2 
                        title= "see product"
                    />
                </div>
            </div>

            <div id="showcase-zx7">
                <div className="showcase-text-container2">
                    <h1 className="fs-4 uppercase font-black">ZX7 Speakers</h1>
                    <Button2 
                        title= "see product"
                    />
                </div>
            </div>

            <div id="showcase-yx1">
                <div></div>
                <div className="showcase-text-container3">
                    <div>
                        <h1 className="fs-4 uppercase font-black">YX1 Earphones</h1>
                        <Button2 
                            title= "see product"
                        />
                    </div>
                </div>
            </div>

        </section>

        <AboutAudiophile/>

        
        
        </>
    )
}