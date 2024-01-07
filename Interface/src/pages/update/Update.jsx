import React from 'react';
import '../update/Update.sass';
import { useState } from 'react';
import '../create/Create.sass';
import * as Firebase from '../../services/CrudFirebase';

const Update = () => {
  const [productCode, setProductCode] = useState(); // Estado para armazenar código que identificará o produto a ser atualizado
  
  const [values, setValues] = useState({}); // Estado para armazenar novos dados

  const [exibirForms, setExibirforms] = useState(true); // Estado para mostrar forms que pede nos dados ao usuário
  
  const handleCode = (e) => {
    e.preventDefault();
    console.log(productCode);
    setExibirforms(false);
  }

  const handleValues = (e) => {
    const { name, value } = e.target;
    
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Pega dados
        const products = await Firebase.getAllProducts();

        // Encontra o ID do produto com base no código
        const productToUpdate = products.find(product => product.code === productCode);

        if (!productToUpdate) {
          console.error('Produto não encontrado para atualização.');
          return;
        }

        // Chama a função de atualização
        const newProduct = await Firebase.updateProduct(productToUpdate.id, values);

        // Limpa os valores após a atualização bem-sucedida
        setValues({
          name: '',
          code: '',
          description: '',
          price: ''
        });

    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
    }
  };

return (
  <div className="update-container">
    <h3 className='update-title'>Products Menu</h3>
    { exibirForms ? (
        <form onSubmit={handleCode}>
        <div className='update-field'>
          <label className="field-description">Insert product code:</label>
            <input className = "field" type="text"
              required
              name='code'
              onChange={(e) => setProductCode(e.target.value)}
              />
        </div>
  
        <button type="submit" // ao utilizar type ="submit" no botão, o formulário é enviado com enter
              className="button" 
              onClick={handleCode}> 
            <span className="lable">Enviar</span>
        </button>
      </form>
      ) : (
      <div className="create-container">
      <div className="fields">

        <form onSubmit={handleSubmit}>
          <div className='create-field'>
            <label className="field-description">Product name:</label>
            <input className = "field" type="text" 
            required
            name='name'
            onChange={handleValues}
            value={values.name}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product code:</label>
            <input className = "field" type="text" 
            required
            name='code'
            onChange={handleValues}
            value={values.code}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product description:</label>
            <input className = "field" type="text"
            required
            name='description'
            onChange={handleValues}
            value={values.description}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product price:</label>
            <input className = "field" type="text"
            required
            name='price'
            onChange={handleValues}
            value={values.price}
            />
            
          </div>

          <button type="submit" // ao utilizar type ="submit" no botão, o formulário é enviado com enter
                className="button" 
                onClick={handleSubmit}> 
              <span className="lable">Enviar</span>
          </button>
        </form>
      </div>

    </div>
      )}
  </div>
  
)
}

export default Update