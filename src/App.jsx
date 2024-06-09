import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

function App() {
    return (

        
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/videos/:id" element={<Video />} />
                </Routes>

                <Footer />
            </BrowserRouter>




    );
    //return <Home />;
}

export default App;
