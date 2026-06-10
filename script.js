const presentation = document.getElementById('presentation');
const currentSlideText = document.getElementById('current-slide');
const progress = document.getElementById('progress');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const bgAnim = document.getElementById('bg-anim');

let currentIndex = 0;
const totalSlides = 25;

// Generate background particles
function createParticles() {
    const totalParticles = 80; 
    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 12 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Randomize speed and trajectory
        const duration = Math.random() * 10 + 5; 
        const xStart = Math.random() * 100 - 50; // -50px to 50px
        const xEnd = Math.random() * 100 - 50;   // -50px to 50px
        const maxOpacity = Math.random() * 0.2 + 0.1;

        particle.style.setProperty('--duration', `${duration}s`);
        particle.style.setProperty('--x-start', `${xStart}px`);
        particle.style.setProperty('--x-end', `${xEnd}px`);
        particle.style.setProperty('--max-opacity', maxOpacity);
        
        particle.style.animationDelay = `${Math.random() * 10}s`;
        bgAnim.appendChild(particle);
    }
}

async function loadSlide(index) {
    try {
        const response = await fetch(`slides/slide${index + 1}.html`);
        if (!response.ok) throw new Error('Slide not found');
        const content = await response.text();
        
        // Add a temporary slide element for smooth transition
        const newSlide = document.createElement('section');
        newSlide.className = 'slide active';
        newSlide.innerHTML = content;
        
        // Clear previous and add new
        presentation.innerHTML = '';
        presentation.appendChild(newSlide);

        // Execute any script tags in the new slide
        const scripts = newSlide.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
        
        // Update UI
        currentSlideText.textContent = index + 1;
        const progressPercent = ((index + 1) / totalSlides) * 100;
        progress.style.width = `${progressPercent}%`;
    } catch (error) {
        console.error('Error loading slide:', error);
        presentation.innerHTML = `<div class="slide active"><div class="title-slide"><h1>Error loading slide ${index + 1}</h1><p>Please ensure you are running this via a local server (e.g., Live Server).</p></div></div>`;
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            loadSlide(currentIndex);
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            currentIndex--;
            loadSlide(currentIndex);
        }
    } else if (e.key.toLowerCase() === 'f' || e.code === 'KeyF') {
        console.log('F key pressed - toggling fullscreen');
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        document.body.classList.add('fullscreen');
    } else {
        document.exitFullscreen();
        document.body.classList.remove('fullscreen');
    }
}

// Fullscreen logic
fullscreenBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen');
    }
});

// Initial load
createParticles();
loadSlide(currentIndex);
