import './App.css'

const profile = {
  name: 'Shamiya Parveen',
  title: 'Frontend Developer',
  location: 'India',
  email: 'shamiya9922@gmail.com',
  phone: '+91 60032 92822',
  summary:
    'Frontend Developer with 2+ years of experience building responsive, production-grade web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.',
  about:
    'Skilled in developing reusable UI components, integrating REST APIs, and delivering pixel-perfect, cross-device interfaces from Figma designs. Also experienced in building and customizing WordPress, Elementor, WooCommerce, and Shopify websites.',
  linkedin:
    'https://www.linkedin.com/in/shamiya-parveen-123196232/',
  github: 'https://github.com/ShamiyaParveen',
  resume: '/shamiya-parveen-resume.pdf',
}

const aboutPoints = [
  'I build responsive, production-grade web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.',
  'I develop reusable UI components, integrate REST APIs, and convert Figma designs into pixel-perfect, cross-device interfaces.',
  'I also build and customize WordPress websites using Elementor, WooCommerce, custom themes, and Custom Post Types.',
  'I have experience working on ecommerce, corporate, portfolio, real estate, restaurant, booking, job portal, and blog/news websites.',
  'I also developed and customized a responsive Shopify ecommerce website with product listings, collections, navigation, and user-friendly layouts.',
]

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['JavaScript', 'React.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Styling & UI',
    items: ['Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'CMS & Ecommerce',
    items: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Custom Post Types',
      'Shopify',
    ],
  },
  {
    title: 'Other',
    items: [
      'API Integration',
      'Firebase',
      'Responsive / Mobile-First Design',
      'Figma to Code',
    ],
  },
]

const qualifications = [
  {
    institute: 'Abeda Inamdar Senior College, Pune',
    course: 'B.Sc. Information Technology',
    duration: '2017 - 2020',
    score: '80.26%',
  },
]

const experiences = [
  {
    company: 'Westonik Solutions Pvt. Ltd.',
    role: 'Frontend Developer',
    duration: 'Jul 2024 - Jul 2026',
    location: 'Prayagraj, India',
    points: [
      'Developed responsive, reusable UI components and page structures using React.js, JavaScript, HTML5, CSS3, and Bootstrap across desktop, tablet, and mobile breakpoints.',
      'Converted Figma designs into pixel-perfect, cross-browser interfaces with a focus on usability and layout consistency.',
      'Built and customized WordPress websites using Elementor, WooCommerce, custom themes, and Custom Post Types for ecommerce, corporate, portfolio, real estate, restaurant, booking, job portal, and blog/news clients.',
      'Collaborated with designers and backend teams to integrate APIs and ship client projects on schedule.',
      'Independently developed and customized a responsive Shopify ecommerce website with product listings, collections, navigation, and user-friendly layouts.',
    ],
  },
  {
    company: 'Edera India',
    role: 'WordPress Developer Intern',
    duration: 'Mar 2023 - Jun 2023',
    location: 'Remote - Pune',
    points: [
      'Developed and customized WordPress websites using Elementor, improving UI/UX consistency and cross-device responsiveness.',
      'Implemented on-page SEO and performance-optimization techniques to improve load times and search visibility.',
      'Collaborated with the team to deliver client-based projects on schedule.',
    ],
  },
]

const projects = [
  {
    title: 'Netflix Clone',
    subtitle: 'React.js, JavaScript, Firebase',
    description:
      'Built a Netflix-inspired streaming UI with Firebase authentication and dynamic movie data via third-party API integration.',
    stack: ['React.js', 'JavaScript', 'Firebase'],
    liveLink:
      'https://netflix-clone-react-firebase-phi.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/netflix-clone-react-firebase',
  },
  {
    title: 'E-Commerce Website',
    subtitle: 'React.js, JavaScript, HTML5, CSS3',
    description:
      'Built a responsive ecommerce frontend with product listing, search, filtering, and a localStorage-based shopping cart.',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    liveLink:
      'https://zoobiya-ecommerce-frontend.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/zoobiya-ecommerce-frontend',
  },
  {
    title: 'Single Page Website',
    subtitle: 'React.js, Vite, HTML5, CSS3',
    description:
      'Built a responsive single-page application using reusable React.js components, with Web3Forms contact integration and video modal functionality.',
    stack: ['React.js', 'Vite', 'HTML5', 'CSS3'],
    liveLink:
      'https://single-page-website-react.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/single-page-website-react',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Qualification', href: '#qualification' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a href="#home" className="site-logo">
          Shamiya Parveen
        </a>

        <nav className="site-nav" aria-label="Portfolio sections">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Developer</p>

          <h1>{profile.name}</h1>

          <p className="hero-title">{profile.title}</p>

          <p className="hero-summary">
            {profile.summary}
          </p>

          <p className="hero-summary">
            {profile.about}
          </p>

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

            <a
              href={profile.resume}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
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
              <span>Experience</span>
              <strong>2+ Years</strong>
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
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </li>
          </ul>
        </aside>
      </section>

      {/* ABOUT + SKILLS */}
      <section className="content-grid">
        <div className="panel" id="about">
          <p className="section-tag">About</p>
          <h2>About Me</h2>

          <div className="about-list">
            {aboutPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>

        <div className="panel" id="skills">
          <p className="section-tag">Skills</p>
          <h2>Technical Skills</h2>

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

      {/* QUALIFICATION */}
      <section
        className="qualification-section"
        id="qualification"
      >
        <div className="section-heading">
          <p className="section-tag">Education</p>
          <h2>Qualification</h2>
        </div>

        <div className="qualification-grid">
          {qualifications.map((qualification) => (
            <article
              className="qualification-card"
              key={qualification.course}
            >
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

      {/* EXPERIENCE */}
      <section className="experience-section" id="experience">
        <div className="section-heading experience-heading">
          <div>
            <p className="section-tag">Work</p>
            <h2>Experience</h2>
          </div>

          <strong className="experience-total">
            2+ Years of Experience
          </strong>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <p className="experience-duration">
                {experience.duration}
              </p>

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

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="section-tag">Portfolio</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <p className="project-type">
                {project.subtitle}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="stack-list">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="stack-pill"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-strip" id="contact">
        <div>
          <p className="section-tag">Contact</p>

          <h2>Let's Connect</h2>

          <p className="contact-note">
            Feel free to reach out by phone, email, LinkedIn,
            or GitHub.
          </p>
        </div>

        <div className="contact-links">
          <a
            href={`tel:${profile.phone.replaceAll(' ', '')}`}
          >
            {profile.phone}
          </a>

          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App