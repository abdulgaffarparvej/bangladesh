// মোবাইল মেনু টগল
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// মেনু লিংকে ক্লিক করলে মেনু বন্ধ
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// স্বাগতম বার্তা
const welcomeBtn = document.getElementById('welcomeBtn');
welcomeBtn.addEventListener('click', () => {
    alert('🇧🇩 বাংলাদেশ টেস্ট ওয়েবসাইটে স্বাগতম!\n\nআশা করি আপনি এখান থেকে ভালো কিছু পাবেন।');
});

// বিভাগ ক্লিকে বার্তা
document.querySelectorAll('.division-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.textContent + ' বিভাগ সম্পর্কে আরও তথ্য শীঘ্রই আসছে!');
    });
});

// ফর্ম সাবমিট
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        formMsg.textContent = `ধন্যবাদ ${name}! আপনার বার্তা পাঠানো হয়েছে।`;
        formMsg.style.color = '#006a4e';
        contactForm.reset();
    } else {
        formMsg.textContent = 'সব ঘর পূরণ করুন!';
        formMsg.style.color = 'red';
    }
});

// স্ক্রল অ্যানিমেশন
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// স্ক্রল করার সময় হেডার শ্যাডো
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    }
});