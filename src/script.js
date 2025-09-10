const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const hamburgerToggle = document.getElementById('hamburger-toggle');
const body = document.body;
const scrollTopBtn = document.getElementById('scroll-top-btn');
const form = document.querySelector('.contact-form');
const navItems = document.querySelectorAll('.nav-item');
const themeIcon = themeToggleBtn.querySelector('i');

// Set default dark mode
body.classList.add('dark');

// Toggle Dark/Light Mode
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    if (body.classList.contains('dark')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    updateLanguage(); // Ensure language updates after theme change
});

// Toggle Hamburger Menu (only if hamburger exists)
if (hamburgerToggle) {
    hamburgerToggle.addEventListener('click', () => {
        document.querySelector('.preview-nav').classList.toggle('active');
        hamburgerToggle.classList.toggle('active');
    });
}

// Close menu when clicking a nav item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.preview-nav').classList.remove('active');
        if (hamburgerToggle) {
            hamburgerToggle.classList.remove('active');
        }
    });
});

// Toggle Language
let lang = 'sr';

const translations = {
    sr: {
        heroTitle: 'Pozdrav, ja sam <span>Nikola Dacković</span>',
        heroDesc: 'Strastveni frontend developer s fokusom na moderni i responzivni web development',
        aboutTitle: 'O meni',
        aboutDesc: 'Ja sam Nikola Dacković, motivisani frontend developer iz Srbije, koji želi da započne svoju profesionalnu karijeru u frontend razvoju. Posvetio sam se učenju modernih web tehnologija i izradi interaktivnih korisničkih interfejsa. U slobodno vreme nastavim da istražujem i vežbam React, JavaScript i responzivni dizajn, jačajući svoje veštine i pomerajući svoje granice. Tražim svoju prvu priliku u frontend razvoju, gde mogu da doprinesem, učim od iskusnijih profesionalaca i nastavim da napredujem. Strastven, uporan i radoznao, težim da u svakoj prilici dam svoj maksimum i kreiram web rešenja koja imaju pozitivan uticaj.',
        skillsTitle: 'Veštine',
        projectsTitle: 'Projekti',
        proj1Title: 'Igra kockica',
        proj1Desc: 'Jednostavna JavaScript igrica za dvoje igrača koja se zasniva na bacanju kockica i skupljanju poena.',
        proj2Title: 'Omnifood sajt',
        proj2Desc: 'Responzivni sajt napravljen u HTML-u i CSS-u, fokusiran na moderni dizajn i prilagođavanje svim uređajima.',
        proj3Title: 'Pogodi moj broj',
        proj3Desc: 'JavaScript igrica u kojoj igrač pokušava da pogodi nasumično generisan broj uz povratne informacije u realnom vremenu.',
        proj4Title: 'E-commerce prodavnica',
        proj4Desc: 'React aplikacija koja simulira online prodavnicu igračaka sa funkcionalnostima korpe i modernim korisničkim interfejsom.',
        proj5Title: 'Portfolio generator',
        proj5Desc: 'Ova aplikacija omogućava generisanje portfolia na osnovu unetih podataka, uz podršku za različite teme i prilagođavanja.',
        contactTitle: 'Kontakt',
        nameLabel: 'Ime',
        emailLabel: 'Email',
        messageLabel: 'Poruka',
        sendBtn: 'Pošalji poruku',
        seeWorkBtn: 'Vidi moj rad',
        downloadCvBtn: 'Preuzmi moj CV',
        footerText: '© 2025 Nikola Dacković. Sva prava zadržana.',
        alertSuccess: 'Poruka poslata! (Demo)',
        alertError: 'Molimo popunite sva polja.',
        nav: {
            home: 'Početna',
            about: 'O meni',
            projects: 'Projekti',
            contact: 'Kontakt'
        },
        inProgress: 'U izradi'
    },
    en: {
        heroTitle: 'Hello, I am <span>Nikola Dacković</span>',
        heroDesc: 'Passionate frontend developer focused on modern and responsive web development',
        aboutTitle: 'About Me',
        aboutDesc: 'I am Nikola Dacković, a motivated frontend developer from Serbia, eager to start my professional journey in frontend development. I have dedicated myself to learning modern web technologies and building interactive interfaces. In my free time, I continue to explore and practice React, JavaScript, and responsive design, strengthening my skills and pushing my limits. I am looking for my first opportunity in frontend development where I can contribute, learn from experienced professionals, and continue to grow. Passionate, persistent, and curious, I strive to give my best in every challenge and to create web solutions that make a positive impact.',
        skillsTitle: 'Skills',
        projectsTitle: 'Projects',
        proj1Title: 'Dice game',
        proj1Desc: 'A simple two-player JavaScript game based on rolling dice and collecting points.',
        proj2Title: 'Omnifood site',
        proj2Desc: 'A responsive website built with HTML and CSS, focused on modern design and cross-device compatibility.',
        proj3Title: 'Guess My Number',
        proj3Desc: 'A JavaScript game where the player tries to guess a randomly generated number with real-time feedback.',
        proj4Title: 'E-commerce Toy Store',
        proj4Desc: 'A React application simulating an online toy shop with cart functionality and a modern user interface.',
        proj5Title: 'Portfolio Generator',
        proj5Desc: 'This application allows for generating portfolios based on user input, with support for different themes and customizations.',
        contactTitle: 'Contact',
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        sendBtn: 'Send Message',
        seeWorkBtn: 'See my work',
        downloadCvBtn: 'Download my CV',
        footerText: '© 2025 Nikola Dacković. All rights reserved.',
        alertSuccess: 'Message sent! (Demo)',
        alertError: 'Please fill in all fields.',
        nav: {
            home: 'Home',
            about: 'About Me',
            projects: 'Projects',
            contact: 'Contact'
        },
        inProgress: 'In progress'
    }
};

