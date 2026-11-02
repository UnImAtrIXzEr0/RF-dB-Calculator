/*
  RF dB calculator 1.1.3, service worker for offline use of the web version
  Copyright (c) 2026 UnImAtrIXzEr0, licensed under CC BY-ND 4.0, https://creativecommons.org/licenses/by-nd/4.0/
  Caches only the application files of this site (same origin). It makes no other requests.
*/
'use strict';
const CACHE = 'rfdb-1.1.3';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => { // remove caches of older versions
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('rfdb-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') { // page: network first (updates), cache when offline
    e.respondWith(fetch(req).then(res => {
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req))); // icons and manifest: cache first
});
