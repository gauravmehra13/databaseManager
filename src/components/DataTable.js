import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../app/slice";
import Table from "react-bootstrap/Table";
import { setUsers } from "../app/slice";
import { fetchData } from "../app/apiService";

const DataTable = (props) => {
  const user = useSelector((state) => state.user.users);
  const query = useSelector((state) => state.user.query);
  const filteredData = user.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        // Check if data already exists in the Redux store
        if (!user.length) {
          const fetchedData = await fetchData();
          dispatch(setUsers(fetchedData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [dispatch, user]);

  const tabledata = filteredData.map((actor, index) => (
    <tr key={index}>
      <td>{actor.id}</td>
      <td>{actor.name}</td>
      <td>{actor.email}</td>
      <td>{actor.username}</td>
      <td>
        <div className="d-flex" style={{ justifyContent: "center" }}>
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

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container mt-5">
      <Table
        responsive
        striped
        bordered
        hover
        style={{ borderRadius: "10px" }}
        variant={`${props.styleMode}`}
      >
        <thead>
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
  );
};

export default DataTable;
