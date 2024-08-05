const firebaseConfig = {
    apiKey: "AIzaSyDg42wy0xgw9hxGDD7q87PhWBw8AXh1aYI",
    authDomain: "blogg-app-7ed7f.firebaseapp.com",
    projectId: "blogg-app-7ed7f",
    storageBucket: "blogg-app-7ed7f.appspot.com",
    messagingSenderId: "793789811181",
    appId: "1:793789811181:web:bc8ee932dea2c932a5bfe4",
    measurementId: "G-MMNN7EG5KZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);