/**
 * GOURISH.DB - SYSTEM ARCHITECTURE & INTERACTIVE ENGINE
 * Domain: Data Engineering | Cloud Infrastructure | Advanced Networking
 */

// 1. DATA STRUCTURE (Integrating Networking & AWS Advanced Modules)
const systemArchitecture = {
    name: "Gourish.db",
    skills: ["Python", "SQL Optimization", "ETL Pipelines", "Data Cleaning"],
    children: [
        {
            name: "Cloud & Networking",
            skills: ["AWS (EC2, S3, IAM)", "VPC Design", "Subnetting", "Cisco Packet Tracer"],
            projects: ["creating ci/cd pipeline for a website(php,sql)", "AWS Networking Deep Dive"],
            certs: ["4-week course on AWS Cloud Practitioner", "AI Anomaly Detection in Cloud"],
            children: [
                { 
                    name: "Advanced Networking Lab", 
                    skills: ["OSI Model", "IP Addressing", "Router/Switch Config", "VPC Peering", "VPN vs Direct Connect"], 
                    projects: ["CCNA Lab Topologies"],
                    certs: ["CCNA (In-Progress)"]
                },
                { 
                    name: "Cloud Knowledge", 
                    skills: ["Hosting Infrastructure", "CI/CD Pipeline Design", "IaaS/PaaS/SaaS"], 
                    certs: ["4-week course on AWS Cloud Practitioner"] 
                }
            ]
        },
        {
            name: "Databases & Vectors",
            skills: ["PostgreSQL", "MySQL", "psql", "pgAdmin", "Schema Exploration"],
            projects: ["Local Jarvis AI", "Smart Scrap Management System"],
            certs: ["SQL(Basic)", "Introduction to MongoDB"],
            children: [
                { 
                    name: "SQL Mastery", 
                    skills: ["JOINs", "Window Functions", "GROUP BY/HAVING", "CRUD Operations"], 
                    projects: ["Smart Scrap Management System"] 
                },
                { 
                    name: "NoSQL / Vectors", 
                    skills: ["MongoDB", "ChromaDB", "Vector Search", "RAG Pipeline"], 
                    projects: ["Local Jarvis AI"] 
                }
            ]
        },
        {
            name: "AI & Data Visualization",
            skills: ["Looker Studio", "Apache Superset", "Power BI", "Google Sheets"],
            projects: ["Local Jarvis AI", "Automated Timetable Generator"],
            certs: ["Generative AI Mastermind", "Qlik Sense Business Analyst"],
            children: [
                { 
                    name: "GenAI / RAG", 
                    skills: ["Ollama", "LangChain", "Genetic Algorithms"], 
                    projects: ["Local Jarvis AI", "Automated Timetable Generator"] 
                },
                { 
                    name: "BI & Visualization", 
                    skills: ["Dashboard Design", "Data Transformation", "Data Insights"], 
                    certs: ["Qlik Sense Business Analyst"] 
                }
            ]
        }
    ]
};

