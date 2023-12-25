import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from '../app/slice';
import Table from 'react-bootstrap/Table';


const DataTable = (props) => {
  const userData = useSelector((state) => state.user.data);
  const query = useSelector((state) => state.user.query);
  const filteredData = userData.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));

  const tabledata = filteredData.map((actor, index) => (
    <tr key={index}>
      <td>{actor.id}</td>
      <td>{actor.name}</td>
      <td>{actor.email}</td>
      <td>{actor.course}</td>
      <td>
        <div className="d-flex" style={{justifyContent:"center"}}>
        <Link to={`/edit/${actor.id}`} className="btn btn-primary mx-3">
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(actor.id)}
        >
          Delete
        </button>
        </div>
      </td>
      
    </tr>
  ));

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container mt-5">
      <div style={{borderRadius:"10px"}}>
        <Table striped responsive bordered variant={`${props.styleMode}`} >
          <thead className="table-p">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>{tabledata}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
