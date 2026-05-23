/**
 * GOURISH.DB - SYSTEM ARCHITECTURE & INTERACTIVE ENGINE
 * Domain: Data Engineering | Cloud Infrastructure | Cybersecurity
 */

// ─── 1. DATA STRUCTURE ───────────────────────────────────────────────────────

const systemArchitecture = {
    name: "Gourish.db",
    skills: ["Python", "JavaScript", "PL/SQL", "Django", "Linux", "Cybersecurity"],
    children: [
        {
            name: "Cloud & Infrastructure",
            skills: ["AWS", "WSL2 Ubuntu", "Docker", "Git/GitHub"],
            projects: ["Creating CI/CD Pipeline for a Website", "AWS Networking Deep Dive"],
            certs: ["AWS Cloud Practitioner — GeeksforGeeks", "AI Anomaly Detection in Cloud"],
            children: [
                {
                    name: "Networking",
                    skills: ["OSI Model", "IP Addressing", "Subnetting", "DNS/DHCP", "Routing", "Cisco Packet Tracer"],
                    projects: ["CCNA Lab Topologies"],
                    certs: []
                },
                {
                    name: "Auth & Security",
                    skills: ["Google OAuth 2.0", "JWT", "Session Management", "Role-Based Access Control"],
                    projects: ["Django-Superset Analytics Platform"],
                    certs: []
                }
            ]
        },
        {
            name: "Databases & Data Eng",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
            projects: ["Local Jarvis AI", "Smart Scrap Management System"],
            certs: ["SQL Basic", "Introduction to MongoDB"],
            children: [
                {
                    name: "SQL Mastery",
                    skills: ["Window Functions", "CTEs", "Stored Procedures", "PL/SQL", "Data Modeling"],
                    projects: ["Smart Scrap Management System"],
                    certs: ["SQL Basic"]
                },
                {
                    name: "ETL & Pipelines",
                    skills: ["ETL Pipelines", "SQL Optimization", "Data Transformation", "Apache Superset"],
                    projects: ["Django-Superset Analytics Platform"]
                    , certs: ["SQL Basic"]
                }
            ]
        },
        {
            name: "Frameworks & Visualization",
            skills: ["Django REST Framework", "Apache Superset 6.0", "Looker Studio", "Flask"],
            projects: ["Local Jarvis AI", "Automated Timetable Generator"],
            certs: ["Generative AI Mastermind — Outskill", "Qlik Sense Business Analyst 2023"],
            children: [
                {
                    name: "Web Platforms",
                    skills: ["Dashboard Embedding", "Full Stack Development", "MVC Architecture", "Bootstrap"],
                    projects: ["Smart Scrap Management System", "Django-Superset Analytics Platform"]
                },
                {
                    name: "BI Dashboards",
                    skills: ["Power BI", "Tableau", "Qlik Sense", "Data Insights"],
                    certs: ["Qlik Sense Business Analyst 2023"],
                    projects: ["Django-Superset Analytics Platform"]
                }
            ]
        },
        {
            name: "Cybersecurity",
            skills: ["Log Analysis", "Linux CLI", "CIA Triad", "Kali Linux", "Network Security", "SOC"],
            projects: ["AI-Powered SOC Analyst Agent"],
            certs: ["TryHackMe Pre Security", "Cybersecurity Essentials — Cisco"],
            children: [
                {
                    name: "SOC & Log Analysis",
                    skills: ["Log Analysis", "Incident Response", "SOC Playbooks", "Auth.log Analysis", "Brute Force Detection", "AI-Assisted Log Analysis"],
                    projects: ["AI-Powered SOC Analyst Agent"],
                    certs: ["TryHackMe Pre Security", "Cybersecurity Essentials — Cisco"]
                },
                {
                    name: "Linux & Networking",
                    skills: ["Linux CLI", "SSH", "File Permissions", "rsyslog", "systemctl", "OSI Model", "TCP/IP", "DNS", "HTTP/HTTPS", "Packets & Frames", "Wireshark", "Tcpdump", "Nmap (Learning)"]
                    , certs: ["TryHackMe Pre Security", "Cybersecurity Essentials — Cisco"]
                },
                {
                    name: "Security Fundamentals",
                    skills: ["CIA Triad", "Cryptography Concepts", "Active Directory Basics", "Offensive Security Intro", "Defensive Security Intro", "TryHackMe Pre Security"],
                    certs: ["TryHackMe Pre Security", "Cybersecurity Essentials — Cisco"]
                },
                {
                    name: "Attack Simulation & Tools",
                    skills: ["Kali Linux", "Hydra", "VirtualBox", "WSL", "Brute Force Simulation", "Home Lab Setup", "SSH Attack Vectors"],
                    certs: ["TryHackMe Pre Security", "Cybersecurity Essentials — Cisco"]
                }
            ]
        }
    ]
};

