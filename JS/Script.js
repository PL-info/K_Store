document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.getElementById('Menu');
    const hasDropdown = document.querySelectorAll('.has-dropdown');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('showing');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            if(icon) icon.textContent = menu.classList.contains('showing') ? 'close' : 'menu';
        });
    }

    hasDropdown.forEach(item => {
        const link = item.querySelector('a');
        if(link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    item.classList.toggle('active');
                    const icon = item.querySelector('.dropdown-icon');
                    if (icon) {
                        icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                    }
                }
            });
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && menu) {
            menu.classList.remove('showing');
            const icon = menuToggle?.querySelector('.material-symbols-outlined');
            if(icon) icon.textContent = 'menu';
            hasDropdown.forEach(item => {
                item.classList.remove('active');
                const dIcon = item.querySelector('.dropdown-icon');
                if(dIcon) dIcon.style.transform = 'rotate(0deg)';
            });
        }
    });

    // --- Link # ---
    const allEmptyLinks = document.querySelectorAll('a[href="#"]');
    allEmptyLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    
    // Check Signup Form
    const signupForm = document.querySelector('#form-card'); 
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }

    // 2. Check Contact Form
    const contactForm = document.querySelector('#mind-sync-form'); 
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userName = document.querySelector('#name')?.value || "Guest";
            const userEmail = document.querySelector('#email')?.value || "Not provided";
            
            alert("Hello " + userName + " We already receive " + userEmail + " ");
            
            contactForm.reset();
        });
    }
});