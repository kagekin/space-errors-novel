document.addEventListener('DOMContentLoaded', () => {
    // Canvas Starfield
    const canvas = document.createElement('canvas');
    canvas.id = 'star-bg';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let width, height;
    const stars = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Star {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.z = Math.random() * width;
        }

        update() {
            this.z -= 2; // Speed
            if (this.z <= 0) {
                this.z = width;
                this.x = Math.random() * width;
                this.y = Math.random() * height;
            }
        }

        draw() {
            const x = (this.x - width / 2) * (width / this.z) + width / 2;
            const y = (this.y - height / 2) * (width / this.z) + height / 2;
            const size = (width / this.z); // Size based on depth

            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, size, size);
        }
    }

    for (let i = 0; i < 200; i++) {
        stars.push(new Star());
    }

    function animate() {
        ctx.fillStyle = '#050510';
        ctx.fillRect(0, 0, width, height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();

    // Fetch Updates
    fetch('public_website/updates.json')
        .then(response => {
            if (!response.ok) {
                 // Fallback if public_website/updates.json not found (dev env adjustment)
                 return fetch('updates.json');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            const ticker = document.getElementById('news-ticker-content');
            let newsText = "";
            data.latest_news.forEach(item => {
                newsText += `  ★ ${item.date}: ${item.title}  `;
            });
            // Repeat for smooth loop if short
            if (newsText.length < 50) newsText = newsText.repeat(5);
            ticker.textContent = newsText;
        })
        .catch(err => console.log('News fetch error:', err));
});
