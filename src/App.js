import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Items from './components/AddItems';
import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import './App.css'
import CategoryPage from "./components/CategoryPage";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/item" element={<Items />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />

            <Route
                path="/Sidebar"
                element={
                    <div className="d-flex">
                        <Sidebar />
                    </div>
                }
            />
        </Routes>
    );
};

export default App;
