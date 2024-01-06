import React from 'react';
import '../update/Update.sass';
import { useState } from 'react';
import * as Firebase from '../../services/CrudFirebase';

const Update = () => {
  const [values, setValues] = useState({});// as chaves para representar um objeto

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Pega dados
      const products = await Firebase.getAllProducts();
    
      // Encontra o ID do produto com base no código
      const productToUpdate = products.find(product => product.code === values.code);

      // Chama a função de atualização
      const productId = await Firebase.updateProduct(productToUpdate, INSERIR VALORES NOVOS AQUI);

      // Limpa os valores após a atualização bem-sucedida
      setValues({
        code: ''
      });
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };
return (
  <div className="update-container">
    <h3 className='update-title'>Products Menu</h3>
    <form onSubmit={handleSubmit}>
      <div className='update-field'>
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

export default Update