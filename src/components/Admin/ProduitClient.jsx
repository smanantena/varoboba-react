import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ProduitClient() {
    const [prodData, setProdData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8000/api/users");
        console.log(result.data.results);
        setProdData(result.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Email</th>
          <th>Sexe</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {prodData.map((prod, i) => {
          return (
            <tr key={i}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.email}</td>
              <td>{prod.sexe}</td>
              <td>
                <NavLink
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                  >DELETE
                </NavLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ProduitClient