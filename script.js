document.addEventListener('DOMContentLoaded', () => {

    const COLORS = ['#F280DF', '#03A678', '#056CF2', '#E7F294', '#F2A594', '#D91438', '#038C73'];

    // ---------------------------------------------------------
    // 1. Star Particles
    // ---------------------------------------------------------
    const starContainer = document.getElementById('stars');
    if (starContainer) {
        for (let i = 0; i < 80; i++) {
            const s = document.createElement('span');
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = (Math.random() * 3) + 's';
            s.style.animationDuration = (2 + Math.random() * 3) + 's';
            const size = Math.random() * 2 + 1;
            s.style.width = size + 'px';
            s.style.height = size + 'px';
            starContainer.appendChild(s);
        }
    }

    // ---------------------------------------------------------
    // 2. News Ticker
    // ---------------------------------------------------------
    fetch('public_website/updates.json')
        .then(r => r.ok ? r : fetch('updates.json'))
        .then(r => r.json())
        .then(data => {
            const el = document.getElementById('news-ticker');
            let t = '';
            data.latest_news.forEach(n => { t += ` ⚡ ${n.date}: ${n.title} `; });
            el.textContent = t.repeat(12);

            // Also populate news list
            const list = document.getElementById('news-list');
            if (list && data.latest_news.length) {
                list.innerHTML = '';
                data.latest_news.forEach(n => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="news-date">${n.date}</span><span class="news-title">${n.title}</span>`;
                    list.appendChild(li);
                });
            }
        })
        .catch(() => { });

    // ---------------------------------------------------------
    // 3. Character Selector
    // ---------------------------------------------------------
    const tabs = document.querySelectorAll('.char-tab');
    const details = document.querySelectorAll('.char-detail');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            details.forEach(d => {
                d.classList.remove('active');
                if (d.dataset.char === target) {
                    d.classList.add('active');
                }
            });
        });
    });

    // ---------------------------------------------------------
    // 4. Side Nav Active State
    // ---------------------------------------------------------
    const navLinks = document.querySelectorAll('.side-nav a');
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));

    // ---------------------------------------------------------
    // 5. Ink Splatter
    // ---------------------------------------------------------
    document.addEventListener('mousedown', e => {
        if (e.target.closest('button, a, .share-btn, .char-tab, .platform-link, .footer-share')) return;
        splat(e.clientX, e.clientY);
    });

    function splat(x, y) {
        const d = document.createElement('div');
        d.className = 'splatter';
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        d.style.backgroundColor = c;
        d.style.left = (x - 15) + 'px';
        d.style.top = (y - 15) + 'px';
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 500);
    }

    // ---------------------------------------------------------
    // 6. Superchat
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // 6. Mode Toggle (Universe <-> Metaverse)
    // ---------------------------------------------------------
    const toggleBtn = document.getElementById('mode-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('metaverse');
            const isMeta = document.body.classList.contains('metaverse');

            // Text update
            toggleBtn.textContent = isMeta ? '💻 メタバース' : '🌌 宇宙モード';

            // Effect
            toggleBtn.style.transform = 'scale(0.9)';
            setTimeout(() => toggleBtn.style.transform = '', 100);

            // Glitch flash effect
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.inset = '0';
            flash.style.background = isMeta ? '#fff' : '#000';
            flash.style.zIndex = '9999';
            flash.style.opacity = '0.8';
            document.body.appendChild(flash);

            setTimeout(() => {
                flash.style.opacity = '0';
                setTimeout(() => flash.remove(), 200);
            }, 50);

            // Splatter burst
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    splat(
                        window.innerWidth / 2 + (Math.random() - 0.5) * 800,
                        window.innerHeight / 2 + (Math.random() - 0.5) * 800
                    );
                }, i * 10);
            }

            // Start Niconico comments if Metaverse mode is ON
            if (isMeta) {
                startNicoComments();
            } else {
                stopNicoComments();
            }
        });
    }

    // ---------------------------------------------------------
    // 7. Niconico Comments
    // ---------------------------------------------------------
    let nicoInterval;
    const COMMENTS = [
        'ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!',
        'wwwwwwwwwwww',
        'SPACE ERRORS!!',
        'MEGATEN LOGIN...',
        'ERROR 42??',
        'スパチャ投げさせろ',
        '888888888888',
        '神神神神神',
        '初見です',
        'バナナ！？',
        '🌌🚀👾',
        '💾 LOADING...',
        '草',
        'かわヨ',
        '！？！？！？'
    ];

    function startNicoComments() {
        if (nicoInterval) clearInterval(nicoInterval);
        nicoInterval = setInterval(() => {
            if (!document.body.classList.contains('metaverse')) return;
            const div = document.createElement('div');
            div.className = 'nico-comment';
            div.textContent = COMMENTS[Math.floor(Math.random() * COMMENTS.length)];
            div.style.top = Math.random() * 80 + '%';
            div.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
            // Random color for cyber feel
            const colors = ['#00ff00', '#ff00ff', '#00ffff', '#ffff00', '#ffffff'];
            div.style.color = colors[Math.floor(Math.random() * colors.length)];

            document.body.appendChild(div);

            // Remove after animation
            setTimeout(() => div.remove(), 6000);
        }, 300); // New comment every 300ms
    }

    function stopNicoComments() {
        if (nicoInterval) clearInterval(nicoInterval);
        document.querySelectorAll('.nico-comment').forEach(e => e.remove());
    }

    // ---------------------------------------------------------
    // 8. Share
    // ---------------------------------------------------------
    window.shareTwitter = () => {
        const u = encodeURIComponent(location.href);
        const t = encodeURIComponent('バグったAITuberと銀河を旅しよう！🚀 銀河電脳スペース・エラーズ！ #SpaceErrors #MEGATEN');
        open(`https://twitter.com/intent/tweet?url=${u}&text=${t}`, '_blank');
    };
    window.shareLine = () => {
        open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(location.href)}`, '_blank');
    };
    window.copyLink = () => {
        navigator.clipboard.writeText(location.href)
            .then(() => alert('🔗 リンクをコピーしました！'))
            .catch(() => alert('コピーに失敗しました…'));
    };
});