// 2. CONSOLIDATED RESOURCE REPOSITORY
const allData = {
    projects: [
        { id: "Local Jarvis AI", goal: "Offline RAG assistant using Ollama and LangChain. Keeps data private locally.", tags: ["Ollama", "ChromaDB"], link: "https://github.com/Gourishmanjunathmagganamane/local-jarvis-ai" },
        { id: "Automated Timetable Generator", goal: "Scheduling system using Genetic Algorithms for Constraint Satisfaction Problems.", tags: ["Python", "Algorithms"], link: "https://github.com/Gourishmanjunathmagganamane/timetable-generator.git" },
        { id: "Smart Scrap Management System", goal: "Role-based Flask web app with MySQL for streamlining scrap transactions.", tags: ["Flask", "MySQL"], link: "https://github.com/Gourishmanjunathmagganamane/Smart_Scrap_Management_System-Flask_Web_App" },
        { id: "creating ci/cd pipeline for a website(php,sql)", goal: "Automated deployment pipeline with Sales Performance Analysis.", tags: ["CI/CD", "PowerBI"], link: "https://github.com/Gourishmanjunathmagganamane/Sales_performance_analysis-powerBI-" },
        { id: "CCNA Lab Topologies", goal: "Simulated enterprise network environments using Cisco Packet Tracer focusing on VLANs and Routing.", tags: ["Cisco", "Networking"], link: "#" },
        { id: "AWS Networking Deep Dive", goal: "Architected a multi-tier VPC with public/private subnets and secure NAT routing.", tags: ["AWS", "VPC"], link: "#" }
    ],
    certs: [
        { id: "Generative AI Mastermind", org: "Outskill", date: "Dec 2025", link: "https://media.licdn.com/dms/image/v2/D562DAQFcuOlc3IStEw/profile-treasury-document-images_800/B56ZssvRDIIEAc-/1/1765982148839?e=1774483200&v=beta&t=mHm2sKwBqzFyD7Ha6ASeCL7py1sy-Y-pbVP83g80gbw" },
        { id: "AI Anomaly Detection in Cloud", org: "Kristu Jayanti", date: "Sep 2025", link: "https://media.licdn.com/dms/image/v2/D4E2DAQEcwPgq9Tu9dQ/profile-treasury-document-cover-images_800/B4EZo9znsIKgA8-/0/1761973535666?e=1774112400&v=beta&t=a5HtzqyjQh8OQX3apA2Sq57yXvUs3tsPJ6ncBwZOy3s" },
        { id: "4-week course on AWS Cloud Practitioner", org: "GeeksforGeeks", date: "Oct 2025", link: "https://media.geeksforgeeks.org/courses/certificates/2601622d3c3de0b3d14ecc207e76498d.pdf" },
        { id: "Introduction to MongoDB", org: "MongoDB", date: "Jan 2024", link: "https://media.licdn.com/dms/image/v2/D562DAQGspra-OpK3JQ/profile-treasury-image-shrink_800_800/B56ZhCYS8LHkAY-/0/1753460323300?e=1774112400&v=beta&t=PqMetUDI6hwWJO1tWdlY8DaqMwvmyrcN_jtAKGy3RdM" },
        { id: "SQL(Basic)", org: "HackerRank", date: "Jul 2025", link: "https://media.licdn.com/dms/image/v2/D562DAQEGG5ZLTbjgbg/profile-treasury-document-cover-images_480/B56Zg9Yw7MHkBI-/0/1753376571971?e=1774112400&v=beta&t=b-fywsw6BuVNpfb317IIc60dFg45TVnsYaP0FYlk0Vk" },
        { id: "Qlik Sense Business Analyst", org: "Qlik", date: "Jun 2023", link: "https://drive.google.com/file/d/1Ad21_AqEDbJYWe7lhaCCwGW6SlubFzqC/view?usp=sharing" }
    ]
};

// 3. D3.JS HORIZONTAL TREE VISUALIZATION
const width = 900, height = 500;
const svg = d3.select("#interactive-tree").append("svg")
    .attr("width", "100%").attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g").attr("transform", "translate(120, 20)");

const treeLayout = d3.tree().size([height - 40, width - 350]);
const rootNode = d3.hierarchy(systemArchitecture);
treeLayout(rootNode);

// Render Connections
svg.selectAll(".link")
    .data(rootNode.links())
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

// Render Nodes
const node = svg.selectAll(".node")
    .data(rootNode.descendants())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`)
    .on("click", (e, d) => filterContent(d));

node.append("rect")
    .attr("x", 0).attr("y", -15)
    .attr("width", 160).attr("height", 30).attr("rx", 6);

node.append("text")
    .attr("dx", 80).attr("dy", 5)
    .attr("text-anchor", "middle").text(d => d.data.name);

// 4. INTERACTION LOGIC: Content Filtering & Dynamic Pinging
function filterContent(d) {
    // UI Highlighting (Ancestors & Descendants)
    d3.selectAll(".node").classed("node-active", false);
    d3.selectAll(".link").classed("link-active", false);

    let path = d.ancestors();
    path.forEach((nd, i) => {
        d3.selectAll(".node").filter(n => n === nd).classed("node-active", true);
        if (i < path.length - 1) {
            d3.selectAll(".link").filter(l => l.target === path[i] && l.source === path[i+1]).classed("link-active", true);
        }
    });

    // Skill Aggregation
    let aggregateSkills = new Set();
    let projIds = new Set();
    let certIds = new Set();

    d.descendants().forEach(n => {
        if (n.data.skills) n.data.skills.forEach(s => aggregateSkills.add(s));
        if (n.data.projects) n.data.projects.forEach(p => projIds.add(p));
        if (n.data.certs) n.data.certs.forEach(c => certIds.add(c));
    });

    // Render Displays
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
            <p style="font-size:0.85rem; color:var(--text-dim)">${item.goal || (item.org + ' | ' + item.date)}</p>
            ${item.tags ? `<div class="tags">${item.tags.map(t=>`<span>${t}</span>`).join('')}</div>` : ''}
            <a href="${item.link}" target="_blank" class="card-btn">View ${type === 'project' ? 'Repository' : 'Credential'}</a>
        </div>`).join('');
}

// 5. MODAL & UI UTILITIES
function toggleContact() {
    const box = document.getElementById('contactDetails');
    box.style.display = (box.style.display === 'grid') ? 'none' : 'grid';
}

// Initialize on Load
filterContent(rootNode);