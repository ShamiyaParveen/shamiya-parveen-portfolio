import './App.css'

const profile = {
  name: 'Shamiya Parveen',
  title: 'Front-End Developer | React.js Specialist',
  location: 'India',
  email: 'shamiya9922@gmail.com',
  phone: '+91 60032 92822',
  summary:
    'Building responsive, production-grade web applications with modern UI/UX.',
  about:
    'Frontend Developer with 2+ years of experience building responsive web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress, Elementor, WooCommerce, and Shopify.',
  linkedin:
    'https://www.linkedin.com/in/shamiya-parveen-123196232/',
  github: 'https://github.com/ShamiyaParveen',
  resume: '/shamiya-parveen-resume.pdf',
}

const aboutPoints = [
  'I build responsive, production-grade web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.',
  'I create reusable UI components, integrate REST APIs, and convert Figma designs into pixel-perfect, cross-device interfaces.',
  'I also build and customize WordPress websites using Elementor, WooCommerce, custom themes, and Custom Post Types.',
  'I have worked on ecommerce, corporate, portfolio, real estate, restaurant, booking, job portal, and blog/news websites.',
  'I also have experience developing and customizing responsive Shopify ecommerce websites.',
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
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
    title: 'Tools & Technologies',
    items: [
      'API Integration',
      'Firebase',
      'Responsive Design',
      'Mobile-First Design',
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
    subtitle: 'React + Firebase',
    points: [
      'Built a Netflix-inspired streaming UI using React.js and JavaScript.',
      'Implemented Firebase authentication for user login functionality.',
      'Integrated third-party APIs to fetch and display dynamic movie data.',
      'Designed a responsive interface for desktop, tablet, and mobile devices.',
    ],
    stack: [
      'React.js',
      'JavaScript',
      'Firebase',
      'API Integration',
    ],
    liveLink:
      'https://netflix-clone-react-firebase-phi.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/netflix-clone-react-firebase',
  },
  {
    title: 'Zoobiya E-Commerce Frontend',
    subtitle: 'Responsive Ecommerce Frontend',
    points: [
      'Built a responsive ecommerce frontend using React.js, JavaScript, HTML5, and CSS3.',
      'Implemented product listing, search, and filtering functionality.',
      'Created a localStorage-based shopping cart experience.',
      'Focused on responsive layouts and user-friendly shopping interactions.',
    ],
    stack: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
    liveLink:
      'https://zoobiya-ecommerce-frontend.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/zoobiya-ecommerce-frontend',
  },
  {
    title: 'Single Page Website',
    subtitle: 'React.js, Vite, HTML5, CSS3',
    points: [
      'Built a responsive single-page application using reusable React.js components.',
      'Implemented Web3Forms contact form integration.',
      'Added video modal functionality for an interactive user experience.',
      'Designed the website to work smoothly across desktop, tablet, and mobile devices.',
    ],
    stack: [
      'React.js',
      'Vite',
      'HTML5',
      'CSS3',
      'Web3Forms',
    ],
    liveLink:
      'https://single-page-website-react.vercel.app/',
    githubLink:
      'https://github.com/ShamiyaParveen/single-page-website-react',
  },
]

