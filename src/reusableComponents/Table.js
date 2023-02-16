import React from 'react'
import ButtonMapping from './ButtonMapping';

const Table = ({ columns, data, buttonAttributes }) => {
  return (
    <table className="table table-bordered table-responsive">
      <thead>
        <tr>
          {columns.map((head) => {
            return (
              <th scope="col" key={head}>
                {head}
              </th>
            );
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((col) => {
                return <td key={col}>{row[col]}</td>;
              })}
              {
                <td>
                  <ButtonMapping
                    buttonAttributes={buttonAttributes}
                    id={row._id}
                  />
                </td>
              }
            </tr>
          );
        })}
        
      </tbody>
    </table>
  );
};

export default Table