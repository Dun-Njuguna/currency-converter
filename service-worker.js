const staticcacheName = 'v3'; 

// Default files to always cache
let cacheFiles = [
	'./',
	'./home.html',
	'./convert.js',
	'./home.css',
	
]

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

    	// Open the cache
	    caches.open(staticcacheName).then(function(cache) {

	    	// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end e.waitUntil
})

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.filter(function(cacheName) {

				return cacheName.startsWith('v') && cacheName !=staticcacheName;}).map(function(cacheName){
				return cache.delete(cacheName);
			})
												 
			);
		})
	); // end e.waitUntil

});


