import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular-app-cae93", appId: "1:76009996755:web:092e53a3ad8c106a79af26", storageBucket: "angular-app-cae93.firebasestorage.app", apiKey: "AIzaSyDSzS7LFhA_im1KB923z0TG77y7CuMHH5E", authDomain: "angular-app-cae93.firebaseapp.com", messagingSenderId: "76009996755" })), provideStorage(() => getStorage())]
};
