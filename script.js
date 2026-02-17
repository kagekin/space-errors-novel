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
    const sc = document.getElementById('superchat-btn');
    if (sc) sc.addEventListener('click', e => {
        e.stopPropagation();
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                splat(
                    window.innerWidth / 2 + (Math.random() - 0.5) * 500,
                    window.innerHeight / 2 + (Math.random() - 0.5) * 500
                );
            }, i * 25);
        }
        const lines = [
            '💸 ¥10,000 スパチャ飛びました！(嘘)',
            '🍌 バナナ3本分！ナナセ「食費に回して…」',
            '🤖 キャッシュ「ありがとー！…課金してないけどな」',
            '🐱 マギー「ニャハハ♪ もっとちょうだい！」',
            '👹 ラキ「気合いだけはSSSランクだ！」',
            '🛸 コタツ号「暖房費不足…省エネモードに移行します」'
        ];
        alert(lines[Math.floor(Math.random() * lines.length)]);
    });

    // ---------------------------------------------------------
    // 7. Share
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
