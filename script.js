// Complete Database for IITH Pod-Mates
const students = [
    // GROUP 1 - Lambda Block
    { name: "Sumanth", roll: "CE25BTECH11027", branch: "Civil Engineering", block: "Lambda", pod: "Pod 1", contact: "Update Pending" },
    { name: "Tulasi ram", roll: "CE25BTECH11012", branch: "Civil Engineering", block: "Lambda", pod: "Pod 1", contact: "Update Pending" },
    { name: "Vamshi", roll: "CE25BTECH11041", branch: "Civil Engineering", block: "Lambda", pod: "Pod 1", contact: "Update Pending" },
    { name: "Somashekhar", roll: "CE25BTECH11038", branch: "Civil Engineering", block: "Lambda", pod: "Pod 2", contact: "Update Pending" },
    { name: "Tharun", roll: "CE25BTECH11013", branch: "Civil Engineering", block: "Lambda", pod: "Pod 2", contact: "Update Pending" },
    { name: "Akshith", roll: "CE25BTECH11017", branch: "Civil Engineering", block: "Lambda", pod: "Pod 2", contact: "Update Pending" },

    // GROUP 2 - Epsilon Block
    { name: "Parth kadam", roll: "CE25BTECH11037", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 1", contact: "Update Pending" },
    { name: "Pratham shah", roll: "CE25BTECH11043", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 1", contact: "Update Pending" },
    { name: "Parth Patil", roll: "CE25BTECH11039", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 1", contact: "Update Pending" },
    { name: "Nirmal kumar", roll: "CE25BTECH11034", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 2", contact: "Update Pending" },
    { name: "Prashanth palakurthi", roll: "CE25BTECH11035", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 2", contact: "Update Pending" },
    { name: "Nenavath Bharath", roll: "CE25BTECH11033", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 2", contact: "Update Pending" },

    // GROUP 3 - Kappa Block
    { name: "G. Mythili dheemahi", roll: "CE25BTECH11022", branch: "Civil Engineering", block: "Kappa", pod: "Pod 1", contact: "Update Pending" },
    { name: "Chilla Shreshta", roll: "CE25BTECH11015", branch: "Civil Engineering", block: "Kappa", pod: "Pod 1", contact: "Update Pending" },
    { name: "P. Sai Vaishnavi", roll: "CE25BTECH11036", branch: "Civil Engineering", block: "Kappa", pod: "Pod 1", contact: "Update Pending" },
    { name: "Ganji sai chaitanya", roll: "CE25BTECH11020", branch: "Civil Engineering", block: "Kappa", pod: "Pod 2", contact: "Update Pending" },
    { name: "Duvas mohit chandra", roll: "CE25BTECH11019", branch: "Civil Engineering", block: "Kappa", pod: "Pod 2", contact: "Update Pending" },
    { name: "Mamidi Anurag", roll: "CE25BTECH11029", branch: "Civil Engineering", block: "Kappa", pod: "Pod 2", contact: "Update Pending" },

    // GROUP 4 - Delta Block
    { name: "Pushpak Jain", roll: "CE25BTECH11047", branch: "Civil Engineering", block: "Delta", pod: "Pod 1", contact: "Update Pending" },
    { name: "Priyanshu Lodwal", roll: "CE25BTECH11046", branch: "Civil Engineering", block: "Delta", pod: "Pod 1", contact: "Update Pending" },
    { name: "Prem P Kalleshwar", roll: "CE25BTECH11045", branch: "Civil Engineering", block: "Delta", pod: "Pod 1", contact: "Update Pending" },
    { name: "Pranjal Dadhich", roll: "CE25BTECH11042", branch: "Civil Engineering", block: "Delta", pod: "Pod 2", contact: "Update Pending" },
    { name: "Vemuru Nischith", roll: "CE25BTECH11058", branch: "Civil Engineering", block: "Delta", pod: "Pod 2", contact: "Update Pending" },
    { name: "Waychal Jayesh Vishwasrao", roll: "CE25BTECH11059", branch: "Civil Engineering", block: "Delta", pod: "Pod 2", contact: "Update Pending" },

    // GROUP 5 - Lambda Block
    { name: "Ramya sri", roll: "CE25BTECH11024", branch: "Civil Engineering", block: "Lambda", pod: "Pod 3", contact: "Update Pending" },
    { name: "Charan teja", roll: "CE25BTECH11025", branch: "Civil Engineering", block: "Lambda", pod: "Pod 3", contact: "Update Pending" },
    { name: "Pavandeep", roll: "CE25BTECH11028", branch: "Civil Engineering", block: "Lambda", pod: "Pod 3", contact: "Update Pending" },
    { name: "Manideep", roll: "CE25BTECH11032", branch: "Civil Engineering", block: "Lambda", pod: "Pod 4", contact: "Update Pending" },
    { name: "Vimal", roll: "CE25BTECH11026", branch: "Civil Engineering", block: "Lambda", pod: "Pod 4", contact: "Update Pending" },
    { name: "Sravanthi", roll: "CE25BTECH11056", branch: "Civil Engineering", block: "Lambda", pod: "Pod 4", contact: "Update Pending" },

    // GROUP 6 - Epsilon Block
    { name: "Keertana", roll: "CE25BTECH11055", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 3", contact: "Update Pending" },
    { name: "Aastha", roll: "CE25BTECH11003", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 3", contact: "Update Pending" },
    { name: "Bhavya", roll: "CE25BTECH11018", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 3", contact: "Update Pending" },
    { name: "Janhavi", roll: "CE25BTECH11054", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 4", contact: "Update Pending" },
    { name: "Sneha", roll: "CE25BTECH11060", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 4", contact: "Update Pending" },
    { name: "Samrudhi", roll: "CE25BTECH11030", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 4", contact: "Update Pending" },

    // GROUP 7 - Kappa Block
    { name: "Rudra Ajay Akoijwar", roll: "CE25BTECH11050", branch: "Civil Engineering", block: "Kappa", pod: "Pod 3", contact: "Update Pending" },
    { name: "Rishabh Dixit", roll: "CE25BTECH11048", branch: "Civil Engineering", block: "Kappa", pod: "Pod 3", contact: "Update Pending" },
    { name: "Abdul Vahab Shaik", roll: "CE25BTECH11052", branch: "Civil Engineering", block: "Kappa", pod: "Pod 3", contact: "Update Pending" },
    { name: "Amir", roll: "CE25BTECH11053", branch: "Civil Engineering", block: "Kappa", pod: "Pod 4", contact: "Update Pending" },
    { name: "Pravin Parate", roll: "CE25BTECH11044", branch: "Civil Engineering", block: "Kappa", pod: "Pod 4", contact: "Update Pending" },
    { name: "Rushiprasad Pawale", roll: "CE25BTECH11051", branch: "Civil Engineering", block: "Kappa", pod: "Pod 4", contact: "Update Pending" },

    // GROUP 8 - Delta Block
    { name: "Jagan G Nair", roll: "CE25BTECH11023", branch: "Civil Engineering", block: "Delta", pod: "Pod 3", contact: "Update Pending" },
    { name: "G. Yuvaraj", roll: "CE25BTECH11021", branch: "Civil Engineering", block: "Delta", pod: "Pod 3", contact: "Update Pending" },
    { name: "CH. Rakesh", roll: "CE25BTECH11014", branch: "Civil Engineering", block: "Delta", pod: "Pod 3", contact: "Update Pending" },
    { name: "B. Dinesh", roll: "CE25BTECH11011", branch: "Civil Engineering", block: "Delta", pod: "Pod 4", contact: "Update Pending" },
    { name: "D. Charan", roll: "CE25BTECH11010", branch: "Civil Engineering", block: "Delta", pod: "Pod 4", contact: "Update Pending" },
    { name: "A. Sri Charan", roll: "CE25BTECH11001", branch: "Civil Engineering", block: "Delta", pod: "Pod 4", contact: "Update Pending" },

    // GROUP 9 - Lambda Block
    { name: "Atharva Bansal", roll: "CE25BTECH11008", branch: "Civil Engineering", block: "Lambda", pod: "Pod 5", contact: "Update Pending" },
    { name: "Arjun dewan", roll: "CE25BTECH11007", branch: "Civil Engineering", block: "Lambda", pod: "Pod 5", contact: "Update Pending" },
    { name: "Bhavya atri", roll: "CE25BTECH11009", branch: "Civil Engineering", block: "Lambda", pod: "Pod 5", contact: "Update Pending" },
    { name: "Aarav mehta", roll: "CE25BTECH11002", branch: "Civil Engineering", block: "Lambda", pod: "Pod 6", contact: "Update Pending" },
    { name: "Neeraj reddy", roll: "CE25BTECH11006", branch: "Civil Engineering", block: "Lambda", pod: "Pod 6", contact: "Update Pending" },
    { name: "Varnika keshan", roll: "CE25BTECH11057", branch: "Civil Engineering", block: "Lambda", pod: "Pod 6", contact: "Update Pending" },

    // GROUP 10 - Epsilon Block
    { name: "Abhinav Sheerraj", roll: "CE25BTECH11004", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 5", contact: "Update Pending" },
    { name: "Akshad Chindhalore", roll: "CE25BTECH11016", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 5", contact: "Update Pending" },
    { name: "Mudunuri Sai Rishith Varma", roll: "CE25BTECH11031", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 5", contact: "Update Pending" },
    { name: "Peesapati Rohit Sharma", roll: "CE25BTECH11040", branch: "Civil Engineering", block: "Epsilon", pod: "Pod 6", contact: "Update Pending" }
];
const grid = document.getElementById('directoryGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');

// Render Cards to the DOM
function renderCards(data) {
    grid.innerHTML = '';
    data.forEach(student => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">${student.name}</div>
                <div class="roll-badge">${student.roll}</div>
            </div>
            <div class="card-detail">
                <div class="detail-row"><strong>Branch:</strong> ${student.branch}</div>
                <div class="detail-row"><strong>Location:</strong> ${student.block} Block, ${student.pod}</div>
                <div class="detail-row"><strong>Contact:</strong> ${student.contact}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    const filtered = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                              student.roll.includes(searchTerm) ||
                              student.pod.toLowerCase().includes(searchTerm);
        const matchesBlock = activeFilter === 'all' || student.block === activeFilter;
        return matchesSearch && matchesBlock;
    });
    renderCards(filtered);
});

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Trigger the search input event to re-evaluate search + block filters together
        searchInput.dispatchEvent(new Event('input'));
    });
});

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// Initial Render
renderCards(students);