// ─── 2. ALL PROJECTS & CERTIFICATIONS ────────────────────────────────────────

const allData = {
    projects: [
        {
            id: "AI-Powered SOC Analyst Agent",
            goal: "Built a two-machine home lab (Ubuntu defender + Kali Linux attacker) to simulate real SSH brute force attacks and analyse them using a locally hosted AI model. Wrote a Python script that reads live auth.log entries, applies a custom SOC playbook with detection rules, and sends logs to TinyLLaMA via Ollama — returning structured incident reports with threat type, attacker IP, attempt count, and recommended actions. Runs fully offline with no API cost. Built with AI assistance — understood and debugged every part.",
            tags: ["Python", "Ollama", "Kali Linux", "Hydra", "Linux", "SSH"],
            link: "javascript:void(0)",
            color: "#ff453a",
            gallery: [
                "immages for soc project/0.png",
                "immages for soc project/1.png",
                "immages for soc project/2.png",
                "immages for soc project/3.png",
                "immages for soc project/4.png",
                "immages for soc project/5.png",
                "immages for soc project/6.png",
                "immages for soc project/7.png",
                "immages for soc project/Screenshot 2026-05-21 112006.png",
                "immages for soc project/Screenshot 2026-05-21 112021.png"
            ]
        },
        {
            id: "Django-Superset Analytics Platform",
            goal: "Architected a full-stack platform embedding Apache Superset 6.0 within Django. Resolved a critical Superset persistence bug by implementing custom serialization logic. Integrated Google OAuth 2.0 with session management and RBAC. Configured WSL2, Docker, PostgreSQL, and Redis for seamless cross-platform workflow.",
            tags: ["Django", "Apache Superset", "OAuth 2.0", "PostgreSQL", "Docker", "Redis"],
            link: "https://github.com/Gourishmanjunathmagganamane/my_superset/tree/main/django/hello"
        },
        {
            id: "Local Jarvis AI",
            goal: "An offline RAG-based AI assistant that reads your PDFs, learns from them, and answers questions instantly. All processing happens locally using Ollama, LangChain, and ChromaDB — keeping data private and secure. Associated with Kristu Jayanti University.",
            tags: ["Ollama", "ChromaDB", "LangChain", "Python"],
            link: "https://github.com/Gourishmanjunathmagganamane/local-jarvis-ai"
        },
        {
            id: "Automated Timetable Generator",
            goal: "A scheduling system that solves complex Constraint Satisfaction Problems by mapping teachers, students, and classrooms. Uses Genetic Algorithms to evolve conflict-free timetables based on Hard and Soft Constraints. Associated with Kristu Jayanti University.",
            tags: ["Python", "Genetic Algorithms", "Constraint Satisfaction"],
            link: "https://github.com/Gourishmanjunathmagganamane/timetable-generator.git"
        },
        {
            id: "Smart Scrap Management System",
            goal: "A role-based web application streamlining collection, assignment, and transaction of scrap items. Features User Roles (Seller, Agent, Admin), item listings, pickup requests, status tracking, and secure login.",
            tags: ["Flask", "MySQL", "SQLAlchemy", "Bootstrap"],
            link: "https://github.com/Gourishmanjunathmagganamane/Smart_Scrap_Management_System-Flask_Web_App"
        },
        {
            id: "Creating CI/CD Pipeline for a Website",
            goal: "Built and configured a CI/CD pipeline for a PHP and SQL web application, automating deployment and integrating Power BI for sales performance analysis and reporting.",
            tags: ["CI/CD", "PHP", "SQL", "Power BI"],
            link: "https://github.com/Gourishmanjunathmagganamane/Sales_performance_analysis-powerBI-"
        },
        {
            id: "CCNA Lab Topologies",
            goal: "Simulated enterprise network environments using Cisco Packet Tracer, focusing on VLANs, Routing protocols, subnetting, and network segmentation to understand real-world network design.",
            tags: ["Cisco Packet Tracer", "Networking", "VLANs", "Routing"],
            link: "javascript:void(0)"
        }
    ],
    certs: [
        {
            id: "TryHackMe Pre Security",
            org: "TryHackMe",
            date: "May 2026",
            credentialId: "THM-NA21UG0Qal",
            link: "https://drive.google.com/file/d/1xYIAmv3D9x9fV2q9EwgjwelAovyWRPoX/view?usp=sharing",
            color: "#ff9f0a"
        },
        {
            id: "Generative AI Mastermind",
            org: "Outskill",
            date: "Dec 2025",
            link: "https://drive.google.com/file/d/1Y0AqeWRwRRMFtiphMlFw0jZ6cUMWgvYK/view?usp=sharing"
        },
        {
            id: "AI Anomaly Detection in Cloud",
            org: "Kristu Jayanti University",
            date: "Sep 2025",
            link: "https://drive.google.com/file/d/14G7puTIt2QCqSlcZg38ncpAEymBO0eNB/view?usp=drive_link"
        },
        {
            id: "AWS Cloud Practitioner — GeeksforGeeks",
            org: "GeeksforGeeks",
            date: "Oct 2025",
            link: "https://drive.google.com/file/d/1q4kNZ_F6GnDFz5hKKbeq1_VSC6CoOtxR/view?usp=drive_link"
        },
        {
            id: "Introduction to MongoDB",
            org: "MongoDB University",
            date: "Jan 2024",
            link: "https://drive.google.com/file/d/16UMiC1mVug0xxxUlV6Juz4VWwsTJYTc_/view?usp=drive_link"
        },
        {
            id: "SQL Basic",
            org: "HackerRank",
            date: "Jul 2025",
            link: "https://drive.google.com/file/d/1E9z5BPjc73onPgqEhlQgmgzFoUiRnDRJ/view?usp=sharing"
        },
        {
            id: "Qlik Sense Business Analyst 2023",
            org: "Qlik",
            date: "Jun 2023",
            link: "https://drive.google.com/file/d/1Ad21_AqEDbJYWe7lhaCCwGW6SlubFzqC/view?usp=sharing"
        }
    ]
};

