import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useNavigate } from "react-router";


export default function CategoriesBar() {

    const navigate = useNavigate();

    function handleClick(category) {
       navigate("../" + category);
    }
    
    return (
        <section id="category-bar">
            <div className="category-item-container flex" onClick={()=>handleClick("headphones")}>
                <div className="category-item-image"id="headphones" >
                    <img src={headphones} alt="headphones"/>
                </div>
                <div className="category-item-text uppercase ff-sanserif flex" >
                    <h1 className="fs-6 ">HEADPHONES</h1>
                    <h2 className="fs-subtitle flex">SHOP <span className="arrow"><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></h2>
                </div>
            </div>

            <div className="category-item-container flex" onClick={()=>handleClick("speakers")}>
                <div className="category-item-image" id="speakers">
                    <img src={speakers} alt="headphones" />
                </div>
                <div className="category-item-text uppercase ff-sanserif flex" >
                    <h1 className="fs-6 ">speakers</h1>
                    <h2 className="fs-subtitle flex">SHOP <span className="arrow"><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></h2>
                </div>
            </div>

            <div className="category-item-container flex" onClick={()=>handleClick("earphones")}>
                <div className="category-item-image" id="earphones" >
                    <img src={earphones} alt="headphones"/>
                </div>
                <div className="category-item-text uppercase ff-sanserif flex"  >
                    <h1 className="fs-6 ">earphones</h1>
                    <h2 className="fs-subtitle flex">SHOP <span className="arrow"><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></h2>
                </div>
            </div>
        </section>
    )
}