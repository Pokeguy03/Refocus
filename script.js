// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for hero heading
    const heroHeading = document.querySelector('#hero h2');
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroHeading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Navigation highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        form.appendChild(successMessage);
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });

    // Add Chart.js CDN to your HTML head section
    document.addEventListener('DOMContentLoaded', function() {
        // Sample data for charts
        const dailyData = {
            labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM'],
            datasets: [{
                label: 'Reality Checks',
                data: [2, 4, 1, 3, 1, 1],
                borderColor: '#2563eb',
                tension: 0.4
            }]
        };
    
        const weeklyData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Episodes',
                data: [3, 2, 4, 1, 2, 2, 1],
                backgroundColor: '#7c3aed',
                borderRadius: 8
            }]
        };
    
        const yearlyData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Wellness Score',
                data: [65, 70, 68, 75, 82, 85],
                borderColor: '#2563eb',
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }]
        };
    
        // Create charts
        new Chart(document.getElementById('dailyChart'), {
            type: 'line',
            data: dailyData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    
        new Chart(document.getElementById('weeklyChart'), {
            type: 'bar',
            data: weeklyData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    
        new Chart(document.getElementById('yearlyChart'), {
            type: 'line',
            data: yearlyData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });
});
  