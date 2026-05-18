const VERSION = 'v1.0.0';
const CACHE_NAME = 'app-cache-' + VERSION;
const PRECACHE_ASSETS = ['/', '/index.html','/admin.html','/config.js', '/manifest.json', '/pwa-core.js', '/icon-1000.png', '/icon-512.png', '/icon-192.png'];
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (event) => { if (event.request.method !== 'GET') return; event.respondWith(fetch(event.request).then(res => { if (res.ok) { const clone = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)); } return res; }).catch(() => caches.match(event.request).then(cached => cached || caches.match('/index.html')))); });