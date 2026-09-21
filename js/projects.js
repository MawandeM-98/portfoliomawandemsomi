const projectsData = [
    {
        title: "DigitBreaker",
        description: "A JavaScript-based game where users attempt to break a randomized 4-digit PIN with very limited attempts available.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/MawandeM-98/DigitBreaker",
        demo: null
    },
    {
        title: "Habit-Tracker",
        description: "A full-stack habit-tracking application with React frontend and Node.js backend.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
        github: "https://github.com/MawandeM-98/Habit-Tracker",
        demo: null
    },
    {
        title: "Voting System App",
        description: "South African Voting Eligibility Checker with comprehensive unit tests.",
        tech: ["JavaScript", "Jest", "HTML5", "CSS3"],
        github: "https://github.com/MawandeM-98/voting-system-app",
        demo: null
    },
    {
        title: "Product Explorer (Signal Store)",
        description: "Angular 20 frontend application that fetches and displays product lists from a REST API.",
        tech: ["Angular", "TypeScript", "RxJS", "REST API"],
        github: "https://github.com/MawandeM-98/product-explorer-signalstore",
        demo: null
    },
    {
        title: "React Product Explorer",
        description: "Product explorer built with React, Vite, Tailwind CSS, and JSON Server for mock API.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "JSON Server"],
        github: "https://github.com/MawandeM-98/react-product-explorer",
        demo: null
    },
    {
        title: "Group E Multiple Choice Questions",
        description: "Java-based multiple choice questions application for educational purposes.",
        tech: ["Java", "JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/The-DigitalAcademy/GroupEMultipleQuestion",
        demo: null
    }
];

function loadProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    // Clear loading state if any
    container.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'glass-card project-card';
        
        const demoLink = project.demo ? 
            `<a href="${project.demo}" class="project-link" target="_blank">🔗 Live Demo</a>` : '';
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">📦 GitHub Repo</a>
                ${demoLink}
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}