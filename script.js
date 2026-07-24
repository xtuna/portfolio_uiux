function forceDownload() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'https://www.dropbox.com/scl/fi/rwgx9d5ikzujgvbiiebpv/Velasco-Ma.-Cristina-S_Resume.pdf?rlkey=k1rl5xl27959fxjs6rt2puixz&st=wn1x33l6&dl=1';
    link.download = 'Cristina_Velasco_Resume.pdf';

    // Append to body, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function flipImage() {
    document.getElementById("flipCard").classList.toggle("flipped");
}

// ============================================================
// Project data
// ============================================================
// `type` controls how the detail page renders:
//   "case-study"  -> full write-up (problem/solution/process sections
//                    render automatically IF you fill those fields in;
//                    leave them out and the page just shows what you have)
//   "ui-showcase" -> a lighter page for pure UI/visual work with no
//                    claimed research or dev process — title, summary,
//                    tools, and a gallery grid, nothing invented beyond that
//
// Optional fields (safe to omit — sections only render if present):
//   role, problem, solution, process (array of {title, text}),
//   results (array of {label, value})
/*const projects = [{
        id: 1,
        title: "A Web-based Document Management System for the Research Support Center",
        tag: "Website",
        type: "case-study",
        role: "Full-Stack Developer & UI Designer",
        year: 2024,
        date: "2024-07-22",
        images: ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png", "p6.png", "p7.png", "p8.png", "p9.png", "p10.png", "p11.png", "p12.png", "p13.png", "p14.png", "p15.png", "p16.png", "p17.png", "p18.png", "p19.png", "p20.png", "p21.png", "p22.png", "p23.png", "p24.png", "p25.png", "p26.png", "p27.png", "p28.png", "p29.png", "p30.png", "p31.png", "p32.png", "p33.png", "p34.png", "p35.png"],
        summary: "A document management system built for a university Research Support Center to streamline application processing and approvals.",
        description: "A web-based document management system developed for the Research Support Center to streamline application processing, automate notifications, and improve document handling, ensuring faster approvals and better communication with researchers.",
        technologies: ["C#", "MSSQL", "JavaScript", "Bootstrap", "ASP .NET Framework"],
        features: [
            "User Friendly interface",
            "Document Management (Upload, Read, Update, Sort, Tracking, and Cancel)",
            "Centralized Repository",
            "Audit Trail",
            "Provide Notifications and Updates",
            "Status Document Monitoring",
            "Role-based access control",
            "Search and Filtering",
            "Generate Reports"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/drive/folders/1dj8_ebaIThl-u087XKaWN8SOscX3eRGg?usp=drive_link",
        documentUrl: "https://docs.google.com/document/d/1KmAyWQBYIhAKs_YkTYOZwzZ5-eta90VJ/edit?usp=sharing&ouid=107806911557582686117&rtpof=true&sd=true"
    },
    {
        id: 2,
        title: "Lagoon Hub",
        tag: "Website",
        type: "case-study",
        role: "Full-Stack Developer & UI Designer",
        year: 2024,
        date: "2024-03-13",
        images: ["pp1.png", "pp2.jfif", "pp3.png", "pp4.png", "pp5.png", "pp6.png", "pp7.png", "pp8.png"],
        summary: "An ordering app for PUP Lagoon vendors, letting students browse stores and check out from one interface.",
        description: "The PUP Lagoon Ordering App revolutionizes the way users interact in Lagoon by offering a seamless ordering experience through innovative features. Users can effortlessly place their orders by choosing what store they want to buy and check out from the app’s interface. With automatic retrieval of item information and pricing, users can assure in their orders accuracy, ensuring a convenient and reliable service. The app guarantees accuracy and transparency in pricing, enhancing user confidence. Moreover, the app maintains a comprehensive order history, enabling users to track past purchases and streamline future orders.",
        technologies: ["PHP", "ASP. NET Core", "MySQL", "Bootstrap"],
        features: [
            "User Account Management",
            "Store Browsing & Status",
            "Product Catalog & Search",
            "Ordering System",
            "Order Tracking",
            "Feedback & Ratings"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/drive/folders/1GkhH_hJACpIkerfCQjH0zF0j1cO8_hrW?fbclid=IwY2xjawKrTM1leHRuA2FlbQIxMQABHofjNqPdVEjFRYqylopKVGB8kQcDIBEiiRliotzltgeOXnF9lYnWkqeD8UWd_aem__X7j-z6U-8ZTM1YlsSyHVA",
        documentUrl: "https://docs.google.com/document/d/1hQPuP1Drre3-s9iVwSVPXoNy5PDCOXXH3lun85-y2Qs/edit?usp=sharing"
    },
    {
        id: 3,
        title: "ReliQuik",
        tag: "UI-UX",
        type: "case-study",
        role: "UI/UX Designer",
        year: 2023,
        date: "2023-05-25",
        images: ["pppp1.png", "pppp2.png", "pppp3.png", "pppp4.png"],
        summary: "A research-verification web app helping students filter and check the credibility of online sources.",
        description: "REALIEABLE is a user-centered web application designed to streamline the process of verifying online information. Focused on students and young researchers, it combines intuitive content filtering, credibility tools, and collaborative features to promote efficient and reliable research in academic and everyday digital environments.",
        technologies: ["Figma", "Sketch"],
        features: [
            "User Account Setup",
            "Content Creation & Management",
            "Content Filtering & Verification",
            "Search System",
            "Engagement & Credibility Signals",
            "Collaboration & Discussion"
        ],
        liveUrl: "#",
        behanceUrl: "#",
        documentUrl: "https://docs.google.com/document/d/1Iuip7ND6O8Np98uR3CpWQbYyfe9IWTI5sgwecmipVxQ/edit?usp=sharing"
    },
    {
        id: 4,
        title: "ShoPUP",
        tag: "Website",
        type: "case-study",
        role: "Full-Stack Developer & UI Designer",
        year: 2024,
        date: "2024-02-17",
        images: ["ppp1.png", "ppp2.png", "ppp3.png", "ppp4.png", "ppp5.png", "ppp6.png", "ppp7.png", "ppp8.png", "ppp9.png", "ppp10.png", "ppp11.png", "ppp12.png", "ppp13.png", "ppp14.png", "ppp15.png", "ppp16.png", "ppp17.png"],
        summary: "An online shop platform with real-time inventory and integrated customer reviews.",
        description: "Many current sales inventory systems suffer from outdated technology, leading to performance issues and limited functionality. A lack of real-time inventory visibility often causes stock inaccuracies, affecting restocking efficiency and customer satisfaction. To address these challenges, the group developed ShoPUP—an online shop website with integrated customer reviews.",
        technologies: ["PHP", "MySQLi", "Javascript", "CSS"],
        features: [
            "Manage Category List",
            "Manage Brand List",
            "Manage Products",
            "Manage Orders",
            "Manage Messages",
            "Browse Product with details",
            "Shopping Cart",
            "Login/Registration",
            "Manage Account Details",
            "Add Products to Wish List",
            "Add Products to Compare",
            "Send Message to Management"
        ],
        liveUrl: "#",
        githubUrl: "https://drive.google.com/file/d/13Xs5VfXvjxEWk6fgcOffDDQh_cBuD7sN/view?usp=sharing",
        documentUrl: "https://docs.google.com/document/d/10TOBwqFimtc6uLJ0QS7E9ohA9RRgx8WU/edit?usp=sharing&ouid=112556465980385058368&rtpof=true&sd=true"
    }
    // --- Example: a pure UI showcase entry, no UX process claimed ---
    // Copy this block, fill in your own images/links, and set type
    // to "ui-showcase" for visual-only work (e.g. a UI kit, a poster
    // series, game art) that doesn't have a research/testing process
    // behind it.
    // ,{
    //     id: 5,
    //     title: "Cozy Cuisine — UI Kit & Animations",
    //     tag: "UI Design",
    //     type: "ui-showcase",
    //     role: "UI/UX Intern",
    //     year: 2025,
    //     date: "2025-06-01",
    //     images: ["cozy1.png", "cozy2.png", "cozy3.png"],
    //     summary: "Pixel-art UI components and animations for a cooking game, built in Figma and Aseprite.",
    //     description: "Interactive UI components, promotional assets, and a UI style guide for a pixel-art cooking game.",
    //     technologies: ["Figma", "Aseprite"],
    //     behanceUrl: "#"
    // }
];*/

