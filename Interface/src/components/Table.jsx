import React from 'react'
import '../styles/Table.sass';

const Table = ({itens}) => {
  return (
    <table>
      {itens?.map((item, index) => ( // a interrogação garante que não é exibido se 'itens' for undefined
        <tr key = {index}>
          <td>{item.code}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </table>
  )
}

export default Table