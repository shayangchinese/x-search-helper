// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');
        const tabId = `tab-${tab.dataset.tab}`;
        document.getElementById(tabId).classList.add('active');
    });
});

// Query card click - open X search
document.querySelectorAll('.query-card').forEach(card => {
    card.addEventListener('click', () => {
        const query = card.dataset.query;
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `https://x.com/search?q=${encodedQuery}&src=typed_query&f=live`;

        // Open in new tab
        chrome.tabs.create({ url: searchUrl });
    });
});

// Filter functionality
const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    document.querySelectorAll('.query-card').forEach(card => {
        const title = card.querySelector('.query-title').textContent.toLowerCase();
        const desc = card.querySelector('.query-desc').textContent.toLowerCase();
        const code = card.querySelector('.query-code').textContent.toLowerCase();

        const matches = title.includes(searchTerm) ||
            desc.includes(searchTerm) ||
            code.includes(searchTerm);

        card.classList.toggle('hidden', !matches);
    });
});

// Keyboard shortcut: Enter to open first visible card
filterInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeTab = document.querySelector('.tab-content.active');
        const firstVisibleCard = activeTab.querySelector('.query-card:not(.hidden)');
        if (firstVisibleCard) {
            firstVisibleCard.click();
        }
    }
});
