/**
 * GOURISH.DB - SYSTEM ARCHITECTURE & INTERACTIVE ENGINE
 * Domain: Data Engineering | Cloud Infrastructure | Advanced Networking
 */

// 1. DATA STRUCTURE
const systemArchitecture = {
    name: "Gourish.db",
    skills: ["Python", "JavaScript", "PL/SQL", "Django"],
    children: [
        {
            name: "Cloud & Infrastructure",
            skills: ["AWS", "WSL2 Ubuntu", "Docker", "Git/GitHub"],
            projects: ["Creating CI/CD Pipeline for a Website (PHP, SQL)", "AWS Networking Deep Dive"],
            certs: ["4-week course on AWS Cloud Practitioner Certification - Self Paced", "AI Anomaly Detection in Cloud"],
            children: [
                { 
                    name: "Networking", 
                    skills: ["OSI Model", "IP Addressing", "Subnetting", "DNS/DHCP", "Routing"], 
                    projects: ["CCNA Lab Topologies"],
                    certs: []
                },
                { 
                    name: "Auth & Security", 
                    skills: ["Google OAuth 2.0", "JWT", "Session Management", "Role-Based Access"], 
                    projects: ["Django-Superset Analytics Platform"],
                    certs: [] 
                }
            ]
        },
        {
            name: "Databases & Data Eng",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
            projects: ["Local Jarvis AI", "Smart Scrap Management System"],
            certs: ["SQL(Basic)", "Introduction to MongoDB"],
            children: [
                { 
                    name: "SQL Mastery", 
                    skills: ["Window Functions", "CTEs", "Stored Procedures", "Data Modeling"], 
                    projects: ["Smart Scrap Management System"] 
                },
                { 
                    name: "ETL & Pipelines", 
                    skills: ["ETL Pipelines", "SQL Optimization", "Data Transformation"], 
                    projects: ["Django-Superset Analytics Platform"] 
                }
            ]
        },
        {
            name: "Frameworks & Visualization",
            skills: ["Django REST Framework", "Apache Superset 6.0", "Looker Studio"],
            projects: ["Local Jarvis AI", "Automated Timetable Generator"],
            certs: ["Generative AI Mastermind", "Qlik Sense Business Analyst Qualification 2023"],
            children: [
                { 
                    name: "Web Platforms", 
                    skills: ["Dashboard Embedding", "Full Stack Dev", "MVC Architecture"], 
                    projects: ["Smart Scrap Management System", "Django-Superset Analytics Platform"] 
                },
                { 
                    name: "BI Dashboards", 
                    skills: ["Power BI", "Tableau", "Data Insights"], 
                    certs: ["Qlik Sense Business Analyst Qualification 2023"] 
                }
            ]
        }
    ]
};

