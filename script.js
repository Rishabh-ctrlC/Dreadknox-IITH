// Mock Database for IITH Pod-Mates
const students = [
    {
        name: "Rishabh Dixit",
        roll: "11048",
        branch: "Civil Engineering (CE23)",
        block: "Lambda",
        pod: "Pod 4",
        contact: "Akhilesh Dixit (Emergency)"
    },
    {
        name: "Sreeteja",
        roll: "11049",
        branch: "Computer Science",
        block: "Lambda",
        pod: "Pod 2",
        contact: "9000244522"
    },
    {
        name: "Aric",
        roll: "11050",
        branch: "Electrical Engineering",
        block: "Epsilon",
        pod: "Pod 1",
        contact: "7890175017"
    }
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