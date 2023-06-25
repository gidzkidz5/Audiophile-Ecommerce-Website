import ProductList from "../components/ProductList"
import CategoriesBar from "../components/CategoriesBar"
import TitleCard from "../components/TitleCard"
import AboutAudiophile from "../components/AboutAudioPhile"

export default function Speakers() {
    return (
        <>
        <TitleCard
            title = "speakers"
        />
        <ProductList
            category = "speakers"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}