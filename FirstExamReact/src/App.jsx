import React from 'react';
import Footer from './components/Footer';
import Imgs from './components/Galeria';
import Header from './components/Header';
import Boody from './components/Boody';
// import './components/Bodyy.css'
import './components/Galeria.css'
const App = () => {
    return (
        <div>
            <Header />
            <Boody/>
            <Imgs />
            <Footer />
        </div>
    );
};

export default App;
