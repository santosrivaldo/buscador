import Foolter from "../../components/Foolter/foolter";
import Header from "../../components/header/header";
import View from "../view/view";
import './home.css';

function Home() {
    return (
        <div className="Home" >
            <Header />
            <View />
            <Foolter />
        </div>
    )
}

export default Home;