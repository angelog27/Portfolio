import React, { useState, useEffect, useMemo } from 'react';

// Star field for the background effects
const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
    }));
  }, []);

  //Generates the random stars, then remembers them so we dont re-render them everytime it updates.
  return (
    <div style={starStyles.container}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            ...starStyles.star,
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
// Styles for the star field
const starStyles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    animationName: 'twinkle',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
};
// Main Portfolio Component
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //CSS keyframes for animations
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  //Experience tab in chronological order.
  const experience = [
    {
      role: ' Software Engineering Intern',
      company: 'DSC Dredge',
      img: '/DSC-LOGO.png',
      period: 'June 2026 - August 2026',
      location: 'Reserve, LA',
      description: [

        <li>
          Architected and deployed an automated SSL/TLS certificate management 
          system using Caddy Server across a fleet of company dredges, replacing 
          manual certificate workflows with no downtime automatic renewal via 
          the ACME protocol.
        </li>,
        <li>
          Built a SaltStack pipeline to remotely provision, 
          configure, and manage Caddy across multiple dredge systems 
          (Salt Minions), using Pillar data to 
          deliver unique per dredge Caddyfile configurations from a central Salt Master.
        </li>,
        <li>
          Designed and maintained Salt state files, top.sls mappings, and per device 
          Pillar definitions to enable software with only one command
        </li>,
        <li>
          Collaborated daily with automation engineers to design and implement 
          industrial network infrastructure, gaining hands on experience with 
          Red Lion devices,Guacamole servers, HMI's and linux based systems.
        </li>,
        <li>
          Constructed a react based dashboard using fast API as well as python focused basckend
          to monitor saltMinions, their status as well as the health of our SaltMaster
        </li>
      ]
    },
     { 
      role: 'Disney Leadership Program',
      company: 'Walt Disney',
      img: '/DISNEY-WHITE.png',
      period: 'March 8th 2026 - March 14th 2026',
      location: 'Orlando, FL',
      description: [
        <li>
          Operated in a high crowd volume, guest role at Walt Disney World, 
          developing strong communication and situational problem solving skills 
          while managing guest experience across a fast paced theme park environment.
        </li>,
        <li>
          Gained behind the scenes exposure to large scale park operations, 
          including ride workflows, crew coordination, and the operational 
          standards that drive one of the world's most visited entertainment venues.
        </li>,
        <li>
          Completed a competitive leadership development workshop at the University 
          of Florida alongside college students from across the country, studying 
          leadership styles, team dynamics, and decision making under pressure.
        </li>
      ]
    },
    {
      role: 'Software Engineering Intern',
      img: '/DSC-LOGO.png',
      company: 'DSC Dredge',
      period: 'June 2024 - August 2024',
      location: 'Reserve, LA',
      description: [
        <li>
          Developed internal tools using Python to automate SSL certificate monitoring and reporting for over 100 network devices.,
        </li>,
        <li>
          Built an SSL certificate monitoring system integrating Cradlepoint Netcloud and Smartsheet APIs.,
        </li>,
        <li>
          Developed a multi-threaded Python application automatically monitoring 100+ network devices with Firebase data storage.,
        </li>,
        <li>
          Implemented cross-platform device comparison between Smartsheet and Netcloud and automated Excel reporting to make information easier to display and read.,
        </li>,
        <li>
          Utilized Python virtual environments and a wide range of libraries (requests, openpyxl, firebase-admin, threading, etc.) to ensure scalable code development.,
        </li>,
        <li>
          Collaborated with other senior engineers on technical implementation and everyday problem solving.,
        </li>,
        <li>
          Renewed SSL certificates through Ubuntu using a VPN, as well as renewed SSL certificates using WINSCP.,
        </li>,
        <li>
          Monitored SSL certificates daily to cross reference data already pulled in to get the most accurate information possible.
        </li>
      ]
    }
  ];

  //Education tab in chronological order.
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Louisiana State University',
      period: 'Expected Graduation: May 2027',
      honors: ['Dean\'s List', 'TOPS Scholarship', 'AVG GPA: 3.61']
    },
    {
      degree: 'High School Diploma',
      institution: 'Dutchtown High School',
      period: 'Graduated: May 2023',
      honors: ['Honor Roll', 'GPA: 4.0']
    }
  ];

  //My projects ive worked on since getting into college with pictures as well.
  const projects = [
    {
      name: 'REPRANK',
      image: '/reprank.png', //PICTURE PATH
      description: <li>
        <ul>Developed a full stack fitness tracking program using Flask with Firebase Firestore featuring user customization,levels, rankings, social features as well as chart visualizations. Utilizing JavaScript, and HTML for frontend coding, and Python for backend design.</ul>
      </li>,
      tech: ['Flask', 'Firebase', 'Python', 'JavaScript'],
    },

    {
  name: 'Reelette',
  image: '/reelette.png',
  url: 'https://reelette-movie.com',
  description: (
    <>
      <li>
        A full stack movie discovery app built to solve the "what do we watch tonight?" 
        problem. Users select their streaming services on signup and Reelette filters 
        everything down to only what they can actually watch.
      </li>
      <li>
        Features a signature roulette wheel that randomly picks a movie based on 
        filters you set like genre, runtime, and rating. Also includes a personal 
        Library, a Discover tab, Movie Groups for watching with friends, and an AI 
        agent called The Director that gives personalized recommendations through chat.
      </li>
      <li>
        My junior year capstone project at LSU that I have continued building past the 
        class. Still actively adding features today. Feel free to check it out and make 
        an account.
      </li>
    </>
  ),
  tech: ['React', 'TypeScript', 'Python', 'Flask', 'Firebase', 'TMDb API', 'Claude AI']
},

    {
      name: 'Steam Achievement Tracker',
      image: '/steam.png', //PICTURE PATH
      description: <li>
        <ul> In a group Software design/development project me and a team of engineers built and designed a web application
using API's, Firebase, and a Python script to fetch and display Steam user achievements. Allowed for a
motivational competitive style of gaming. This was then formally presented.</ul>
      </li>,
      tech: ['html', 'css', 'Python', 'Steam API', 'JavaScript']
    }
  ];
  
  //Skills tab to show my frontend, backend and programming language skills in a nice format.
  const skills = {
  'Languages': ['Python', 'C', 'JavaScript', 'TypeScript', 'Java', 'Assembly', 'YAML', 'Bash'],
  'Frontend': ['React', 'HTML/CSS', 'Vite', 'Tailwind CSS'],
  'Backend': ['Flask', 'FastAPI', 'Node.js'],
  'DevOps & Infrastructure': ['SaltStack', 'Linux', 'WSL', 'Caddy Server', 'Systemd', 'Tailscale'],
  'Tools & Technologies': ['Git', 'Docker', 'Unity', 'GDB', 'PuTTY'],
  'Databases & Cloud': ['Firebase Firestore', 'Firebase Auth', 'Google Drive API'],
  'APIs & Integrations': ['TMDb API', 'Cradlepoint NetCloud API', 'Smartsheet API', 'Tailscale API', 'Gmail API'],
};
  
  //descriptions for each tab whenever they are clicked on.
  const tabDescriptions = {
    experience: "A look at my professional journey, including internships and hands-on engineering roles where I built real world tools.",
    education: "My academic path, from high school through my current studies as a Computer Science student at LSU.",
    projects: "Personal and team projects I've built along the way, from fitness apps to web platforms.",
    skills: "The languages, frameworks, and tools I've picked up throughout my education and work experience.",
  };

  // Generate responsive styles based on window width
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      zIndex: 1,
    },
    hero: {
      display: 'flex',
      position: 'relative',
      flexDirection: windowWidth <= 1279 ? 'column' : 'row',
    },
    imageContainer: {
      flex: windowWidth <= 1279 ? 'none' : '0 0 35%',
      width: windowWidth <= 1279 ? '100%' : 'auto',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'top',
      justifyContent: 'center',
      position: 'relative',
      padding: windowWidth <= 600 ? '30px 20px' : windowWidth <= 1279 ? '40px' : '80px',
    },
    imagePlaceholder: {
      width: windowWidth <= 600 ? '220px' : windowWidth <= 1279 ? '260px' : '400px',
      height: windowWidth <= 600 ? '290px' : windowWidth <= 1279 ? '350px' : '550px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#111111',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(100%)',
      border: '1px solid #333333',
      transition: 'filter 0.3s ease',
    },
    aboutSection: {
      flex: windowWidth <= 1279 ? 'none' : '0 0 50%',
      width: windowWidth <= 1279 ? '100%' : 'auto',
      display: 'flex',
      alignItems: 'center',
      padding: windowWidth <= 600 ? '30px 20px' : windowWidth <= 1279 ? '40px' : '80px',
      backgroundColor: '#000000',
    },
    aboutContent: {
      maxWidth: windowWidth <= 1279 ? '100%' : '600px',
    },
    name: {
      fontSize: windowWidth <= 600 ? '36px' : windowWidth <= 1279 ? '48px' : '72px',
      fontWeight: '700',
      margin: '0 0 16px 0',
      letterSpacing: windowWidth <= 600 ? '-1px' : '-2px',
      lineHeight: '1',
    },
    title: {
      fontSize: windowWidth <= 600 ? '18px' : '24px',
      fontWeight: '300',
      margin: '0 0 40px 0',
      color: '#999999',
      letterSpacing: '1px',
    },
    bio: {
      fontSize: windowWidth <= 600 ? '15px' : '18px',
      lineHeight: '1.8',
      margin: '0 0 40px 0',
      color: '#cccccc',
    },
    contact: {
      display: 'flex',
      flexDirection: windowWidth <= 600 ? 'column' : 'row',
      gap: windowWidth <= 600 ? '16px' : '32px',
      alignItems: windowWidth <= 600 ? 'center' : 'flex-start',
    },
    contactHeader: {
      width: windowWidth <= 600 ? '100%' : 'auto',
      textAlign: windowWidth <= 600 ? 'center' : 'left',
    },
    contactLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      borderBottom: '2px solid #ffffff',
      paddingBottom: '4px',
      transition: 'opacity 0.3s',
      cursor: 'pointer',
    },
    nav: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: windowWidth <= 600 ? 'wrap' : 'nowrap',
      gap: '0',
      backgroundColor: '#000000',
      borderBottom: '1px solid #333333',
      marginBottom: '30px',
    },
    tab: {
      padding: windowWidth <= 600 ? '12px 10px' : '12px 24px',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#666666',
      fontSize: windowWidth <= 600 ? '11px' : '14px',
      fontWeight: '600',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all 0.3s',
      borderRight: '1px solid #333333',
      flex: windowWidth <= 600 ? '1 1 48%' : 'none',
    },
    homeTab: {
      padding: '8px 16px',
      fontSize: '12px',
    },
    activeTab: {
      color: '#ffffff',
      backgroundColor: '#111111',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: windowWidth <= 600 ? '40px 20px' : windowWidth <= 1279 ? '60px 40px' : '120px 80px',
    },
    section: {
      animation: 'fadeIn 0.5s ease-in',
    },
    card: {
      marginBottom: '60px',
      paddingBottom: '60px',
      borderBottom: '1px solid #222222',
    },
    cardTitle: {
      fontSize: windowWidth <= 600 ? '22px' : '32px',
      fontWeight: '600',
      margin: '0 0 8px 0',
      letterSpacing: '-1px',
    },
    cardSubtitle: {
      fontSize: windowWidth <= 600 ? '16px' : '20px',
      fontWeight: '400',
      margin: '0 0 8px 0',
      color: '#999999',
    },
    cardPeriod: {
      fontSize: '14px',
      color: '#666666',
      margin: '0 0 20px 0',
      letterSpacing: '1px',
    },
    cardDescription: {
      fontSize: windowWidth <= 600 ? '14px' : '16px',
      lineHeight: '1.8',
      color: '#cccccc',
      margin: '0',
    },
    honors: {
      marginTop: '20px',
    },
    honorsLabel: {
      fontSize: '14px',
      color: '#999999',
      margin: '0 0 12px 0',
      fontWeight: '600',
      letterSpacing: '1px',
    },
    honorBadge: {
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: '12px',
      fontWeight: '600',
      marginRight: '12px',
      marginBottom: '8px',
      letterSpacing: '0.5px',
    },
    techStack: {
      marginTop: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
    },
    techBadge: {
      padding: '8px 16px',
      border: '1px solid #ffffff',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: windowWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
      gap: windowWidth <= 600 ? '30px' : '60px',
    },
    skillCategory: {
      marginBottom: '40px',
    },
    skillCategoryTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 24px 0',
      letterSpacing: '1px',
      color: '#ffffff',
      borderBottom: '2px solid #ffffff',
      paddingBottom: '12px',
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
    },
    skillItem: {
      padding: '12px 20px',
      backgroundColor: '#111111',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '500',
      border: '1px solid #333333',
      letterSpacing: '0.5px',
    },
    projectLayout: {
      display: 'flex',
      flexDirection: windowWidth <= 1279 ? 'column' : 'row',
      gap: windowWidth <= 600 ? '20px' : windowWidth <= 1279 ? '30px' : '50px',
      alignItems: 'flex-start',
    },
    projectImageContainer: {
      width: windowWidth <= 600 ? '100%' : windowWidth <= 1279 ? '100%' : '600px',
      height: windowWidth <= 600 ? '220px' : windowWidth <= 1279 ? '300px' : '400px',
      flexShrink: 0,
      overflow: 'hidden',
      backgroundColor: '#111111',
      border: '1px solid #333333',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    projectDetails: {
      flex: 1,
    },
    logo: {
      width: '24px',
      height: '24px',
      marginRight: '8px',
      verticalAlign: 'middle',
    },
    companyLogo: {
      width: '40px',
      height: '40px',
      marginRight: '12px',
      verticalAlign: 'middle',
      objectFit: 'contain',
    },
    contactIcon: {
      width: '34px',
      height: '34px',
    },
    footer: {
      backgroundColor: '#000000',
      borderTop: '1px solid #333333',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '80px',
    },
    footerText: {
      color: '#666666',
      fontSize: windowWidth <= 600 ? '12px' : '14px',
      margin: '8px 0',
      letterSpacing: '1px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Animated Star Background */}
      <StarField />

      {/* Hero Section */}
      <div style={styles.hero} className="hero">
        {/* Left - Large Image (only on Home) */}
        {activeTab === null && (
          <div style={styles.imageContainer} className="image-container">
            <div
              className="image-placeholder"
              style={{
                ...styles.imagePlaceholder,
                transform: isImageHovered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isImageHovered ? '0 20px 60px rgba(255, 255, 255, 0.2)' : 'none',
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <img
                src="/angelo.JPEG"
                alt="Angelo"
                style={{
                  ...styles.image,
                  filter: isImageHovered ? 'grayscale(50%)' : 'grayscale(100%)',
                }}
              />
            </div>
          </div>
        )}

        {/* Right - About Me / Tab Header */}
        <div className="about-section" style={{
          ...styles.aboutSection,
          ...(activeTab !== null ? { flex: '1', justifyContent: 'center', padding: '60px 80px' } : {})
        }}>
          <div className="about-content" style={{
            ...styles.aboutContent,
            ...(activeTab !== null ? { textAlign: 'center', maxWidth: '1200px' } : {})
          }}>
            <nav className="nav-bar" style={{
              ...styles.nav,
              ...(activeTab !== null ? { justifyContent: 'center' } : {})
            }}>
              <button
                onClick={() => setActiveTab(null)}
                style={{
                  ...styles.tab,
                  ...styles.homeTab,
                  ...(activeTab === null ? styles.activeTab : {})
                }}
              >
                Home
              </button>
              {['experience', 'education', 'projects', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    ...styles.tab,
                    ...(activeTab === tab ? styles.activeTab : {})
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
            {activeTab === null ? (
              <>
              
                <h1 style={styles.name}>Angelo Gonzales</h1>
                <h2 style={styles.title}>Software Engineer</h2>
                <p style={styles.bio}>
                  I'm a junior Computer Science student at LSU with strong interest and experience
                  in backend development and web development. Over the summer I completed a
                  software engineering internship at DSC Dredge, where I worked with API's and built real
                  world tools using Python. I have experience using JavaScript, C, html, Python and assembly. This coming Summer, I look forward
                  to further developing my skills as a Software Engineering Intern at DSC Dredge once again.
                  I'm very passionate in what I do, and I'm always looking for new ways to learn and improve my
                  problem solving skills. Thanks for visiting.
                </p>
                <h1 style={styles.name}>Why me?</h1>
                <p style={styles.bio}>
                  I am a <b>dedicated</b> and <b>passionate</b> software engineering student with strong technical skills.
                  Not only do I have the experience and knowledge to excel in software engineering roles, but
                   I also have the drive and work ethic to continuously learn and grow. 
                   I am a <b>team player</b> who thrives in collaborative environments, and I am always eager to contribute my skills to help achieve team goals.
                    With my combination of technical expertise, passion for software development, and strong work ethic, I believe I would be a valuable asset to any software engineering team.
                    As someone who has done the dirty work of playing sports and leading teams,I have developed a strong sense of discipline, teamwork, and leadership that I bring to my software engineering work. I am not afraid to take on challenges and put in the hard work necessary to achieve success, and I am always looking for ways to improve and grow as an engineer.
                </p>
                <div style={styles.contact}>
                  <h4 style={styles.contactHeader}>Connect with me:</h4>
                  <a href="mailto:gonzales12098@gmail.com" style={styles.contactLink}><img src="/email.webp" alt="Email" style={styles.contactIcon} /></a>
                  <a href="https://github.com/angelog27" style={styles.contactLink}><img src = "white-github.png" alt = "GitHub" style = {styles.contactIcon} /></a>
                  <a href="https://www.linkedin.com/in/angelo-gonzales-bb0a4a358/" style={styles.contactLink}><img src = "white-linkedin.png" alt = "LinkedIn" style = {styles.contactIcon} /></a>
                </div>
              </>
            ) : (
              <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
                <h1 style={styles.name}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                <p style={styles.bio}>{tabDescriptions[activeTab]}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div style={styles.content} className="content-area">
        {activeTab === 'experience' && (
          <div style={styles.section}>
            {experience.map((exp, index) => (
              <div key={index} style={{
                ...styles.card,
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}>
                <h3 style={styles.cardTitle}>{exp.role}</h3>
                <h4 style={styles.cardSubtitle}>
                  {exp.img && <img src={exp.img} alt={exp.company} style={styles.companyLogo} />}
                  {exp.company}
                </h4>
                <p style={styles.cardPeriod}>{exp.period}</p>
                <p style={styles.cardDescription}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div style={styles.section}>
            {education.map((edu, index) => (
              <div key={index} style={{
                ...styles.card,
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}>
                <h3 style={styles.cardTitle}>{edu.degree}</h3>
                <h4 style={styles.cardSubtitle}>{edu.institution}</h4>
                <p style={styles.cardPeriod}>{edu.period}</p>
                {edu.honors && (
                  <div style={styles.honors}>
                    <p style={styles.honorsLabel}>Honors:</p>
                    {edu.honors.map((honor, i) => (
                      <span key={i} style={styles.honorBadge}>{honor}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
  <div style={styles.section}>
    {projects.map((project, index) => (
      <div key={index} style={{
        ...styles.card,
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${index * 0.15}s`,
        opacity: 0,
      }}>
        <div style={styles.projectLayout} className="project-layout">
          {/* Project Image with Hover Effect - LEFT SIDE */}
          <div
            className="project-image-wrapper"
            style={{
              ...styles.projectImageContainer,
              transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hoveredProject === index ? '0 20px 60px rgba(255, 255, 255, 0.2)' : 'none',
            }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img 
              src={project.image} 
              alt={project.name}
              style={styles.projectImage}
            />
          </div>

          {/* Project Details - RIGHT SIDE */}
          <div style={styles.projectDetails}>
            <h3 style={styles.cardTitle}>{project.name}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            {project.details && (project.details.length > 0) && (
              <ul style={styles.bulletList}>
                {project.details.map((detail, i) => (
                  <li key={i} style={styles.bulletItem}>
                    <span style={styles.bulletPoint}>●</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            <div style={styles.techStack}>
              {project.tech.map((tech, i) => (
                <span key={i} style={styles.techBadge}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)}


        {activeTab === 'skills' && (
          <div style={styles.section}>
            <div style={styles.skillsGrid} className="skills-grid-container">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category} style={{
                  ...styles.skillCategory,
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}>
                  <h3 style={styles.skillCategoryTitle}>{category}</h3>
                  <div style={styles.skillsList}>
                    {items.map((skill, i) => (
                      <span key={i} style={styles.skillItem}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      
      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 Angelo Gonzales</p>
        <p style={styles.footerText}>Last updated: February 19, 2026</p>
      </footer>
    </div>
  );
};

export default Portfolio;

