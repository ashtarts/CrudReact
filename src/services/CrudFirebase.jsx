// Importe o SDK do Firebase e as ferramentas necessárias
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Configure o Firebase com suas credenciais
const firebaseConfig ={
    apiKey: "AIzaSyA23OJlRe3Ba4ARGKziucLIFeBn-sg10lE",
    authDomain: "crud-react-df318.firebaseapp.com",
    projectId: "crud-react-df318",
    storageBucket: "crud-react-df318.appspot.com",
    messagingSenderId: "914623690543",
    appId: "1:914623690543:web:d52539f18d9787b96c13da",
    measurementId: "G-Q9HE89Q74S"
  };
  
// Referência ao Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collection2 = collection(db, "products");

// CREATE
const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection2, productData);
    console.log('Produto adicionado com sucesso! ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    return null;
  }
};

// READ
const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection2);
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;

  } catch (error) {
    console.error('Erro ao exibir produto:', error);
  }
};

// UPDATE
const updateProduct = async (productId, newData) => {
  try {
    const productRef = doc(collection2, productId);
    await updateDoc(productRef, newData);
    
    console.log('Produto atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
  }
};

// DELETE
const deleteProduct = async (productId) => {
  try {
    const productRef = doc(collection2, productId);
    await deleteDoc(productRef);
    
    console.log('Produto excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
  }
};

// Exporta as funções para uso em outros arquivos
export { getAllProducts, addProduct, updateProduct, deleteProduct };