# pwa
example required files in pwa

To include the necessary files for a Progressive Web App, add the following:

In the `<head>` section of your HTML:

```html
<link rel="manifest" href="/GooPWA/manifest.json">
end

```js
<!-- Register Service Worker -->
  if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
          navigator.serviceWorker.register('/GooPWA/js/service-worker.js').then(function (registration) {
              console.log('Service Worker registration successful:', registration);
          }).catch(function (error) {
              console.log('Service Worker registration failed:', error);
          });
      });
  }
