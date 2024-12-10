import React from 'react';
import youtube from '../../assets/youtube.png';
import ecommerce from '../../assets/ecommerce.png';
import './Project.css'; 

export default function Project() {
  const projects = [
    {
      title: 'YouTube Clone',
      description: 'A YouTube-like platform for browsing and watching videos.',
      image: youtube,
      link: 'https://youtube-clone-six-topaz.vercel.app/'
    },
    {
      title: 'E-commerce Site',
      description: 'An online cloth shopping platform with product browsing, cart, and checkout features.',
      image: ecommerce,
      link: 'https://26aug-beta.vercel.app/'
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
