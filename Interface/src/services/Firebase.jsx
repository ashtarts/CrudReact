// Importe o SDK do Firebase e as ferramentas necessárias
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configure o Firebase com suas credenciais
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyA23OJlRe3Ba4ARGKziucLIFeBn-sg10lE",
    authDomain: "crud-react-df318.firebaseapp.com",
    projectId: "crud-react-df318",
    storageBucket: "crud-react-df318.appspot.com",
    messagingSenderId: "914623690543",
    appId: "1:914623690543:web:d52539f18d9787b96c13da",
    measurementId: "G-Q9HE89Q74S"
  });
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Referência ao Firestore
const db = firebase.firestore();


const addProduct = async (productData) => {
  try {
    await db.collection('products').add(productData);
    console.log('Produto adicionado com sucesso!');

  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
  }
};

const getAllProducts = async () => {
  try {
    const querySnapshot = await db.collection('products').get();

    // Converte em array de objetos
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;

  } catch (error) {
        console.error('Erro ao obter produtos:', error);
        return [];
  }
};


const updateProduct = async (productId, newData) => {
  try {
    await db.collection('products').doc(productId).update(newData);
    console.log('Produto atualizado com sucesso!');

  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
  }
};

const deleteProduct = async (productId) => {
  try {
    await db.collection('products').doc(productId).delete();
    console.log('Produto excluído com sucesso!');

  } catch (error) {
    console.error('Erro ao excluir produto:', error);
  }
};

// Exporta as funções para uso em outros arquivos
export { addProduct, getAllProducts, updateProduct, deleteProduct };
