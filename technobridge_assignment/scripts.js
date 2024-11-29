// Tabs functionality
const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion-button');
accordions.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.display === 'block';

        document.querySelectorAll('.accordion-content').forEach(ac => (ac.style.display = 'none'));
        content.style.display = isOpen ? 'none' : 'block';
    });
});
