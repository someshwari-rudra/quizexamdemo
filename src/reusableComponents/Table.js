import React from "react";
import ButtonMapping from "./ButtonMapping";

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
                return Array.isArray(row[col]) ? (
                  <td className="ul" key={`${index}_${col}`}>
                    {Array.isArray(row[col]) &&
                      row[col]?.map((item, i) => {
                        return (
                          <li key={i}>
                            {typeof item === "object"
                              ? `Score: ${item["score"]}/7 \n Rank: ${item["rank"]}`
                              : item}
                          </li>
                        );
                      })}
                  </td>
                ) : (
                  <td key={col}>{row[col]}</td>
                );
              })}
              {
                <td>
                  <ButtonMapping
                    buttonAttributes={buttonAttributes}
                    id={row._id}
                    rowindex={index}
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

export default Table;
