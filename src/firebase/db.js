import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    getDoc, 
    doc , 
    addDoc
} from 'firebase/firestore';
import { app } from "./config"
import Swal from 'sweetalert2';

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

export const createOrder = async (order) => {

    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        Swal.fire({
            title: "Gracias por tu compra!",
            text: `Tu ID de compra es: ${docRef.id}`,
            icon: "success"
        });
    } catch (e) {
        Swal.fire({
            title: "No se Pudo procesar la compra",
            text: `Error: ${e}`,
            icon: "error"
        });
    }

}