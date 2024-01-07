import React from 'react';
import { useState } from 'react';
import '../delete/Delete.sass';
import * as Firebase from '../../services/CrudFirebase';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";

const Delete = () => {
    const [values, setValues] = useState({});// as chaves para representar um objeto
  
    const handleValues = (e) => {
  
      const { name, value } = e.target;
      setValues({
        [name]: value
      })
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!values.code) {
        alert('Por favor, preencha o código do item a ser deletado.');
        return;
      }
      try {
        // Pega dados
        const products = await Firebase.getAllProducts();
      
        // Encontra o ID do produto com base no código
        const productToDelete = products.find(product => product.code === values.code);

        // Chama a função de exclusão
        const productId = await Firebase.deleteProduct(productToDelete.id);
  
        // Limpa os valores após a exclusão bem-sucedida
        setValues({
          code: ''
        });
        alert('Deletado com sucesso.');

      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    };
  return (
    <div className="delete-container">
      <div className="title-container">
        <Link to = '/' > <IoCaretBackCircle className='back-button'/> </Link>
        <h3 className='delete-title'>Products Menu</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className='delete-field'>
          <label className="field-description">Insert product code:</label>
            <input className = "field" type="text"
              required
              name='code'
              onChange={handleValues}
              value={values.code}
              />
        </div>

        <button type="submit" // ao utilizar type ="submit" no botão, o formulário é enviado com enter
              className="button" 
              onClick={handleSubmit}> 
            <span className="lable">Enviar</span>
        </button>
      </form>
    </div>
  )
}

export default Delete