const allData = {
    projects: [
        { 
            id: "Django-Superset Analytics Platform", 
            goal: "Architected a full-stack platform embedding Apache Superset 6.0 within Django. Resolved a critical Superset persistence bug by implementing custom serialization logic. Integrated Google OAuth 2.0 with session management and RBAC. Configured WSL2, Docker, PostgreSQL, and Redis for seamless cross-platform workflow.", 
            tags: ["Django", "Apache Superset", "OAuth 2.0", "PostgreSQL", "Docker", "Redis"], 
            link: "https://github.com/Gourishmanjunathmagganamane/my_superset/tree/main/django/hello" 
        },
        { 
            id: "Local Jarvis AI", 
            goal: "Nov 2025 – Nov 2025 | Associated with Kristu Jayanti College Autonomous.<br><br>Local Jarvis AI is an offline RAG-based assistant that can read your PDFs, learn from them, and answer questions instantly. All processing happens locally using Ollama, LangChain, and ChromaDB — keeping your data private and secure.", 
            tags: ["Ollama", "ChromaDB", "LangChain"], 
            link: "https://github.com/Gourishmanjunathmagganamane/local-jarvis-ai" 
        },
        { 
            id: "Automated Timetable Generator", 
            goal: "Aug 2025 – Oct 2025 | Associated with Kristu Jayanti College Autonomous.<br><br>A Timetable Generator scheduling system to solve complex Constraint Satisfaction Problems mapping teachers, students, and classrooms. Uses Genetic Algorithms to evolve schedules based on Hard and Soft Constraints to output a conflict-free result.", 
            tags: ["Python", "Genetic Algorithms"], 
            link: "https://github.com/Gourishmanjunathmagganamane/timetable-generator.git" 
        },
        { 
            id: "Smart Scrap Management System", 
            goal: "May 2025 – Jun 2025 | Role-based web application streamlining the collection, assignment, and transaction of scrap items. Features User Roles (Seller, Agent, Admin), item listings, pickup requests, status tracking, and secure login.", 
            tags: ["Flask", "MySQL", "SQLAlchemy", "Bootstrap"], 
            link: "https://github.com/Gourishmanjunathmagganamane/Smart_Scrap_Management_System-Flask_Web_App" 
        },
        { 
            id: "Creating CI/CD Pipeline for a Website (PHP, SQL)", 
            goal: "It is an amazing project hope you will like it.", 
            tags: ["CI/CD", "PowerBI"], 
            link: "https://github.com/Gourishmanjunathmagganamane/Sales_performance_analysis-powerBI-" 
        },
        { 
            id: "CCNA Lab Topologies", 
            goal: "Simulated enterprise network environments using Cisco Packet Tracer focusing on VLANs and Routing.", 
            tags: ["Cisco", "Networking"], 
            link: "javascript:void(0)" 
        },
        { 
            id: "AWS Networking Deep Dive", 
            goal: "Architected a multi-tier VPC with public/private subnets and secure NAT routing.", 
            tags: ["AWS", "VPC"], 
            link: "javascript:void(0)" 
        }
    ],
    certs: [
        { 
            id: "Generative AI Mastermind", 
            org: "Outskill", 
            date: "Dec 2025", 
            link: "https://media.licdn.com/dms/image/v2/D562DAQFcuOlc3IStEw/profile-treasury-document-images_800/B56ZssvRDIIEAc-/1/1765982148839?e=1774483200&v=beta&t=mHm2sKwBqzFyD7Ha6ASeCL7py1sy-Y-pbVP83g80gbw" 
        },
        { 
            id: "AI Anomaly Detection in Cloud", 
            org: "Kristu Jayanti (Deemed to be University)", 
            date: "Sep 2025", 
            link: "https://media.licdn.com/dms/image/v2/D4E2DAQEcwPgq9Tu9dQ/profile-treasury-document-cover-images_800/B4EZo9znsIKgA8-/0/1761973535666?e=1774112400&v=beta&t=a5HtzqyjQh8OQX3apA2Sq57yXvUs3tsPJ6ncBwZOy3s" 
        },
        { 
            id: "4-week course on AWS Cloud Practitioner Certification - Self Paced", 
            org: "GeeksforGeeks", 
            date: "Oct 2025", 
            link: "https://media.geeksforgeeks.org/courses/certificates/2601622d3c3de0b3d14ecc207e76498d.pdf" 
        },
        { 
            id: "Introduction to MongoDB", 
            org: "MongoDB", 
            date: "Jan 2024", 
            link: "https://media.licdn.com/dms/image/v2/D562DAQGspra-OpK3JQ/profile-treasury-image-shrink_800_800/B56ZhCYS8LHkAY-/0/1753460323300?e=1774112400&v=beta&t=PqMetUDI6hwWJO1tWdlY8DaqMwvmyrcN_jtAKGy3RdM" 
        },
        { 
            id: "SQL(Basic)", 
            org: "HackerRank", 
            date: "Jul 2025", 
            link: "https://media.licdn.com/dms/image/v2/D562DAQEGG5ZLTbjgbg/profile-treasury-document-cover-images_480/B56Zg9Yw7MHkBI-/0/1753376571971?e=1774112400&v=beta&t=b-fywsw6BuVNpfb317IIc60dFg45TVnsYaP0FYlk0Vk" 
        },
        { 
            id: "Qlik Sense Business Analyst Qualification 2023", 
            org: "Qlik", 
            date: "Jun 2023", 
            link: "https://drive.google.com/file/d/1Ad21_AqEDbJYWe7lhaCCwGW6SlubFzqC/view?usp=sharing" 
        }
    ]
};

// 2. D3.JS INITIALIZATION
const width = 900, height = 500;
const svg = d3.select("#interactive-tree").append("svg")
    .attr("width", "100%").attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g").attr("transform", "translate(120, 20)");

const treeLayout = d3.tree().size([height - 40, width - 350]);
const rootNode = d3.hierarchy(systemArchitecture);
treeLayout(rootNode);

svg.selectAll(".link")
    .data(rootNode.links())
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

