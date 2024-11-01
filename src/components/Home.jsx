import About from "./About";
import Header from "./Header";
import Events from "./Events";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    return (
        <div className="container">
        <Header/>
        <About/>
        <Events/>
        <Contact/>
        <Footer/>
        </div>
    )
}
export default Home;