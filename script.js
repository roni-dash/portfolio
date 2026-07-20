// ==================== ABOUT — DETAIL CONTENT ====================
// Each key matches a data-modal value on an .about-card button.
const aboutDetails = {
    bio: {
        path: "~/roni/about/bio.md",
        icon: "💼",
        title: "Biography",
        body: `
            <p>I'm a full-stack developer from Sylhet, Bangladesh, currently engineering solutions
            at Sitelar. I work across the stack — from data models and REST APIs to the interface
            someone actually clicks on — and I care as much about the second as the first.</p>
            <p>Most of my work lately has been in React and Next.js on the front end, with Node.js
            and MongoDB underneath. I like projects where the software has to hold up for a real
            community, not just look good in a demo — which is why both of the systems on this site
            were built for people who depend on them daily.</p>
        `
    },
    education: {
        path: "~/roni/about/education.md",
        icon: "📚",
        title: "Education",
        body: `
            <p>I completed my B.Sc in Computer Science & Engineering at Leading University in Sylhet,
            graduating in 2026 after starting in 2022.</p>
            <ul>
                <li>Focus on web development and software engineering</li>
                <li>Coursework spanning data structures, databases, and networked systems</li>
                <li>Treated as a foundation, not a finish line — I've kept learning past graduation</li>
            </ul>
        `
    },
    skills: {
        path: "~/roni/about/stack.md",
        icon: "🛠️",
        title: "Technical Skills",
        body: `
            <p>The stack I reach for most, grouped by where it sits:</p>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Languages</p>
            <div class="tag-row" style="margin-bottom:16px;">
                <span class="tag">TypeScript</span><span class="tag">JavaScript (ES6+)</span>
                <span class="tag">Python</span><span class="tag">HTML5</span><span class="tag">CSS3</span>
            </div>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Frontend</p>
            <div class="tag-row" style="margin-bottom:16px;">
                <span class="tag">Next.js 16</span><span class="tag">React.js</span>
                <span class="tag">Tailwind CSS 4</span><span class="tag">Figma</span>
            </div>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Backend</p>
            <div class="tag-row" style="margin-bottom:16px;">
                <span class="tag">Node.js</span><span class="tag">Express.js</span>
                <span class="tag">REST APIs</span><span class="tag">Server Actions</span>
            </div>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Databases</p>
            <div class="tag-row" style="margin-bottom:16px;">
                <span class="tag">MongoDB</span><span class="tag">Mongoose 8</span>
            </div>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Authentication & Security</p>
            <div class="tag-row" style="margin-bottom:16px;">
                <span class="tag">RBAC</span><span class="tag">JWT</span><span class="tag">bcryptjs</span>
            </div>
            <p style="color:var(--ink);font-weight:600;margin-bottom:6px;">Tools & DevOps</p>
            <div class="tag-row">
                <span class="tag">Git</span><span class="tag">GitHub Actions</span>
                <span class="tag">PM2</span><span class="tag">npm</span>
            </div>
        `
    },
    approach: {
        path: "~/roni/about/approach.md",
        icon: "🎯",
        title: "What I Do",
        body: `
            <p>I specialize in building complete full-stack web applications — not just the visible
            half. That means thinking about scalable architecture and isolated databases as early as
            I think about layout and UI.</p>
            <p>In practice, that looks like:</p>
            <ul>
                <li>Designing data models before the first screen gets built</li>
                <li>Keeping the UI clean and the interaction intuitive, not just decorated</li>
                <li>Building with room to grow — features and users included</li>
            </ul>
        `
    },
    interests: {
        path: "~/roni/about/interests.md",
        icon: "🌟",
        title: "Interests",
        body: `
            <p>Outside of shipping features, three things keep pulling my attention:</p>
            <ul>
                <li><strong style="color:var(--ink)">Web performance</strong> — making things feel instant, not just work correctly</li>
                <li><strong style="color:var(--ink)">Cloud infrastructure</strong> — how systems stay up when the traffic doesn't cooperate</li>
                <li><strong style="color:var(--ink)">Computer graphics</strong> — the math behind anything that renders on a screen</li>
            </ul>
        `
    },
    stats: {
        path: "~/roni/about/stats.md",
        icon: "📊",
        title: "Quick Stats",
        body: `
            <p>A quick snapshot of where things stand:</p>
            <ul>
                <li><strong style="color:var(--ink)">1+ years</strong> of professional experience, starting Jun 2025 at Sitelar</li>
                <li><strong style="color:var(--ink)">10+ projects</strong> completed, including two built for real communities</li>
                <li><strong style="color:var(--ink)">Reliability-focused</strong> — code that has to work is worth more than code that looks clever</li>
            </ul>
        `
    }
};

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMobile.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// ==================== ABOUT MODAL ====================
const overlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalPath = document.getElementById('modalPath');
const modalClose = document.getElementById('modalClose');
let lastFocused = null;

function openModal(key) {
    const data = aboutDetails[key];
    if (!data) return;

    modalPath.textContent = data.path;
    modalBody.innerHTML = `
        <span class="icon">${data.icon}</span>
        <h3 id="modalTitle">${data.title}</h3>
        ${data.body}
    `;

    lastFocused = document.activeElement;
    overlay.classList.add('open');
    document.body.classList.add('modal-locked');
    modalClose.focus();
}

function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-locked');
    if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.about-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
});

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

// ==================== FORM SUBMISSION ====================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('[name="name"]').value;
        const email = this.querySelector('[name="email"]').value;
        const subject = this.querySelector('[name="subject"]').value || 'New Portfolio Inquiry';
        const message = this.querySelector('[name="message"]').value;

        const myEmail = "ronidasroni22@gmail.com";
        const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
        setTimeout(() => this.reset(), 1000);
    });
}

// ==================== AUTO-UPDATE COPYRIGHT YEAR ====================
const yearElement = document.getElementById('current-year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%c Welcome to Roni Das Portfolio! ', 'background: #e8b45c; color: #17140a; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;');