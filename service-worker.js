// Service worker mínimo — necessário para o navegador permitir "instalar como app".
// Não faz cache agressivo: sempre busca a versão mais nova do painel na rede.

const CACHE_NAME = "devolucoes-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
