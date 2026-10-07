import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Public web config — safe to ship; access is controlled by Firebase rules.
const app = initializeApp({
  apiKey: 'AIzaSyAl2nSuaDw-QOca6n-PTf73xLuuXzBwZPQ',
  authDomain: 'lunchpad-2ceb3.firebaseapp.com',
  projectId: 'lunchpad-2ceb3',
  storageBucket: 'lunchpad-2ceb3.firebasestorage.app',
  messagingSenderId: '1040785514898',
  appId: '1:1040785514898:web:55bbad5a6df7691d94a14b',
  measurementId: 'G-HDSSKB0FEE',
})

isSupported().then((ok) => ok && getAnalytics(app))
