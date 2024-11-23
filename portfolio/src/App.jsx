import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projectData = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase skills and projects.',
      techStack: 'React, CSS',
      image: 'https://th.bing.com/th?id=OIP.8jN0KAPEam88i3ntYEY7DwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
    {
      id: 2,
      name: 'Weather App',
      description: 'A weather forecasting app using a public API.',
      techStack: 'JavaScript, API, HTML, CSS',
      image:'https://th.bing.com/th?id=OIP.n6-tbSLDFYMwCNmHgWK4zQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      {/* Navbar */}
      <header>
        <nav className="navbar fixed">
          <ul>
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section ref={homeRef} className="home-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my projects, skills, and experience.</p>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="https://wallpapers.com/images/hd/cute-profile-picture-d29aik4tc8ckfm9i.jpg" alt="Profile" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hi! I'm a web developer passionate about creating beautiful and
              functional websites. With experience in React, JavaScript, and CSS, I
              strive to build user-friendly and responsive applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-bar">
            <span>CSS</span>
            <div className="bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>HTML</span>
            <div className="bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>JAVA</span>
            <div className="bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>JAVASCRIPT</span>
            <div className="bar">
              <div className="progress" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.techStack}</p>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <p>
                <strong>Tech Stack:</strong> {selectedProject.techStack}
              </p>
              <button onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        )}
      </section>

    <section ref={contactRef} className="contact-section">
  <h2>Contact Me</h2>
  <form>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>  <br /> <hr />
  <br /> 
  <div className="social-icons">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
  <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
        </footer>
</section>
    </div>
  );
};

export default App;
