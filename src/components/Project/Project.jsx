import React from 'react'
import cryptocurrencyLogo from '../../assets/projectlogo/cryptocurrency.png';
import contactManagementLogo from '../../assets/projectlogo/contactManagement.png';
import movierecLogo from '../../assets/projectlogo/movie_rec.png';
import BlockchainLogo from '../../assets/projectlogo/Blockchain.png';
import pdfMergerLogo from '../../assets/projectlogo/pdfMerger.png';
import tosolistLogo from '../../assets/projectlogo/tosolist.png';
import taskmanagementLogo from '../../assets/projectlogo/taskmanagement.png';
import jobPortalLogo from '../../assets/projectlogo/jobPortal.png';

function Project() {
  const handleOpenModal = (project) => {
    // Optional: define modal behavior if needed
    console.log('Project clicked:', project.title);
  };

  const projects = [
    {
      id: 0,
      title: "Crypto-Tracker",
      description:
        "This project is a cryptocurrency tracker application built using Vue.js for the frontend, Node.js with Express.js for the backend, and MongoDB as the database. It integrates the CoinGecko API to provide real-time cryptocurrency data.",
      image: cryptocurrencyLogo,
      tags: ["HTML", "CSS", "JavaScript", "Vue", "API"],
      github: "https://github.com/anshikanegi280/crypto-tracker",
    },
    {
      id: 1,
      title: "Contact-Management",
      description:
        "Contact management is the process of systematically storing, organizing, and tracking information about individuals or organizations that a business interacts with, including their contact details, interactions, and preferences.",
      image: contactManagementLogo,
      tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/anshikanegi280/contact-management",
    },
    {
      id: 2,
      title: "Movie-Registration",
      description:
        "A comprehensive movie reservation system backend built with Node.js, Express.js, and MongoDB. This system provides a complete solution for managing movie theaters, showtimes, user reservations, and generating detailed reports.",
      image: movierecLogo,
      tags: ["React JS", "API", "Mongodb", "Node Js", "JavaScript"],
      github: "https://github.com/anshikanegi280/movie-registration",
    },
    {
      id: 3,
      title: "BlockChain",
      description:
        "A decentralized voting system using Ethereum blockchain for secure and transparent elections, with features like user authentication and real-time result",
      image: BlockchainLogo,
      tags: ["Solidity", "Javascript JS", "Python", "Rust"],
      github: "https://github.com/anshikanegi280/blockchain-system",
    },
    {
      id: 4,
      title: "pdfMerger",
      description:
        "A versatile PDF merger and splitter tool that allows users to combine multiple PDF files into a single document or divide a single PDF into multiple documents. The platform provides a user-friendly interface with robust features for both casual users and professionals.",
      image: pdfMergerLogo,
      tags: ["JavaScript", "MongoDB", "HTML", "CSS"],
      github: "https://github.com/anshikanegi280/pdf-merger",
    },
    {
      id: 5,
      title: "Todolist Application",
      description:
        "This project is a backend for a to-do list application that allows users to create, update, and delete tasks. It manages user-specific data and implements basic CRUD operations within a task management context. Users can add new tasks, update existing ones, and remove completed or unwanted tasks.",
      image: tosolistLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/anshikanegi280/todolist-app",
    },
    {
      id: 6,
      title: "Task Management",
      description:
        "This is a backend application for a task management system built using Node.js, Express.js, and MongoDB. The application supports task assignment, project tracking, and team collaboration, helping teams to organize workflows and enhance productivity.",
      image: taskmanagementLogo,
      tags: ["API", "Node.js", "MongoDB", "Express", "Javascript"],
      github: "https://github.com/anshikanegi280/task-management-backend",
    },
    {
      id: 7,
      title: "Job Board",
      description:
        "This is a backend API service for a job board platform that enables employers to post job listings and job seekers to search and apply for positions, built with modern web technologies to provide secure authentication, efficient job matching algorithms, and scalable data management for handling high volumes of job postings and user interactions.",
      image: jobPortalLogo,
      tags: ["Express JS", "API", "Node JS", "MongoDB", "Javascript"],
      github: "https://github.com/anshikanegi280/job-board-backend",
    },
  ];

  return (
    <section
      id='project'
      className='py-24 pb-24 px-[12w] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Heading */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A showcase of the projects I have worked on highlighting my skills and experience in various technology
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain rounded-xl"
                onError={(e) => {
                  // Fallback for missing images
                  e.target.src = 'https://via.placeholder.com/400x200?text=' + encodeURIComponent(project.title);
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project