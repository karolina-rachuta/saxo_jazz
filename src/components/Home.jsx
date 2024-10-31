import About from "./About";
import Header from "./Header";
import Events from "./Events";
import Contact from "./Contact";

function Home() {
    return (
        <div className="container">
        <Header/>
        <About/>
        <Events/>
        <Contact/>
        </div>
    )
}
export default Home;