const node = svg.selectAll(".node")
    .data(rootNode.descendants())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`)
    .on("click", (e, d) => filterContent(d));

node.append("rect").attr("x", 0).attr("y", -15).attr("width", 160).attr("height", 30).attr("rx", 6);
node.append("text").attr("dx", 80).attr("dy", 5).attr("text-anchor", "middle").text(d => d.data.name);

// 4. WOW FACTOR ENHANCEMENTS (Custom Cursor & Glow)
document.addEventListener('DOMContentLoaded', () => {
    // A. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    // Position Tracking
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Add a slight delay to the outline for a trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover states to interactable elements
    const interactables = document.querySelectorAll('a, button, .node rect, .project-card, .cert-item');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
    });

    // B. TSParticles Background init
    if (window.tsParticles) {
        tsParticles.load("tsparticles", {
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse", parallax: { enable: true, force: 20, smooth: 10 } },
                    resize: true,
                },
                modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
                color: { value: "#2997ff" },
                links: { color: "#2997ff", distance: 150, enable: true, opacity: 0.15, width: 1 },
                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.8, straight: false },
                number: { density: { enable: true, area: 800 }, value: 40 },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        });
    }

    // Apple Reveal Engine from earlier
    const animatedElements = document.querySelectorAll('.section, .project-card, .cert-item, .timeline-item, .header-visual');
    animatedElements.forEach(el => el.classList.add('reveal'));

    // C. Typewriter Effect
    const twText = document.getElementById('typewriter-text');
    if (twText) {
        const phrases = [
            "Data Engineer", 
            "Full Stack Developer", 
            "Cloud & Database Specialist",
            "Lifelong Learner"
        ];
        let pIdx = 0;
        let cIdx = 0;
        let isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[pIdx];
            
            if (isDeleting) {
                twText.textContent = currentPhrase.substring(0, cIdx - 1);
                cIdx--;
            } else {
                twText.textContent = currentPhrase.substring(0, cIdx + 1);
                cIdx++;
            }
            
            let typingSpeed = isDeleting ? 40 : 80; // Deletion is faster than typing
            
            if (!isDeleting && cIdx === currentPhrase.length) {
                typingSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && cIdx === 0) {
                isDeleting = false;
                pIdx = (pIdx + 1) % phrases.length;
                typingSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(type, 1000); // Initial delay before it starts typing
    }

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 100); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => revealOnScroll.observe(el));
});

// 5. LOGIC
function filterContent(d) {
    d3.selectAll(".node").classed("node-active", false);
    d3.selectAll(".link").classed("link-active", false);

    let path = d.ancestors();
    path.forEach((nd, i) => {
        d3.selectAll(".node").filter(n => n === nd).classed("node-active", true);
        if (i < path.length - 1) {
            d3.selectAll(".link").filter(l => l.target === path[i] && l.source === path[i+1]).classed("link-active", true);
        }
    });

    let aggregateSkills = new Set();
    let projIds = new Set();
    let certIds = new Set();

    d.descendants().forEach(n => {
        if (n.data.skills) n.data.skills.forEach(s => aggregateSkills.add(s));
        if (n.data.projects) n.data.projects.forEach(p => projIds.add(p));
        if (n.data.certs) n.data.certs.forEach(c => certIds.add(c));
    });

    document.getElementById('skills-display').innerHTML = Array.from(aggregateSkills)
        .map(skill => `<span class="skill-pill">${skill}</span>`).join('');

    renderDisplay('project-display', allData.projects.filter(p => projIds.has(p.id)), 'project');
    renderDisplay('cert-display', allData.certs.filter(c => certIds.has(c.id)), 'cert');
}

function renderDisplay(containerId, data, type) {
    const container = document.getElementById(containerId);
    if (data.length === 0) {
        container.innerHTML = `<p style="color:var(--text-dim)">Select a specialized node to view linked ${type}s.</p>`;
        return;
    }
    container.innerHTML = data.map(item => `
        <div class="${type}-card">
            <h4>${item.id}</h4>
            <p style="font-size:0.95rem; line-height:1.5; color:var(--text-dim); margin-bottom: 15px;">${item.goal || (item.org + ' | ' + item.date)}</p>
            ${item.tags ? `<div class="tags">${item.tags.map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
            <a href="${item.link}" target="_blank" class="card-btn">View ${type === 'project' ? 'Repository' : 'Credential'}</a>
        </div>`).join('');
    
    // Add Mouse Glow Listeners to newly rendered cards
    const newCards = container.querySelectorAll(`.${type}-card`);
    newCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        // Re-attach custom cursor hover states to new buttons inside cards
        const btn = card.querySelector('.card-btn');
        if(btn) {
            btn.addEventListener('mouseenter', () => document.querySelector('.cursor-outline').classList.add('hovering'));
            btn.addEventListener('mouseleave', () => document.querySelector('.cursor-outline').classList.remove('hovering'));
        }
        card.addEventListener('mouseenter', () => document.querySelector('.cursor-outline').classList.add('hovering'));
        card.addEventListener('mouseleave', () => document.querySelector('.cursor-outline').classList.remove('hovering'));
    });
}

function toggleContact() {
    const box = document.getElementById('contactDetails');
    box.style.display = (box.style.display === 'grid') ? 'none' : 'grid';
}

function openCert(url) {
    const modal = document.getElementById('cert-modal');
    const iframe = document.getElementById('modal-pdf');
    const img = document.getElementById('modal-img');
    
    if (url.toLowerCase().endsWith('.pdf')) {
        iframe.src = url;
        iframe.style.display = 'block';
        img.style.display = 'none';
    } else {
        img.src = url;
        img.style.display = 'block';
        iframe.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function closeCert() {
    const modal = document.getElementById('cert-modal');
    const iframe = document.getElementById('modal-pdf');
    const img = document.getElementById('modal-img');
    
    modal.style.display = 'none';
    iframe.src = '';
    img.src = '';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('cert-modal');
    if (event.target == modal) {
        closeCert();
    }
}

filterContent(rootNode);