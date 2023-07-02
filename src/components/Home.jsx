import AboutAudiophile from "./AboutAudioPhile";
import Button1 from "./Button1";
import Button2 from "./Button2";
import CategoriesBar from "./CategoriesBar";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FancyButton from "./FancyButton";


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
                <h1 className="fs-overline uppercase font-white new-product-home" style={{opacity: "0.5"}}>
                <span></span>
                New Product</h1>
                <h2 className="uppercase font-white">XX99 MARK II HEADPHONES</h2>
                <p className="font-white fs-body" style={{opacity: "0.5"}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>
            {/* <Link to="headphones/xx99-mark-two-headphones">
                <Button1 
                    title = "see product"
                />

            </Link> */}
            <FancyButton
                title = "See Product"
                pageTo="headphones/xx99-mark-two-headphones"
            />
        </div>

        <CategoriesBar/>

        <section id="showcase-feature" className="ff-sanserif">
            <div id="showcase-zx9">
                <img src={"./home/" + screenSize + "/image-speaker-zx9.png"}/>
                <div className="showcase-text-container1">
                    <h1 className="fs-1 font-white uppercase">ZX9 speakers</h1>
                    <p className="fs-body font-white" style={{opacity: "0.75"}}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="speakers/zx9-speaker">
                    <Button2 
                        title= "see product"
                    />
                    </Link>
                </div>
            </div>

            <div id="showcase-zx7">
                <div className="showcase-text-container2">
                    <h1 className="fs-4 uppercase font-black">ZX7 Speakers</h1>
                    <Link to="speakers/zx7-speaker">
                    <Button2 
                        title= "see product"
                    />
                    </Link>
                </div>
            </div>

            <div id="showcase-yx1">
                <div></div>
                <div className="showcase-text-container3">
                    <div>
                        <h1 className="fs-4 uppercase font-black">YX1 Earphones</h1>
                        <Link to="earphones/yx1-earphones">
                        <Button2 
                            title= "see product"
                        />
                        </Link>
                    </div>
                </div>
            </div>

        </section>

        <AboutAudiophile/>

        
        
        </>
    )
}