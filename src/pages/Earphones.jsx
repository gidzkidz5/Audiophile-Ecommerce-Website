import ProductList from "../components/ProductList"
import CategoriesBar from "../components/CategoriesBar"
import TitleCard from "../components/TitleCard"
import AboutAudiophile from "../components/AboutAudioPhile"


export default function Earphones() {
    return (
        <>

        <TitleCard
            title = "earphones"
        />
     
        <ProductList
            category = "earphones"
        />
        <CategoriesBar/>

        <AboutAudiophile/>
        </>
    )
}
