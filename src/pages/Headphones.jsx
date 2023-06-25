import AboutAudiophile from "../components/AboutAudioPhile";
import CategoriesBar from "../components/CategoriesBar";
import ProductList from "../components/ProductList";
import TitleCard from "../components/TitleCard";


export default function Headphones() {
    return (
        <>
        <TitleCard
            title = "Headphones"
        />
        <ProductList
            category = "headphones"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}