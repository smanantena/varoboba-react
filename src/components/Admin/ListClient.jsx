import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import { NavLink } from 'react-router-dom';

function ListClient() {
    const [ userData ,setUserData ] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:8000/api/users");
            console.log(result.data.results);
            setUserData(result.data.results);
            
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id) => {
      console.log(id);
      await axios.delete("http://localhost:8000/api/usersdelete/" + id);
      const newUserData = userData.filter((item) => {
        return item.id !== id;
      });
      setUserData(newUserData);
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
        {
                  userData.map((user, i) => {
                   return (
                     <tr key={i}>
                       <td>{user.id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.sexe}</td>
                       <td>
                               <NavLink
                                   onClick={() => handleDelete(user.id)}>
                           Delete
                         </NavLink>
                       </td>
                     </tr>
                   );
              })
        }
     
      </tbody>
    </Table>
  );
  
}

export default ListClient