// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// About Section Read More/Read Less
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readLessBtn = document.getElementById('readLessBtn');
    const shortText = document.getElementById('aboutShortText');
    const fullText = document.getElementById('aboutFullText');

    readMoreBtn.addEventListener('click', () => {
        shortText.style.display = 'none';
        fullText.style.display = 'block';
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline-block';
    });

    readLessBtn.addEventListener('click', () => {
        shortText.style.display = 'block';
        fullText.style.display = 'none';
        readMoreBtn.style.display = 'inline-block';
        readLessBtn.style.display = 'none';
    });
});

// Array of program objects, grouped by category
const programs = [
    // Distance Learning Programs
    {
        category: "Distance Learning",
        title: "Online Business Administration",
        description: "Develop skills in finance, marketing, and management through our flexible online program.",
        icon: "bi-briefcase-fill"
    },
    {
        category: "Distance Learning",
        title: "Computer Science (Online)",
        description: "Master programming and data analysis with our industry-aligned online computer science program.",
        icon: "bi-code-slash"
    },
    {
        category: "Distance Learning",
        title: "Digital Marketing",
        description: "Learn SEO, social media, and analytics in a fully online format designed for working professionals.",
        icon: "bi-globe"
    },
    // Diploma Programs
    {
        category: "Diploma",
        title: "Diploma in Civil Engineering",
        description: "Gain practical skills in structural design and construction management.",
        icon: "bi-gear-fill"
    },
    {
        category: "Diploma",
        title: "Diploma in Nursing",
        description: "Prepare for a rewarding career in healthcare with hands-on nursing training.",
        icon: "bi-heart-pulse-fill"
    },
    {
        category: "Diploma",
        title: "Diploma in Graphic Design",
        description: "Explore creative design principles and software tools for visual communication.",
        icon: "bi-brush-fill"
    },
    {
        category: "Diploma",
        title: "Diploma in Hospitality Management",
        description: "Learn the skills needed to excel in the hospitality and tourism industry.",
        icon: "bi-building"
    }
];

// Function to create accordion items for a given category and accordion ID
function createProgramAccordion(category, accordionId) {
    const accordionContainer = document.getElementById(accordionId);
    const filteredPrograms = programs.filter(program => program.category === category);

    filteredPrograms.forEach((program, index) => {
        // Create unique IDs for each accordion item
        const safeTitle = program.title.replace(/\s+/g, ''); // Remove spaces for ID
        const headingId = `heading${safeTitle}${accordionId}`;
        const collapseId = `collapse${safeTitle}${accordionId}`;

        // Create accordion item
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        
        // Generate accordion HTML
        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                    <i class="bi ${program.icon} me-2"></i> ${program.title}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#${accordionId}">
                <div class="accordion-body">
                    <p>${program.description}</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">Learn More</a>
                </div>
            </div>
        `;

        // Append to accordion container
        accordionContainer.appendChild(accordionItem);
    });
}

// Call the function for each accordion when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProgramAccordion('Distance Learning', 'DistanceprogramsAccordion');
    createProgramAccordion('Diploma', 'DiplomaprogramsAccordion');
});