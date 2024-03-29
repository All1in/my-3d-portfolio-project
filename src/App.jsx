import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/*'
                    element={
                        <>
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/projects' element={<Projects />} />
                                <Route path='/contact' element={<Contact />} />
                            </Routes>
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    </main>
);

export default App;
