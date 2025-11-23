// Task 30: Setup React Router with 3 pages (Home, About, Blog)
// NOTE: You must install react-router-dom: npm install react-router-dom

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple Page Components
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Us Page</h2>;
const Blog = () => <h2>Blog Posts</h2>;

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/blog">Blog</Link>
            </nav>

            <Routes>
                {/* Define routes for each page */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
