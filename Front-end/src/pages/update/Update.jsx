import React from 'react';
import '../update/Update.sass';

const handleKeyPress = (event) => { /* para utilizar o enter como submit */
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
};

const Update = (algumaFuncaoFutura) => {
  return (
    <div className="update-container">
      <h3 className='update-title'>Products Menu</h3>
      <form onSubmit={algumaFuncaoFutura}>
        <div className='update-field'>
          <label className="field-description">Informe o código do produto a ser deletado:</label>
          <input className = "field" type="text" 
          required
          onKeyUp={handleKeyPress}
          /> 
        </div>
        <button className="button" onClick={algumaFuncaoFutura}>
          <span className="lable">Enviar</span>
        </button>
      </form>
    </div>
  )
}

export default Update