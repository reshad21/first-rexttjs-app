import Footer from "../components/Footer";
import Topbar from "../components/Topbar";


const layout = ({ children }) => {
    return (
        <div className="">
            <Topbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;