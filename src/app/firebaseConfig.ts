import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByXpQrIPQ5ErmZMIzOyvJazXpWYBZ_2Ic",
  authDomain: "project-5-bcbde.firebaseapp.com",
  databaseURL: "https://project-5-bcbde-default-rtdb.firebaseio.com",
  projectId: "project-5-bcbde",
  storageBucket: "project-5-bcbde.appspot.com",
  messagingSenderId: "1007891668361",
  appId: "1:1007891668361:web:70796142429410048f9558"
};

// Khởi tạo 1 cái app
const app = initializeApp(firebaseConfig);

// Kết nối với database
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

// Export ra để ở đâu cần dùng thì nhúng vào
export { dbFirebase, authFirebase };
