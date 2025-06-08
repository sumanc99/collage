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
    // Distance Learning Masters
    {
        category: "Masters",
        title: "Biotechnology",
        description: "Acquire advanced theoretical knowledge and cutting-edge practical skills in applying biological systems and living organisms to develop new technologies and products. This program delves into areas like genetic engineering, bioinformatics, and bioprocess technology, preparing you for innovative research and development roles in pharmaceutical, agricultural, and industrial sectors.",
        icon: "bi-activity"
    },   
    
    {
        category: "Masters",
        title: "Computer Science",
        description: "Deepen your expertise with advanced theoretical concepts and sophisticated practical skills in computer science. This program covers specialized areas such as artificial intelligence, machine learning, data science, cybersecurity, or advanced software engineering, preparing you for leading roles in research, academia, and high-tech industries.",
        icon: "bi-robot"
    },  
    
    {
        category: "Masters",
        title: "Geology",
        description: "Gain advanced theoretical understanding and practical skills in the study of Earth's materials, structures, and processes. This program explores specialized topics like petrology, structural geology, geophysics, and environmental geology, preparing you for expert roles in geological surveys, mineral exploration, environmental consulting, and academic research.",
        icon: "bi-globe-americas"
    }, 
    
    
    {
        category: "Masters",
        title: "Zoology",
        description: "Acquire advanced theoretical knowledge and practical expertise in the scientific study of animal life, including their classification, evolution, behavior, and ecology. This program offers specialization in areas like conservation biology, animal physiology, or behavioral ecology, preparing you for research, wildlife management, and conservation roles in diverse environments.",
        icon: "bi-bug"
    }, 
    
    {
        category: "Masters",
        title: "Health and Safety at work",
        description: "Develop specialized theoretical knowledge and practical skills to assess, manage, and mitigate health and safety risks in various occupational settings. This program focuses on legal frameworks, risk assessment methodologies, accident investigation, and the implementation of robust safety management systems, preparing you for leadership roles in occupational health and safety across industries.",
        icon: "bi-patch-check"
    },

    // {
    //     category: "Masters",
    //     title: "",
    //     description: "",
    //     icon: "bi-briefcase-fill"
    // },


    // Distance Learning Degree
    {
        category: "Distance Learning",
        title: "Department Of Communication and Media Studies",
        description: "This department offers BSc programs in BSc programs in Film & Multimedia, Mass Communication, and Advertising and Public Relations, this department trains students for careers in media and communications.",
        icon: " bi-broadcast"
    },
    {
        category: "Distance Learning",
        title: "Department Of Computing",
        description: "This department offers BSc programs in Computer Science, Cybersecurity, Data Science, Software Engineering, and Information & Communication Tech., preparing students for diverse roles in the rapidly evolving tech industry.",
        icon: "bi-code-slash"
    },
    {
        category: "Distance Learning",
        title: "Department Of Education",
        description: "This department offers diverse Bachelor of Education programs, including BSc Ed Adult & Continuing Education, B Ed Educational Management, B Ed Guidance & Counselling, B Ed Health Education, BSc Ed Special Needs Education, BSc Ed Sustainable Development Studies, and B Ed Educational Technology, training educators for various learning environments.",
        icon: "bi-book"
    },
    
    {
        category: "Distance Learning",
        title: "Department Of Engineering Tech",
        description: "This department offers BEng programs in Agricultural & Biosystems Engineering, Biomedical Engineering, Marine & Offshore Engineering, Railway Engineering, and Mechatronics Engineering, preparing students for specialized careers in various engineering fields.",
        icon: "bi-gear"
    }, 
    
    {
        category: "Distance Learning",
        title: "Department Of Sciences",
        description: "This department offers BSc programs in Applied Geophysics, Biotechnology, Environmental Management & Toxicology, Forensic Science, Science Laboratory Technology, and Zoology, providing a strong foundation in diverse scientific disciplines.",
        icon: "bi-flask"
    },
    
    
    {
        category: "Distance Learning",
        title: "Department Of Social Sciences",
        description: "This department offers BSc programs including Criminology and Security Studies, International Relations, Peace Studies & Conflict Resolution, and Social Standards, focusing on societal structures, human behavior, and global issues.",
        icon: "bi-person-lines-fill"
    },
    
    
    
    {
        category: "Distance Learning",
        title: "Department Of Administration and Management",
        description: "This department offers BSc programs in Business Information Technology, Hospitality and Tourism Management, Office and Information Management, Public Administration, and Transportation, preparing students for diverse management and administrative roles.",
        icon: "bi-briefcase"
    }, 
    {
        category: "Distance Learning",
        title: "Department Of Agriculture",
        description: "This department offers BSc/BTech programs including Agribusiness, Fisheries and Aquaculture, Food Science and Technology, Forest Resources & Wildlife Mgmt., and Horticulture & Landscape Mgmt., focusing on various aspects of agricultural science and management.",
        icon: "bi-tree"
    },
 
    {
        category: "Distance Learning",
        title: "Department Of Allied Health Sciences",
        description: "This department offers BSc programs in Complementary & Altern. Medicine, Environmental Health Science, IT and Health Informatics, Medical Laboratory Science, Nursing, and Public Health, preparing students for diverse roles in healthcare and health-related fields.",
        icon: "bi-hospital"
    }, 
    {
        category: "Distance Learning",
        title: "Department Of Architecture",
        description: "This department offers BSc programs in Architecture and Landscape Architecture, training students in the design, planning, and construction of built and natural environments.",
        icon: "bi-compass"
    },
    
    {
        category: "Distance Learning",
        title: "Department Of Arts",
        description: "This department offers BA programs in Linguistics, Archeology, and Theatre Arts, providing a deep understanding of human culture, history, and creative expression.",
        icon: "bi-palette"
    }, 
    
    {
        category: "Distance Learning",
        title: "Department Of Enviromental Sciences",
        description: "This department offers BSc/BTech programs in Environmental Standards, Estate Management, and Urban & Regional Planning, focusing on sustainable development, environmental policy, and spatial planning.",
        icon: "bi-globe-europe-africa"
    },

    // {
    //     category: "Distance Learning",
    //     title: "",
    //     description: "",
    //     icon: ""
    // },

    // Diploma Programs
    {
        category: "Diploma",
        title: "Community Health (CHEW)",
        description: "Gain comprehensive knowledge and practical skills essential for community health workers, focusing on disease prevention, health promotion, and the delivery of primary healthcare services at the grassroots level, empowering communities to achieve better health outcomes.",
        icon: "bi-heart-pulse-fill"
    },
    {
        category: "Diploma",
        title: "Medical Lab Technician",
        description: "Develop specialized expertise and hands-on skills in performing a wide range of clinical laboratory tests, from hematology to microbiology. Learn to accurately analyze patient samples, operate sophisticated lab equipment, and contribute vital diagnostic information that aids in effective disease diagnosis and treatment.",
        icon: "bi-file-medical-fill"
    },
    {
        category: "Diploma",
        title: "Prosthetic and Orthotic",
        description: "Master the technical and clinical skills required to design, fabricate, and precisely fit custom prosthetic devices (artificial limbs) and orthotic braces (supportive devices). This program equips you to enhance mobility, alleviate discomfort, and significantly improve the independence and quality of life for individuals with physical challenges.",
        icon: "bi-person-wheelchair"
    },
    {
        category: "Diploma",
        title: "Environmental Health Technology",
        description: "Acquire critical practical skills in identifying, assessing, and managing environmental hazards that pose risks to public health. This includes expertise in water quality analysis, waste management, food safety, industrial hygiene, and disease vector control, preparing you to create safer and healthier living environments.",
        icon: "bi-leaf"
    },
    {
        category: "Diploma",
        title: "Pharmacy Technician",
        description: "Obtain in-depth practical skills to effectively assist licensed pharmacists in various healthcare settings. Learn precise medication preparation and dispensing, accurate dosage calculation, inventory management, patient record keeping, and providing essential medication information, playing a crucial role in patient safety and pharmaceutical care.",
        icon: "bi-capsule"
    },

    {
        category: "Diploma",
        title: "Public Health Technician",
        description: "Develop versatile practical skills for the implementation and support of public health programs aimed at improving population health. This includes proficiency in health data collection and analysis, community health education, disease surveillance, outbreak investigation, and promoting wellness initiatives to address public health challenges effectively.",
        icon: "bi-clipboard2-pulse"
    },
    
    {
        category: "Diploma",
        title: "Computer Science",
        description: "Build a strong foundation and gain advanced practical skills in the core principles of computer science, encompassing programming languages, data structures, algorithms, and software engineering. This program prepares you to design, develop, and implement innovative software solutions, analyze complex data, and solve real-world computational problems across diverse industries.",
        icon: "bi-code-slash"
    }, 
    
    // {
    //     category: "Diploma",
    //     title: "Diploma in Pharmacy Technician",
    //     description: "",
    //     icon: "bi-building"
    // },

    // HND programs

    {
        category: "HND",
        title: "Public Health",
        description: "Gain advanced practical skills and in-depth knowledge in identifying, assessing, and addressing public health challenges at a community and national level. This program equips you to design, implement, and evaluate health interventions, conduct epidemiological studies, and promote well-being, preparing you for leadership roles in public health initiatives.",
        icon: "bi-heart-pulse"
    },
    {
        category: "HND",
        title: "Public Administration",
        description: "Develop comprehensive practical skills in managing public resources, formulating policies, and overseeing government operations. This program provides in-depth knowledge of public sector governance, human resource management, and financial administration, preparing you for effective and ethical leadership roles within public service organizations.",
        icon: "bi-briefcase"
    },
    {
        category: "HND",
        title: "Business Administration",
        description: "Acquire advanced practical skills and strategic insights essential for successful business management across diverse industries. This program covers core areas such as marketing, finance, human resources, operations, and strategic planning, preparing you to lead teams, optimize processes, and drive organizational growth and profitability.",
        icon: "bi-graph-up-arrow"
    },
    {
        category: "HND",
        title: "Computer Science",
        description: "Build a strong foundation and gain advanced practical skills in the core principles of computer science, encompassing programming languages, data structures, algorithms, and software engineering. This program prepares you to design, develop, and implement innovative software solutions, analyze complex data, and solve real-world computational problems across diverse industries.",
        icon: "bi-code-slash"
    },
    {
        category: "HND",
        title: "Science Laboratory Technology",
        description: "Master advanced practical skills in performing intricate laboratory procedures, analyzing samples, and operating sophisticated scientific equipment across various disciplines like chemistry, biology, and physics. This program prepares you for specialized roles in research, diagnostics, quality control, and industrial laboratories.",
        icon: "bi-flask"
    },
    {
        category: "HND",
        title: "Mass Communication",
        description: "Develop comprehensive practical skills in various facets of mass communication, including journalism, broadcasting, public relations, and advertising. This program emphasizes ethical communication, content creation across different media platforms, and strategic messaging, preparing you for dynamic careers in media industries and corporate communications",
        icon: "bi-newspaper"
    },
    {
        category: "HND",
        title: "Community Health",
        description: "Gain comprehensive knowledge and practical skills essential for community health workers, focusing on disease prevention, health promotion, and the delivery of primary healthcare services at the grassroots level, empowering communities to achieve better health outcomes.",
        icon: "bi-heart-pulse"
    },  

    // {
    //     category: "HND",
    //     title: "Higher National Diploma in Public Health",
    //     description: "",
    //     icon: "bi-code-slash"
    // },

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
            <h5 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                    <i class="bi ${program.icon} me-2"></i> ${program.title}
                </button>
            </h5>
            <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#${accordionId}">
                <div class="accordion-body">
                    <p>${program.description}</p>
                   
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
    createProgramAccordion('HND', 'HNDprogramsAccordion');
    createProgramAccordion('Masters', 'MastersprogramsAccordion');
});