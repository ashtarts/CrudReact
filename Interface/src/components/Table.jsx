import React from 'react'
import '../styles/Table.sass';
import { useState, useEffect } from 'react';

const Table = ({getAllProducts}) => {

  // Estado para armazenar dados 
  const [products, setProducts] = useState([]);

    // Função para coletar dados
    const displayProducts = async () => {
      try {
        // Obter a lista de produtos
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao exibir produtos:', error);
      }
    };
  
    useEffect(() => {
      // Chame a função 
      displayProducts();
    }, []);

  return (
    <table>
      {products?.map((product, index) => ( // a interrogação garante que não é exibido se 'itens' for undefined
        <tr key = {index}>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </table>
  )
}

export default Table