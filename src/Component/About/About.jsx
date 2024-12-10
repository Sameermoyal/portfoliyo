import React from 'react';
import "./About.css"

export default function About() {
  return (
    <section id="about">
      <div className="mb-16">
        <h2>About Me</h2>
        <p>
          Hi! I’m Sameer, a frontend developer with a B.Tech in Computer Science from the College of Engineering, Bikaner. My journey into web development began with a fascination for technology and how it shapes our world. I specialize in HTML, CSS, JavaScript, and React.js, along with Redux for state management. My experience with Bootstrap and Tailwind CSS enables me to create responsive and engaging user interfaces. Thank you for visiting my page, and I invite you to check out my projects!
        </p>
      </div>

      <div className="mb-16">
        <h2>Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind', 'Bootstrap', 'Git', 'C++', 'DSA', 'OOPs', 'Communication'].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2>Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: 'MERN Stack Developer',
            date: '15/02/2024 - Present',
            company: 'REGex Software Services',
            tasks: [
              'Developed and maintained responsive web applications using React.',
              'Utilized HTML, CSS, Bootstrap, and Tailwind to create layouts.',
              'Managed state using Redux for performance optimization.',
              'Collaborated in an Agile environment for sprint planning and reviews.'
            ],
          },
          {
            title: 'Web Developer Trainee',
            date: '10/04/2021 - 19/06/2021',
            company: 'Internshala',
            tasks: [
              'Completed a 2-month training in Web Development.',
              'Specialized in HTML, CSS, JavaScript and Bootstrap for responsive websites.'
            ],
          }].map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <h3>{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="font-semibold">Company: {exp.company}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            school: 'Govt High Secondary, Merta City',
            date: '2017 - 2018',
            level: 'High School'
          },
          {
            school: 'UCET, BIKANER',
            date: '2018 - 2022',
            level: 'B.Tech - Computer Science Engineering'
          }].map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <h3>{edu.school}</h3>
              <p>{edu.date}</p>
              <p>{edu.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
