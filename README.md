# Progressive Web App (PWA) Example

## Required Files

To create a functional Progressive Web App (PWA), you'll need to include the following key files:

### 1. Manifest File
Add the manifest link in the `<head>` section of your HTML:

```html
<link rel="manifest" href="/manifest.json">
```

### 2. Service Worker Registration
Include the following JavaScript to register the service worker:

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/js/service-worker.js')
      .then(function (registration) {
        console.log('Service Worker registration successful:', registration);
      })
      .catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
  });
}
```

## File Structure
```
your-pwa-project/
│
├── index.html
├── manifest.json
└── js/
    └── service-worker.js
```

## Key Features
- Offline functionality
- App-like interface
- Service worker caching
- Installable web application

## Setup Instructions
1. Create `manifest.json` with app metadata
2. Implement `service-worker.js` for caching and offline support
3. Add service worker registration script to your HTML
4. Test and validate PWA functionality
