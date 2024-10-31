import About from "./About";
import Header from "./Header";
import Events from "./Events";

function Home() {
    return (
        <div className="container">
        <Header/>
        <About/>
        <Events/>
        </div>
    )
}
export default Home;