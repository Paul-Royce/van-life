import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc, 
    query, 
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDddNW8NAp6fHLAIRbSJXkZkFWG-75rdTY",
  authDomain: "vanlife-80fbd.firebaseapp.com",
  projectId: "vanlife-80fbd",
  storageBucket: "vanlife-80fbd.appspot.com",
  messagingSenderId: "752843252969",
  appId: "1:752843252969:web:b8b2a859744df92079fc78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapShot = await getDocs(vansCollectionRef)
    const dataArr = querySnapShot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
   
}

export async function getHostVans() {
   const q = query(vansCollectionRef, where("hostId", "==", "123"))
   const querySnapShot = await getDocs(q)
   const dataArr = querySnapShot.docs.map(doc => {
    return {
        ...doc.data(),
        id: doc.id
    }
   })
   return dataArr
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
