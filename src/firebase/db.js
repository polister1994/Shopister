import { getFirestore, collection, getDocs, query, where, getDoc, doc} from 'firebase/firestore';
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const prods = []

    querySnapshot.forEach((doc)=> {
        
        prods.push(doc.data()) 
    })

    setItems(prods)

}
export const getProductsByCategory = async (category, setItems) => {
    const q = query(collection(db, "products"), where ("category", "==", category))
    const prods = []
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        prods.push(doc.data()) 
    })

    setItems(prods)
}

export const getProd = async (id, setItem) =>{

    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
    setItem(docSnap.data())
    } else {

    console.log("No such document!")
    }
}