// ─── 3. D3.JS TREE INITIALIZATION ────────────────────────────────────────────

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

node.append("rect")
    .attr("x", 0).attr("y", -15)
    .attr("width", 160).attr("height", 30).attr("rx", 6)
    .style("fill", d => d.data.color || null);

node.append("text")
    .attr("dx", 80).attr("dy", 5)
    .attr("text-anchor", "middle")
    .text(d => d.data.name);

// ─── 4. DOM READY — CURSOR, PARTICLES, TYPEWRITER, SCROLL REVEAL ─────────────

document.addEventListener('DOMContentLoaded', () => {

    // A. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate(
            { left: `${posX}px`, top: `${posY}px` },
            { duration: 500, fill: "forwards" }
        );
    });

    const interactables = document.querySelectorAll('a, button, .node rect, .project-card, .cert-item');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
    });

    // B. tsParticles Background
    if (window.tsParticles) {
        tsParticles.load("tsparticles", {
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true, mode: "repulse",
                        parallax: { enable: true, force: 20, smooth: 10 }
                    },
                    resize: true,
                },
                modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
                color: { value: "#2997ff" },
                links: { color: "#2997ff", distance: 150, enable: true, opacity: 0.15, width: 1 },
                move: {
                    direction: "none", enable: true,
                    outModes: { default: "bounce" },
                    random: false, speed: 0.8, straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 40 },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        });
    }

    // C. Scroll Reveal
    const animatedElements = document.querySelectorAll(
        '.section, .project-card, .cert-item, .timeline-item, .journey-item, .header-visual'
    );
    animatedElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('active'), 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => revealOnScroll.observe(el));

    // D. Typewriter Effect
    const twText = document.getElementById('typewriter-text');
    if (twText) {
        const phrases = [
            "Data Engineer",
            "Full Stack Developer",
            "Cloud & Database Specialist",
            "Aspiring SOC Analyst",
            "Cybersecurity Enthusiast",
            "TryHackMe Pre Security Certified",
            "Lifelong Learner"
        ];
        let pIdx = 0, cIdx = 0, isDeleting = false;

        function type() {
            const currentPhrase = phrases[pIdx];
            twText.textContent = isDeleting
                ? currentPhrase.substring(0, cIdx - 1)
                : currentPhrase.substring(0, cIdx + 1);

            isDeleting ? cIdx-- : cIdx++;

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && cIdx === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && cIdx === 0) {
                isDeleting = false;
                pIdx = (pIdx + 1) % phrases.length;
                typingSpeed = 500;
            }
            setTimeout(type, typingSpeed);
        }
        setTimeout(type, 1000);
    }
});

// ─── 5. FILTER LOGIC ─────────────────────────────────────────────────────────

