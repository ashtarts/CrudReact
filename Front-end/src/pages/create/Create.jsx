import React from 'react';
import '../create/Create.sass';

const handleKeyPress = (event) => { /* para utilizar o enter como submit */
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
};

const Create = ({algumaFuncaoFutura}) => {
  return (
    <div className="create-container">
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      <h3 className='create-title'>Products Menu</h3>

      <div className="fields">

        <form onSubmit={algumaFuncaoFutura}>
          <div className='create-field'>
            <label className="field-description">Nome do produto:</label>
            <input className = "field" type="text" 
            required
            onKeyUp={handleKeyPress}
            />
          </div>
          <div className='create-field'>
            <label className="field-description">Código do produto:</label>
            <input className = "field" type="text" 
            required
            onKeyUp={handleKeyPress}/>
          </div>
          <div className='create-field'>
            <label className="field-description">Descrição do produto:</label>
            <input className = "field" type="text"
            required
            onKeyUp={handleKeyPress}/>
          </div>
          <div className='create-field'>
            <label className="field-description">Preço do produto:</label>
            <input className = "field" type="text"
            required
            onKeyUp={handleKeyPress}/>
          </div>
          <button className="button" onClick={algumaFuncaoFutura}>
              <span className="lable">Enviar</span>
          </button>
        </form>
      </div>

    </div>
  )
}

export default Create