// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize Typed.js
    const typed = new Typed('.typed-text', {
        strings: [
            'Full Stack Developer',
            'Android Developer',
            'Web Developer',
            'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6c63ff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c63ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Project data
    const projects = [
        {
            title: 'SATELLITE DETAIL',
            description: 'Spring Boot API with MySQL database to fetch satellite details, including longitude, latitude, and altitude for precise tracking.',
            image: 'project2.png',
            technologies: ['Spring Boot', 'MySQL', 'Java'],
            link: 'https://github.com/vinaygupta17g/Satellite-Detail'
        },
        {
            title: 'CHATAPP',
            description: 'Mobile application enabling seamless messaging and social connectivity through chat and follow features.',
            image: 'project3.png',
            technologies: ['Android', 'Java', 'Firebase'],
            link: 'https://github.com/vinaygupta17g/ChatApp'
        },
        {
            title: 'FOOD APP',
            description: 'Android food ordering app with cart functionality, intuitive UI/UX, and Android SDK integration.',
            image: 'project4.png',
            technologies: ['Android', 'Java', 'SQLite'],
            link: 'https://github.com/vinaygupta17g/Food-App'
        },
        {
            title: 'SCIENTIFIC CALCULATOR',
            description: 'Scientific calculator web app supporting arithmetic, trigonometric, logarithmic, exponential, and power functions.',
            image: 'project5.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://vinaykumar17g.github.io/calc/'
        },
        {
            title: 'WEATHER APP',
            description: 'Responsive weather app fetching real-time API data, displaying temperature, humidity, and conditions.',
            image: 'project6.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://vinaykumar17g.github.io/weather/'
        }
    ];

    // Dynamically load projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p style="text-align:justify">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        let contact = async (data)=>
        {
            let api = await fetch("https://contact-backend-kappa.vercel.app/contacts",{
            "method":"POST",
            "headers":{"content-type":"application/json"},
            "body":JSON.stringify(formData)
        });
        let response =await api.json();
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        }
        contact(formData)
    });

    // Add animation to skill bars
    const skillBars = document.querySelectorAll('.progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
    };

    // Animate skill bars when they come into view
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
}); 