function filterContent(d) {
    // Reset all nodes and links
    d3.selectAll(".node").classed("node-active", false);
    d3.selectAll(".node").select("rect").style("fill", nd => nd.data.color || null);
    d3.selectAll(".link").classed("link-active", false).style("stroke", null);

    // Highlight active path
    const path = d.ancestors();
    path.forEach((nd, i) => {
        const nodeEl = d3.selectAll(".node").filter(n => n === nd);
        nodeEl.classed("node-active", true);
        if (nd.data.color) nodeEl.select("rect").style("fill", nd.data.color);

        if (i < path.length - 1) {
            const linkEl = d3.selectAll(".link").filter(
                l => l.target === path[i] && l.source === path[i + 1]
            );
            linkEl.classed("link-active", true);
            if (path[i].data.color) linkEl.style("stroke", path[i].data.color);
        }
    });

    // Aggregate data from clicked node and all its children
    const aggregateSkills = new Set();
    const projIds = new Set();
    const certIds = new Set();

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

// ─── 6. RENDER CARDS ─────────────────────────────────────────────────────────

function renderDisplay(containerId, data, type) {
    const container = document.getElementById(containerId);
    if (data.length === 0) {
        container.innerHTML = `<p style="color:var(--text-dim)">Select a node to view linked ${type}s.</p>`;
        return;
    }

    container.innerHTML = data.map(item => `
        <div class="${type}-card" ${item.color ? `style="border-top: 3px solid ${item.color};"` : ''}>
            <h4>${item.id}</h4>
            <p style="font-size:0.95rem; line-height:1.5; color:var(--text-dim); margin-bottom:15px;">
                ${item.goal || `${item.org} &nbsp;|&nbsp; ${item.date}${item.credentialId ? `<br><span style="font-size:0.8rem;opacity:0.6;">Credential ID: ${item.credentialId}</span>` : ''}`}
            </p>
            ${item.tags ? `<div class="tags">${item.tags.map(t =>
        `<span ${item.color ? `style="color:${item.color}; background:rgba(255,255,255,0.05);"` : ''}>${t}</span>`
    ).join('')}</div>` : ''}
            ${type === 'cert'
                ? `<button onclick="openCert('${item.link}')" class="card-btn" style="border:none; cursor:pointer; ${item.color ? `background:${item.color};` : ''}">View Credential</button>`
                : (item.gallery 
                    ? `<button onclick="openGallery('${item.id}')" class="card-btn" style="border:none; cursor:pointer; ${item.color ? `background:${item.color};` : ''}">View Project Gallery</button>`
                    : `<a href="${item.link}" target="_blank" class="card-btn" ${item.color ? `style="background:${item.color};"` : ''}>View Repository</a>`)
            }
        </div>
    `).join('');

    // Mouse glow + cursor hover on new cards
    container.querySelectorAll(`.${type}-card`).forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
        const cursorOutline = document.querySelector('.cursor-outline');
        const btn = card.querySelector('.card-btn');
        if (btn) {
            btn.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
            btn.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
        }
        card.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        card.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
    });
}

// ─── 7. UTILITY FUNCTIONS ────────────────────────────────────────────────────

function toggleContact() {
    const box = document.getElementById('contactDetails');
    box.style.display = (box.style.display === 'grid') ? 'none' : 'grid';
}

function openCert(url) {
    // If it's a Google Drive link, open directly in new tab
    // Drive links cannot be embedded in iframes or shown as images
    if (url.includes('drive.google.com') || url.includes('linkedin.com')) {
        window.open(url, '_blank');
        return;
    }

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
    document.getElementById('modal-pdf').src = '';
    document.getElementById('modal-img').src = '';
    modal.style.display = 'none';
}

function openGallery(projectId) {
    const project = allData.projects.find(p => p.id === projectId);
    if (!project || !project.gallery) return;

    document.getElementById('gallery-title').innerText = project.id + " - Gallery";
    const container = document.getElementById('gallery-images');
    container.innerHTML = project.gallery.map(img => `<img src="${img}" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1);" alt="Project Screenshot">`).join('');
    
    document.getElementById('gallery-modal').style.display = 'block';
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
    document.getElementById('gallery-images').innerHTML = '';
}

window.onclick = function (event) {
    const certModal = document.getElementById('cert-modal');
    const galleryModal = document.getElementById('gallery-modal');
    if (event.target === certModal) closeCert();
    if (event.target === galleryModal) closeGallery();
};

// ─── 8. INITIAL RENDER ───────────────────────────────────────────────────────

filterContent(rootNode);