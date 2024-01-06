import React from 'react';
import { useState, useEffect } from 'react';
import '../create/Create.sass';

const Create = ({algumaFuncaoFutura}) => {
  const [values, setValues] = useState({});// as chaves para represntar um objeto

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação do envio dos dados
    console.log(values);
    setValues({
      name: '',
      code: '',
      description: '',
      price: ''
    });
  };
  return (
    <div className="create-container">
      <h3 className='create-title'>Products Menu</h3>

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
  )
}

export default Create