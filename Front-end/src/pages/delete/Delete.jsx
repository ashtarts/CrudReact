import React from 'react';
import '../delete/Delete.sass';

const handleKeyPress = (event) => { /* para utilizar o enter como submit */
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
};

const Delete = ({algumaFuncaoFutura}) => {
  return (
    <div className="delete-container">
      <h3 className='delete-title'>Products Menu</h3>
      <form onSubmit={algumaFuncaoFutura}>
        <div className='delete-field'>
          <label className="field-description">Informe o código do produto:</label>
          <input className = "field" type="text" 
          required
          onKeyUp={handleKeyPress}
          /> 
        </div>
        <button className="button" onClick={algumaFuncaoFutura}>
            <span className="lable">Deletar</span>
        </button>
      </form>
    </div>
  )
}

export default Delete