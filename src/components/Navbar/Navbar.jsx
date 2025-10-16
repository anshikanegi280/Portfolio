import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const [section, ActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // change navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const MenuItemClick = (sectionId) => {
    ActiveSection(sectionId);
    setOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });  //navbar remove
  }
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "certificate", label: "Certificate" },
    { id: "contact", label: "Contact" },
  ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-portfolio bg-opacity-40 backdrop-blur-md shadow-md" : "bg-transparent"
      } `}>
      <div className='text-white py-5 flex justify-between items-center'>
        <div className='text-lg font-bold cursor-pointer'>
          <span className='text-[var(--text-muted)]'>Anshika</span>
          <span className='text-[rgb(var(--accent))]'> Negi</span>
        </div>

        {/* Large screen */}
        <ul className=" hidden md:flex space-x-8 text-lg text-gray-300">
          {navItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[rgb(var(--accent))] ${section === item.id ? "text-[var(--text-primary)]" : ""
              }`}>

              <button onClick={() => MenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/anshikanegi280"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white">
            <FaGithub size={24} />

          </a>

          <a href="https://www.linkedin.com/in/anshikanegi280"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        {/* small screen */}
        <div className="md:hidden">
          {
            Open ? (
              <FiX className="text-3xl text-white cursor-pointer"
                onClick={() => setOpen(false)} />
            ) : (
              <FiMenu className="text-3xl text-white cursor-pointer"
                onClick={() => setOpen(true)} />
            )
          }

        </div>
      </div>

      {/* Menu items */}

      {Open && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[var(--glass)] bg-opacity-60  backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">

          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {navItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-blue-300
                    ${section === item.id ? "text-[rgb(var(--accent))]" : ""

                }`}>
                <button onClick={() => MenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a href="https://github.com/anshikanegi280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white">
                <FaGithub size={24} />

              </a>

              <a href="https://www.linkedin.com/in/anshikanegi280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
