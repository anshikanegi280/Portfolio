
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Certificates from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

import './App.css'

const App = () => {
  return (
    <div className="app-root bg-portfolio">
      {/*  Portfolio Background (uses centralized CSS variables) */}
      <div className="absolute inset-0"></div>

      {/* Secondary gradient overlay for depth (centralized) */}

      <div className="absolute inset-0 portfolio-overlay"></div>

      {/* Subtle glow effects */}

      <div className="absolute inset-0">
        <div className="absolute top-[30%] left-[20%] w-96 h-96 glow-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[20%] w-80 h-80 glow-accent-2 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-accent rounded-full blur-3xl"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract floating elements */}
          <div className="absolute top-20 left-20 w-6 h-6 border border-blue-400/20 bg-blue-600/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-4 h-4 border border-cyan-400/20 bg-cyan-600/10 rounded-sm animate-pulse delay-500 rotate-45"></div>
          <div className="absolute bottom-32 left-40 w-5 h-5 border border-blue-300/20 bg-blue-500/10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 border border-indigo-400/20 bg-indigo-600/10 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 left-16 w-4 h-4 border border-blue-300/15 bg-blue-600/8 rotate-12 animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-16 w-6 h-6 border border-cyan-300/15 bg-cyan-600/8 rounded-full animate-pulse delay-500"></div>

          {/* Additional floating elements for depth */}
          <div className="absolute top-[15%] left-[60%] w-2 h-2 bg-blue-400/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-[70%] left-[25%] w-3 h-3 bg-indigo-400/15 rotate-45 animate-pulse delay-800"></div>
          <div className="absolute top-[45%] right-[40%] w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse delay-1200"></div>
        </div>

        {/* Subtle moving gradients (kept as transparent overlays) */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(var(--accent),0.01), transparent)' }}></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(180deg, transparent, rgba(var(--accent-2),0.01), transparent)' }}></div>
        </div>
      </div>

      {/* Content container */}
      <div className="content-container">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;