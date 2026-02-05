const container = document.getElementById('particle-container');
const emojis = ['💖','💘','❤️','💕','🌹','✨'];

function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = Math.random() * 30 + 20 + 'px';

    const duration = Math.random() * 3 + 3;
    p.style.setProperty('--duration', duration + 's');

    container.appendChild(p);
    setTimeout(() => p.remove(), duration * 1000);
}

setInterval(createParticle, 200);

/* BUTTON LOGIC */
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionPage = document.getElementById('questionPage');
const yesPage = document.getElementById('yesPage');

let scale = 1;

noBtn.addEventListener('click', () => {
    scale -= 0.15;
    if (scale < 0.2) scale = 0.2;
    noBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener('click', () => {
    questionPage.classList.add('hidden');
    yesPage.classList.remove('hidden');
});
