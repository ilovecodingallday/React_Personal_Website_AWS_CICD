import React from 'react';

import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from "./pages/ProjectDisplay";
import Info from './pages/Info';
import Contact from './pages/Contact';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path="/project/:id" element={<ProjectDisplay />} />
                    <Route path='/info' element={<Info/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
