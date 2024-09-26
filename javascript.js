// Перехід на сторінку Instagram
    document.querySelector('img[src="image/logo/Instagram_icon.png"]').addEventListener('click', function() {
        window.location.href = 'https://www.instagram.com/darzbb/igsh=aHZ6N3I1aXB4Z2No&utm_source=qr';
    });

// Перехід на сторінку Telegram
    document.querySelector('img[src="image/logo/tg_logo.png"]').addEventListener('click', function() {
        window.location.href = 'https://t.me/darzbb';
    });

// Перехід на профіль GitHub
    document.querySelector('img[src="image/logo/github_logo.png"]').addEventListener('click', function() {
        window.location.href = 'https://github.com/darzbb';
    });

// Плавна прокрутка до наступного блоку
    document.querySelector('.header_btn').addEventListener('click', function() {
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    });
