import React from 'react';

const ListadoSocios = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido Nombre del Socio</th>
            <th>Nro del Socio</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdSocio}>
              <td>{item.IdSocio}</td>
              <td>{item.ApeNomSocio}</td>
              <td>{item.NroSocio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoSocios;