// ============================================================
// Works page — filters, cards, rendering
// ============================================================

function populateFilterOptions() {
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    if (!yearFilter || !typeFilter) return;

    const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
    years.forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearFilter.appendChild(opt);
    });

    const types = [...new Set(projects.map(p => p.tag))].sort();
    types.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        typeFilter.appendChild(opt);
    });
}

function createProjectCard(project) {
    const banner = project.images && project.images[0] ? project.images[0] : '';
    return `
        <div class="project-card" onclick="openProjectDetail(${project.id})">
            <div class="project-card-banner" style="background-image: url('${banner}');">
                <span class="project-card-banner-label">${project.tag}</span>
            </div>
            <div class="project-card-body">
                <div class="project-card-title">${project.title}</div>
                <p class="project-card-summary">${project.summary || project.description}</p>
                <div class="project-card-tags">
                    ${(project.technologies || []).slice(0, 4).map(t => `<span class="project-card-tag">${t}</span>`).join('')}
                </div>
                <div class="project-card-footer">
                    <span class="project-card-year">${project.year}</span>
                    <span class="project-card-cta">View Case Study <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    const emptyState = document.getElementById('works-empty-state');
    if (!grid) return;

    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const yearVal = yearFilter ? yearFilter.value : 'all';
    const typeVal = typeFilter ? typeFilter.value : 'all';

    const filtered = projects.filter(p => {
        const yearMatch = yearVal === 'all' || String(p.year) === yearVal;
        const typeMatch = typeVal === 'all' || p.tag === typeVal;
        return yearMatch && typeMatch;
    });

    // Newest first
    filtered.sort((a, b) => b.year - a.year);

    grid.innerHTML = filtered.map(createProjectCard).join('');

    if (emptyState) {
        emptyState.classList.toggle('hidden', filtered.length > 0);
    }
}

// ============================================================
// Project gallery — plain grid + click-to-enlarge (no auto-slider)
// ============================================================

function createGallery(images) {
    if (!images || images.length === 0) return '';
    return `
        <div class="gallery-container">
            <h3>Project Gallery</h3>
            <div class="gallery-grid">
                ${images.map(img => `<img src="${img}" alt="Project screenshot" onclick="openLightbox('${img}')">`).join('')}
            </div>
        </div>
    `;
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
}

function closeLightbox(event) {
    // Only close on background or close-button click, not when clicking the image itself
    if (event && event.target.id === 'lightbox-img') return;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.add('hidden');
}

// ============================================================
// Project / case study detail page
// ============================================================

function openProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const detailBody = document.getElementById('project-detail-body');
    if (!detailBody) return;

    const isCaseStudy = project.type !== 'ui-showcase';
    const badgeLabel = isCaseStudy ? 'UI/UX Case Study' : 'UI Showcase';
    const badgeClass = isCaseStudy ? 'type-case-study' : 'type-ui-showcase';

    // Meta row: only show fields that actually exist for this project
    const metaItems = [];
    if (project.role) metaItems.push({ label: 'Role', value: project.role });
    metaItems.push({ label: 'Year', value: project.year });
    if (project.technologies && project.technologies.length) {
        metaItems.push({ label: 'Tools', value: project.technologies.join(', ') });
    }
    const metaHTML = metaItems.map(m => `
        <div class="case-study-meta-item">
            <div class="case-study-meta-label">${m.label}</div>
            <div class="case-study-meta-value">${m.value}</div>
        </div>
    `).join('');

    // Optional long-form sections — only render if the project data has them
    let sectionsHTML = '';
    if (project.problem) {
        sectionsHTML += `<div class="case-study-section"><h3>The Problem</h3><p>${project.problem}</p></div>`;
    }
    if (project.solution) {
        sectionsHTML += `<div class="case-study-section"><h3>The Solution</h3><p>${project.solution}</p></div>`;
    }
    if (project.process && project.process.length) {
        sectionsHTML += project.process.map(step => `
            <div class="case-study-section">
                <h3>${step.title}</h3>
                <p>${step.text}</p>
            </div>
        `).join('');
    }

    // Key Features / Highlights
    const featuresList = (project.features || []).map(f => `<li>${f}</li>`).join('');
    const featuresHTML = featuresList ? `
        <div class="project-technologies">
            <h3>${isCaseStudy ? 'Key Features' : 'Highlights'}</h3>
            <ul style="text-align: left; max-width: 600px; margin: 0 auto; line-height: 1.8;">
                ${featuresList}
            </ul>
        </div>
    ` : '';

    // Results — only if provided, never invented
    let resultsHTML = '';
    if (project.results && project.results.length) {
        resultsHTML = `
            <div class="case-study-section">
                <h3>Results</h3>
                <div class="tech-list">
                    ${project.results.map(r => `<span class="tech-item"><strong>${r.value}</strong> ${r.label}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Technologies list
    const techList = (project.technologies || []).map(tech =>
        `<span class="tech-item">${tech}</span>`
    ).join('');

    // Links
    let projectLinks = '';
    if (project.liveUrl && project.liveUrl !== '#') {
        projectLinks += `<a href="${project.liveUrl}" class="project-link" target="_blank">
            <i class="fas fa-external-link-alt"></i> View Live
        </a>`;
    }
    if (project.githubUrl && project.githubUrl !== '#') {
        projectLinks += `<a href="${project.githubUrl}" class="project-link" target="_blank">
            <i class="fab fa-github"></i> View Code
        </a>`;
    }
    if (project.behanceUrl && project.behanceUrl !== '#') {
        projectLinks += `<a href="${project.behanceUrl}" class="project-link" target="_blank">
            <i class="fab fa-behance"></i> View Design
        </a>`;
    }
    if (project.documentUrl && project.documentUrl !== '#') {
        projectLinks += `<a href="${project.documentUrl}" class="project-link" target="_blank">
            <i class="fas fa-file-alt"></i> View Document
        </a>`;
    }

    const galleryHTML = createGallery(project.images);

    detailBody.innerHTML = `
        <div class="project-header">
            <span class="case-study-badge ${badgeClass}">${badgeLabel}</span>
            <h1>${project.title}</h1>
        </div>

        <div class="case-study-meta">
            ${metaHTML}
        </div>

        <div class="project-description">
            ${project.description}
        </div>

        ${sectionsHTML}

        ${galleryHTML}

        ${featuresHTML}

        ${project.technologies && project.technologies.length ? `
        <div class="project-technologies">
            <h3>Tools & Technologies</h3>
            <div class="tech-list">
                ${techList}
            </div>
        </div>` : ''}

        ${resultsHTML}

        <div class="project-links">
            ${projectLinks}
        </div>
    `;

    document.getElementById('project-detail').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectDetail() {
    const detail = document.getElementById('project-detail');
    if (detail) detail.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ============================================================
// Achievements tab switching
// ============================================================

function switchTab(tabName, element) {
    const allTabs = document.querySelectorAll('.tab-item');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('inactive');
    });
    element.classList.add('active');
    element.classList.remove('inactive');

    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => section.classList.remove('active'));

    const target = document.getElementById(tabName);
    if (target) target.classList.add('active');
}



// ============================================================
// Page init
// ============================================================

document.addEventListener("DOMContentLoaded", function() {

    // --- Works page setup (guarded so this is a no-op on other pages) ---
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    if (yearFilter && typeFilter) {
        populateFilterOptions();
        renderProjects();
        yearFilter.addEventListener('change', renderProjects);
        typeFilter.addEventListener('change', renderProjects);
    }

    // Close project detail when clicking outside the panel
    const projectDetail = document.getElementById('project-detail');
    if (projectDetail) {
        projectDetail.addEventListener('click', function(e) {
            if (e.target === this) closeProjectDetail();
        });
    }

    // Close lightbox / project detail with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') return;
        const lightbox = document.getElementById('lightbox');
        if (lightbox && !lightbox.classList.contains('hidden')) {
            closeLightbox();
            return;
        }
        const detail = document.getElementById('project-detail');
        if (detail && !detail.classList.contains('hidden')) {
            closeProjectDetail();
        }
    });

    // --- Achievement card hover effect (only relevant on achievements.html) ---
    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
function forceDownload() {
    const link = document.createElement('a');
    link.href = 'https://www.dropbox.com/scl/fi/rwgx9d5ikzujgvbiiebpv/Velasco-Ma.-Cristina-S_Resume.pdf?rlkey=k1rl5xl27959fxjs6rt2puixz&st=7ia5pyki&dl=0&dl=1';
    link.download = 'Cristina_Velasco_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const cards = document.querySelectorAll('.projects-grid .project-card');
    const emptyState = document.getElementById('works-empty-state');

    if (!yearFilter || !typeFilter || cards.length === 0) return;

    // 1. DYNAMICALLY POPULATE DROPDOWNS FROM HTML
    const yearsSet = new Set();
    const typesSet = new Set();

    cards.forEach(card => {
        // Read year from <span class="card-year">
        const yearEl = card.querySelector('.card-year');
        if (yearEl) yearsSet.add(yearEl.textContent.trim());

        // Read type/category from <span class="category-badge">
        const typeEl = card.querySelector('.category-badge');
        if (typeEl) typesSet.add(typeEl.textContent.trim());
    });

    // Add Year options (sorted descending)
    Array.from(yearsSet)
        .sort((a, b) => b - a)
        .forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });

    // Add Type options (sorted alphabetically)
    Array.from(typesSet)
        .sort()
        .forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });

    // 2. FILTERING FUNCTION
    function filterCards() {
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;
        let visibleCount = 0;

        cards.forEach(card => {
            const cardYear = card.querySelector('.card-year')?.textContent.trim();
            const cardType = card.querySelector('.category-badge')?.textContent.trim();

            const yearMatches = selectedYear === 'all' || cardYear === selectedYear;
            const typeMatches = selectedType === 'all' || cardType === selectedType;

            if (yearMatches && typeMatches) {
                card.style.display = ''; // Show card
                visibleCount++;
            } else {
                card.style.display = 'none'; // Hide card
            }
        });

        // Toggle Empty State message
        if (emptyState) {
            emptyState.classList.toggle('hidden', visibleCount > 0);
        }
    }

    // Attach listeners
    yearFilter.addEventListener('change', filterCards);
    typeFilter.addEventListener('change', filterCards);
});