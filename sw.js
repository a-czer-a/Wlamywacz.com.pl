
const cacheVersion = 'cache';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion).then(cache =>
            cache.addAll([
            './',
            './js/jquery-3.2.1-min.js',
            './js/materialize.min.js',
            './js/script_materializeCSS.js',
            './js/blazy.js',
            './js/aos.js',
            './css/styles.css',
            './css/city.css',
            './css/materialize.min.css',
            './css/aos.css',
            './fonts/roboto/Roboto-Medium.woff',
            './fonts/roboto/Roboto-Medium.woff2',
            './fonts/roboto/Roboto-Regular.woff',
            './fonts/roboto/Roboto-Regular.woff2',
            './fonts/roboto/Roboto-Bold.woff',
            './fonts/roboto/Roboto-Bold.woff2',
            './fonts/roboto/Roboto-Light.woff',
            './fonts/roboto/Roboto-Light.woff2',
            './img/',
            './img/handtinytrans.gif',
            './img/background-for-mobile.jpg',
            './img/background-no-logo-big.jpg',
            './img/background.jpg',
            './img/logo-small.jpg',
            './img/lockers-red.jpeg',
            './img/lockers-red-cropped.jpeg',
            './img/webp/lockers-red-cropped.webp',
            './img/police-logo-white.png',
            './img/mockup.jpg',
            './index.html',
            './rybnik.html',
            './zory.html',
            './wodzislaw.html',
            './jastrzebie.html',
            './mikolow.html',
            './raciborz.html',
            './ruda.html',
            './katowice.html',
            './gliwice.html',
            ]))
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});