import Navigation from "../components/Navigation.jsx";
import Banner from "../components/Banner.jsx";
import GuitarService from "../components/GuitarService.jsx";
import Catalog from "../components/Catalog.jsx";
import Footer from "../components/Footer.jsx";

const Main = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <GuitarService></GuitarService>
            <Catalog></Catalog>
            <Footer />
        </>
    )
}
export default Main