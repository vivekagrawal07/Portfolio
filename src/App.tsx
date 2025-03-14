import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@mui/material';
import { CgInstagram } from 'react-icons/cg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  // Handle body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const skills = [
    { name: "C/C++", icon: "💻", category: "Languages" },
    { name: "PYTHON", icon: "🐍", category: "Languages" },
    { name: "TYPESCRIPT", icon: "📘", category: "Languages" },
    { name: "JAVASCRIPT", icon: "⚡", category: "Languages" },
    { name: "REACT", icon: "⚛️", category: "Frontend" },
    { name: "NODE", icon: "🟢", category: "Backend" },
    { name: "SQL", icon: "🗄️", category: "Backend" },
    { name: "WORDPRESS", icon: "📰", category: "CMS" },
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "FIREBASE", icon: "🔥", category: "Backend" },
    { name: "VITE", icon: "⚡", category: "Tools" },
    { name: "MATERIAL-UI", icon: "🎯", category: "Frontend" },
    { name: "BOOTSTRAP", icon: "🅱️", category: "Frontend" },
    { name: "GIT", icon: "📊", category: "Tools" },
    { name: "VSCODE", icon: "💻", category: "Tools" },
    { name: "GITHUB", icon: "🐱", category: "Tools" },
    { name: "POSTMAN", icon: "📮", category: "Tools" }
  ];

  const projects = [
    {
      title: "Agresita",
      description: "College's flagship annual event platform",
      tech: ["HTML/CSS", "Bootstrap","JavaScript"],
      link: "https://agresita-vivek-agrawal-projects.vercel.app/",
      image: "/agresita-1.png"
    },
    {
      title: "Sanskriti Finance",
      description: "A comprehensive financial services platform offering loans, insurance, and business solutions with expert guidance for individuals and businesses.",
      tech: ["Wordpress", "Elementor", "Hostinger"],
      link: "https://sanskritifinanceservices.com/",
      image: "/sans.png"
    }
  ];

  const educationData = [
    {
      title: "Shri Shankaracharya Institute of Professional Management and Technology Raipur",
      institution: "B.Tech in Computer Science And Engineering",
      years: "2021 - 2025",
      rating: 7.8,
      },
    {
      title: "St. Xavier's High School Bharni Bilapur",
      institution: "Intermediate in Science (PCM)",
      years: "2020 - 2021",
      rating: 7.9,
    },
    {
      title: "St. Xavier's High School Bharni Bilapur",
      institution: "Class 10th",
      years: "2018 - 2019",
      rating: 7.5,
    },
  ];

  const publicationData = [
    {
      title: "AI to the Rescue: Revolutionizing Post-Disaster Recovery Systems",
      years: "2025",
      src: "",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleSkillsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab('skills');
    closeMenu();
    const element = document.getElementById('content-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'skills':
        return (
          <motion.div 
            className="skills-grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {Object.entries(
              skills.reduce((acc, skill) => ({
                ...acc,
                [skill.category]: [...(acc[skill.category] || []), skill]
              }), {} as Record<string, typeof skills>)
            ).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                className="skills-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="category-title">{category}</h3>
                <div className="category-skills">
                  {categorySkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="skill-card"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <h6>{skill.name}</h6>
                    </motion.div>
      ))}
    </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'education':
        return (
          <motion.div 
            className="education-grid"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {educationData.map((edu, index) => (
              <motion.div
                className="education-card"
                key={index}
                variants={itemVariants}
              >
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-years">{edu.years}</p>
                <div className="education-rating">CGPA: {edu.rating}</div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'publications':
        return (
          <motion.div 
            className="publication-grid"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {publicationData.map((pub, index) => (
              <motion.div
                className="publication-card"
                key={index}
                variants={itemVariants}
              >
                <div className="publication-info">
                  <h3 className="publication-title">{pub.title}</h3>
                  <p className="publication-year">
                    <span>Published in {pub.years}</span>
                  </p>
          </div>
                {pub.src && (
                  <a 
                    href={pub.src} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="publication-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
          >
            VA
          </motion.div>
          
          <button 
            className="menu-button" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="drawer-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
            )}
          </AnimatePresence>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <motion.a 
              href="#about" 
              onClick={closeMenu}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#content-section" 
              onClick={handleSkillsClick}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#projects" 
              onClick={closeMenu}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Projects
            </motion.a>
            <Button
              variant="contained"
              className="resume-btn"
              startIcon={<DownloadIcon />}
              href="https://drive.google.com/file/d/1FycltO0WhhPHYEc7ahHId5T6GaSGjqNL/view"
              target="_blank"
              onClick={closeMenu}
            >
              Resume
            </Button>
          </nav>
        </div>
      </motion.header>

      <main>
        <section id="about" className="section hero-section">
          <motion.div 
            className="section-content hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="hero-text"
              variants={itemVariants}
            >
              <div className="hero-title">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Hi, I'm <span className="gradient-text">Vivek Agrawal</span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Full Stack Developer
                </motion.h2>
        </div>
              <motion.p 
                className="hero-description"
                variants={itemVariants}
              >
                Crafting digital experiences with modern technologies and innovative solutions.
                Passionate about building robust, scalable applications that make a difference.
              </motion.p>
              <motion.div 
                className="social-links"
                variants={containerVariants}
              >
                {[
                  { icon: <FiMail />, link: "mailto:vivek.agrawal2807@gmail.com" },
                  { icon: <CgInstagram />, link: "https://www.instagram.com/vivekagrawal85" },
                  { icon: <BsLinkedin />, link: "https://www.linkedin.com/in/vivek-agrawal-7689b52b3" },
                  { icon: <BsGithub />, link: "https://github.com/vivekagrawal07" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="social-icon"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="hero-image"
              variants={itemVariants}
            >
              <img src="/me.jpeg" alt="Vivek Agrawal" />
            </motion.div>
          </motion.div>
        </section>

        <section id="content-section" className="section">
          <div className="section-content">
            <div className="tabs-container">
              <motion.div 
                className="tabs-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button
                  className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </button>
                <button
                  className={`tab-button ${activeTab === 'publications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('publications')}
                >
                  Publications
                </button>
              </motion.div>
              <motion.div 
                className={`tab-content ${activeTab ? 'active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {renderTabContent()}
              </motion.div>
            </div>
      </div>
    </section>

        <section id="projects" className="section">
          <div className="section-content">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  variants={itemVariants}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
        </div>
                    <motion.a
                      href={project.link}
                      className="project-link"
                      whileHover={{ x: 5 }}
                    >
                      View Project →
                    </motion.a>
        </div>
                </motion.div>
              ))}
            </motion.div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default App;