const highlights = [
  '2+ years of professional frontend development experience.',
  'Strong experience with React.js and responsive UI development.',
  'Experienced in WordPress, Elementor, WooCommerce, and Shopify.',
  'Skilled in REST API integration and Firebase.',
  'Experienced in converting Figma designs into responsive interfaces.',
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

      {/* HEADER */}
      <header className="site-header">
        <a href="#home" className="site-logo">
          {profile.name}
        </a>

        <nav
          className="site-nav"
          aria-label="Portfolio sections"
        >
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

          <p className="eyebrow">
            Resume Portfolio
          </p>

          <h1>{profile.name}</h1>

          <p className="hero-title">
            {profile.title}
          </p>

          <p className="hero-summary">
            {profile.summary}
          </p>

          <p className="hero-summary">
            {profile.about}
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-button"
            >
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

        {/* QUICK INFO */}
        <aside className="hero-card">

          <p className="card-label">
            Quick Info
          </p>

          <ul className="info-list">

            <li>
              <span>Role</span>
              <strong>
                Frontend Developer
              </strong>
            </li>

            <li>
              <span>Experience</span>
              <strong>
                2+ Years
              </strong>
            </li>

            <li>
              <span>Location</span>
              <strong>
                {profile.location}
              </strong>
            </li>

            <li>
              <span>Email</span>
              <strong>
                {profile.email}
              </strong>
            </li>

            <li>
              <span>Phone</span>
              <strong>
                {profile.phone}
              </strong>
            </li>

            <li>
              <span>Resume</span>
              <strong>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </strong>
            </li>

          </ul>
        </aside>
      </section>

      {/* ABOUT + SKILLS */}
      <section className="content-grid">

        {/* ABOUT */}
        <div
          className="panel"
          id="about"
        >
          <p className="section-tag">
            About
          </p>

          <h2>
            About Me
          </h2>

          <div className="about-list">

            {aboutPoints.map((point) => (
              <p key={point}>
                {point}
              </p>
            ))}

          </div>
        </div>

        {/* SKILLS */}
        <div
          className="panel"
          id="skills"
        >
          <p className="section-tag">
            Skills
          </p>

          <h2>
            Technical Skills
          </h2>

          <div className="skill-groups">

            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="skill-group"
              >

                <p className="group-title">
                  {group.title}
                </p>

                <div className="skill-list">

                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
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

          <p className="section-tag">
            Education
          </p>

          <h2>
            Qualification
          </h2>

        </div>

        <div className="qualification-grid">

          {qualifications.map(
            (qualification) => (

              <article
                className="qualification-card"
                key={qualification.course}
              >

                <p className="qualification-duration">
                  {qualification.duration}
                </p>

                <h3>
                  {qualification.course}
                </h3>

                <p>
                  {qualification.institute}
                </p>

                <strong>
                  {qualification.score}
                </strong>

              </article>

            )
          )}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        className="experience-section"
        id="experience"
      >

        <div className="section-heading experience-heading">

          <div>

            <p className="section-tag">
              Work
            </p>

            <h2>
              Experience
            </h2>

          </div>

          <strong className="experience-total">
            2+ Years of Experience
          </strong>

        </div>

        <div className="experience-grid">

          {experiences.map(
            (experience) => (

              <article
                className="experience-card"
                key={`${experience.company}-${experience.role}`}
              >

                <p className="experience-duration">
                  {experience.duration}
                </p>

                <h3>
                  {experience.role}
                </h3>

                <p className="experience-company">
                  {experience.company} |{' '}
                  {experience.location}
                </p>

                <ul className="project-points">

                  {experience.points.map(
                    (point) => (
                      <li key={point}>
                        {point}
                      </li>
                    )
                  )}

                </ul>

              </article>

            )
          )}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        className="projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p className="section-tag">
            Projects
          </p>

          <h2>
            Projects
          </h2>

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

              <h3>
                {project.title}
              </h3>

              <ul className="project-points">

                {project.points.map(
                  (point) => (
                    <li key={point}>
                      {point}
                    </li>
                  )
                )}

              </ul>

              <div className="stack-list">

                {project.stack.map(
                  (item) => (
                    <span
                      key={item}
                      className="stack-pill"
                    >
                      {item}
                    </span>
                  )
                )}

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

      {/* HIGHLIGHTS */}
      <section
        className="content-grid highlights-section"
        id="highlights"
      >

        <div className="panel">

          <p className="section-tag">
            Highlights
          </p>

          <h2>
            Highlights
          </h2>

          <ul className="project-points">

            {highlights.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* CONTACT */}
      <section
        className="contact-strip"
        id="contact"
      >

        <div>

          <p className="section-tag">
            Contact
          </p>

          <h2>
            Let's Connect
          </h2>

          <p className="contact-note">
            Feel free to reach out by phone,
            email, LinkedIn, or GitHub.
          </p>

        </div>

        <div className="contact-links">

          <a
            href={`tel:${profile.phone.replaceAll(
              ' ',
              ''
            )}`}
          >
            {profile.phone}
          </a>

          <a
            href={`mailto:${profile.email}`}
          >
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