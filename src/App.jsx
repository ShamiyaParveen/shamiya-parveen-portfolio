import './App.css'

const profile = {
  name: 'Shamiya Parveen',
  title: 'Front-End Developer | React.js Specialist ',
  location: 'India',
  email: 'shamiya9922@gmail.com',
  summary: 'Building scalable, responsive web applications with modern UI/UX.',
  about:
    'I create fast, user-friendly interfaces using React, JavaScript, and modern web technologies, focusing on clean code and seamless user experience.',
  linkedin: 'https://www.linkedin.com/in/shamiya-parveen-123196232/',
  github: 'https://github.com/ShamiyaParveen',
  resume: '/shamiya Ansari resume.pdf',
}

const aboutPoints = [
  'I am a passionate Front-End Developer with hands-on experience in building real-world web applications including ecommerce platforms and streaming apps.',
  'I specialize in React.js, JavaScript, and API integration, with a strong focus on responsive design and reusable component-based architecture.',
  'I enjoy turning ideas into interactive, user-friendly interfaces and continuously improving my skills to build high-quality web experiences.',
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'UI Libraries & Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Firebase', 'Vercel'],
  },
  {
    title: 'Concepts',
    items: ['Responsive Design', 'API Integration', 'Component-Based Architecture'],
  },
]

const qualifications = [
  {
    institute: 'Abeda Inamdar Senior College, Pune',
    course: 'B.Sc. Information Technology',
    duration: '2017 - 2020',
    score: '80.26%',
  },
  {
    institute: 'Abeda Inamdar Junior College, Pune',
    course: 'Class 12 (Science)',
    duration: '2016 - 2017',
    score: '61.38%',
  },
  {
    institute: 'Imperial Public School, Bihar',
    course: 'Class 10',
    duration: '2014 - 2015',
    score: '8.8 CGPA',
  },
]

const experiences = [
  {
    company: 'Westonik Solutions Pvt. Ltd.',
    role: 'Frontend Developer',
    duration: 'Nov 2024 - Present',
    location: 'Prayagraj, India',
    points: [
      'Developed and maintained 12+ responsive websites using HTML, CSS, Bootstrap, and WordPress.',
      'Converted Figma designs into pixel-perfect UI improving user experience.',
      'Optimized website performance, SEO, and cross-browser compatibility.',
      'Built reusable UI components and scalable frontend structures.',
      'Collaborated with designers and stakeholders to deliver production-ready solutions.',
    ],
  },
  {
    company: 'Westonik Solutions Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    duration: 'Aug 2024 - Nov 2024',
    location: 'Prayagraj, India',
    points: [
      'Built responsive UI components and layouts using HTML, CSS, and Bootstrap.',
      'Worked on real client projects improving frontend responsiveness.',
      'Assisted in WordPress development and UI customization.',
    ],
  },
  {
    company: 'Edera - Pune',
    role: 'WordPress Developer Intern',
    duration: 'Mar 2023 - Jun 2023',
    location: 'Remote',
    points: [
      'Developed and customized WordPress websites using Elementor and WooCommerce.',
      'Improved UI/UX and responsiveness across devices.',
      'Implemented SEO and performance optimization techniques.',
      'Collaborated with team members to deliver client-based projects.',
    ],
  },
]

const projects = [
  {
    title: 'Netflix Clone',
    subtitle: 'React + Firebase',
    points: [
      'Built a Netflix-inspired streaming web application using React and Vite.',
      'Implemented user authentication using Firebase Auth.',
      'Integrated OMDB API to fetch and display dynamic movie data.',
      'Designed fully responsive UI for mobile, tablet, and desktop.',
      'Created smooth navigation and user-friendly browsing experience.',
    ],
    stack: ['React.js', 'Firebase', 'OMDB API', 'JavaScript', 'CSS'],
    liveLink: 'https://netflix-clone-react-firebase-phi.vercel.app/',
    githubLink: 'https://github.com/ShamiyaParveen/netflix-clone-react-firebase',
  },
  {
    title: 'Zoobiya E-Commerce Frontend',
    subtitle: 'Responsive ecommerce frontend',
    points: [
      'Developed a responsive ecommerce frontend using React and Vite.',
      'Implemented product listing, category filtering, and search functionality.',
      'Designed cart system UI and product detail pages.',
      'Integrated REST APIs for dynamic data rendering.',
      'Used Material UI and Bootstrap for modern UI components.',
    ],
    stack: ['React.js', 'REST API', 'Material UI', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://zoobiya-ecommerce-frontend.vercel.app/',
    githubLink: 'https://github.com/ShamiyaParveen/zoobiya-ecommerce-frontend',
  },
  {
    title: 'University Landing Page',
    subtitle: 'Single-page educational website',
    points: [
      'Created a responsive single-page educational website using React.',
      'Built structured sections including hero, courses, testimonials, and contact.',
      'Implemented clean UI with smooth scrolling and responsive design.',
      'Focused on reusable components and modern layout.',
    ],
    stack: ['React.js', 'Vite', 'HTML', 'CSS'],
    liveLink: 'https://single-page-website-react.vercel.app/',
    githubLink: 'https://github.com/ShamiyaParveen/single-page-website-react',
  },
]

const highlights = [
  'Built 3+ real-world frontend projects using React.js.',
  'Strong understanding of API integration and dynamic data handling.',
  'Experienced in building responsive and user-friendly interfaces.',
  'Focused on clean code and reusable component design.',
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Qualification', href: '#qualification' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a href="#home" className="site-logo">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Portfolio sections">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Resume Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>
          <p className="hero-summary">{profile.about}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a
              href={profile.linkedin}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="card-label">Quick Info</p>
          <ul className="info-list">
            <li>
              <span>Role</span>
              <strong>{profile.title}</strong>
            </li>
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </li>
            <li>
              <span>Resume</span>
              <strong>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </strong>
            </li>
          </ul>
        </aside>
      </section>

      <section className="content-grid">
        <div className="panel" id="about">
          <p className="section-tag">About</p>
          <h2>About</h2>
          <div className="about-list">
            {aboutPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>

        <div className="panel" id="skills">
          <p className="section-tag">Skills</p>
          <h2>Skills</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <p className="group-title">{group.title}</p>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qualification-section" id="qualification">
        <div className="section-heading">
          <p className="section-tag">Education</p>
          <h2>Qualification</h2>
        </div>

        <div className="qualification-grid">
          {qualifications.map((qualification) => (
            <article className="qualification-card" key={qualification.course}>
              <p className="qualification-duration">
                {qualification.duration}
              </p>
              <h3>{qualification.course}</h3>
              <p>{qualification.institute}</p>
              <strong>{qualification.score}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading experience-heading">
          <div>
            <p className="section-tag">Work</p>
            <h2>Experience</h2>
          </div>
          <strong className="experience-total">2 Year 3 Month</strong>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.role}>
              <p className="experience-duration">{experience.duration}</p>
              <h3>{experience.role}</h3>
              <p className="experience-company">
                {experience.company} | {experience.location}
              </p>
              <ul className="project-points">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="section-tag">Projects</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid highlights-section" id="highlights">
        <div className="panel">
          <p className="section-tag">Highlights</p>
          <h2>Highlights</h2>
          <ul className="project-points">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-strip" id="contact">
        <div>
          <p className="section-tag">Contact</p>
          <h2>Available for Freelance Work &amp; Full-Time Opportunities</h2>
          <p className="contact-note">
            Currently seeking Front-End Developer opportunities where I can
            contribute and grow as a developer.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
