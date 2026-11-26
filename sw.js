// 청원 배추 사업 길잡이: 앱 설치용. 저장해 두지 않고 늘 새 내용을 받아 온다.
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){});
