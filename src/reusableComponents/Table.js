import React from 'react'

const Table = ({ columns, data }) => {
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
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((col) => {
                return <td key={col}>{row[col]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table