// Language toggle
langToggleBtn.addEventListener('click', () => {
    lang = lang === 'sr' ? 'en' : 'sr';
    document.documentElement.setAttribute('lang', lang);
    updateLanguage();
    langToggleBtn.textContent = lang === 'sr' ? 'EN / SR' : 'SR / EN';
});

function updateLanguage() {
    const t = translations[lang];

    // Hero + About + Skills + Projects
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-desc').textContent = t.aboutDesc;
    document.getElementById('skills-title').textContent = t.skillsTitle;
    document.getElementById('projects-title').textContent = t.projectsTitle;

    // Projekti
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`proj${i}-title`).textContent = t[`proj${i}Title`];
        document.getElementById(`proj${i}-desc`).textContent = t[`proj${i}Desc`];
    }

    // Badge "U izradi" / "In progress"
    document.querySelectorAll('.in-progress-badge').forEach(badge => {
        badge.textContent = t.inProgress;
    });

    // Dugmad
    document.querySelectorAll('.btn-work-btn').forEach(btn => {
        btn.textContent = t.seeWorkBtn;
    });
    document.querySelectorAll('.cv-btn').forEach(btn => {
        btn.textContent = t.downloadCvBtn;
    });

    // Kontakt
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('send-btn').textContent = t.sendBtn;
    document.querySelector('label[for="name"]').textContent = t.nameLabel;
    document.querySelector('label[for="email"]').textContent = t.emailLabel;
    document.querySelector('label[for="message"]').textContent = t.messageLabel;
    document.getElementById('name').placeholder = t.nameLabel;
    document.getElementById('email').placeholder = lang === 'sr' ? 'vas@email.com' : 'your@email.com';
    document.getElementById('message').placeholder = t.messageLabel;

    // Footer
    document.querySelector('.footer-text').textContent = t.footerText;

    // Navigation
    navItems.forEach(item => {
        const id = item.getAttribute('href').replace('#', '');
        const text = t.nav[id] || item.textContent.trim();
        item.innerHTML = `<i class="fas fa-${id === 'home' ? 'home' : id === 'about' ? 'user' : id === 'projects' ? 'briefcase' : 'envelope'}"></i> ${text}`;
    });
}

// Scroll to top + progress circle
const progressCircle = document.querySelector(".progress-ring__progress");
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener("scroll", debounce(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (docHeight > 0) ? (scrollTop / docHeight) * 100 : 0;
    setProgress(scrollPercent);

    scrollTopBtn.style.display = scrollTop > 100 ? "flex" : "none";

    // Scroll Reveal
    document.querySelectorAll('.scroll-reveal').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });

    // Sticky nav active state
    const sections = document.querySelectorAll('.preview-section, .hero-preview');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) currentSection = section.getAttribute('id');
    });
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) item.classList.add('active');
    });
}, 100));

// Scroll to top button
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setProgress(0);
});

// Form submit demo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && email && message && emailRegex.test(email)) {
        alert(translations[lang].alertSuccess);
        form.reset();
    } else {
        alert(translations[lang].alertError);
    }
});

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.add('hide');
    }, 2000); // 2000ms = 2 sekunde
});

// Initial language update
updateLanguage();