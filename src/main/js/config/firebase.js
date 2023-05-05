const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyDefzSC_RK5I201FgCn_Ov2xAiU2fIuDCA",
    authDomain: "comu-d2ea0.firebaseapp.com",
    projectId: "comu-d2ea0",
    storageBucket: "comu-d2ea0.appspot.com",
    messagingSenderId: "560395082740",
    appId: "1:560395082740:web:78e695f4bea24d455b37a1"
  };
  
  
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

async function getExamples() {
    const exampleCol = collection(db, 'example');
    const exampleSnapshot = await getDocs(exampleCol);
    const exampleList = exampleSnapshot.docs.map(doc => doc.data());
    return exampleList;
  }

export { getExamples };
