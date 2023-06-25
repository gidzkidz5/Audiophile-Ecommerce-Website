import { useState, useEffect } from "react";

export default function AboutAudiophile() {
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
       
        <section id="about-audiophile-container">
            <div className="about-audiophile-text-container ff-sanserif">
                <h1 className="fs-2 uppercase font-black">Bringing you the <span style={{color: "#D87D4A"}}>Best</span> audio gear</h1>
                <h2 className="fs-body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</h2>
            </div>
            <div className="about-audiophile-image-container">
                <img 
                    src={"./shared/" + screenSize + "/image-best-gear.jpg"}
                />
            </div>
        </section>
      
    )
}