window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('mouseclick', () => {
        item.style.color = '#ffd700';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});