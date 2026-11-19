// Service worker minimal : rend l'application installable, sans aucun cache.
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(function(){
      return new Response('<meta charset="utf-8"><body style="font-family:sans-serif;padding:24px"><h2>Hors connexion</h2><p>Reconnecte-toi à Internet pour utiliser le suivi mémoire.</p>',{headers:{'Content-Type':'text/html; charset=utf-8'}});
    }));
  }
});
