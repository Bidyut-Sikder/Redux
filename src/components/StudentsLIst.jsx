import React, {useEffect, useState} from "react";

import toast, {Toaster, useToaster} from "react-hot-toast";
import {Link} from "react-router-dom";
import {

  StudentsDataList,
  deleteStudentsData,
} from "../apiRequests/ApiServices";

var myDate = new Date("0333-12-31T17:58:20.000Z");

const StudentsLIst = () => {
  const [list, setList] = useState([]);
  const [loding, setLoding] = useState(false);
  const [render, setRender] = useState(0);

  useEffect(() => {
    (async () => {
      setLoding(true);
      const data = await StudentsDataList();
      setList(data);
      setLoding(false);
    })();
  }, [render]);
  const removeStudent = async (id) => {
    setLoding(true);
    const res = await deleteStudentsData(id);
    setLoding(false);
    toast.success("deleted successfully.");
    setRender(id);
  };

  return (
    <>
      <div className="containers">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date Of Birth *</th>
                  <th scope="col">Nationality</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">AdmissionDate</th>
                  <th scope="col">Courses</th>
                  <th scope="col">Edit /Delete</th>
                </tr>
              </thead>
              <tbody>
                {list.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.firstName}</td>
                      <td>{element.lastName}</td>
                      <td>{element.gender}</td>
                      <td>
                        {new Date(element.dateOfBirth).toLocaleDateString()}
                      </td>
                      <td>{element.nationality}</td>
                      <td>{element.address}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>
                        {new Date(element.admissionDate).toLocaleDateString()}
                      </td>
                      <td>{element.courses}</td>
                      <td className="d-flex justify-content-between">
                        <Link className="btn btn-primary" to={"/registration?id="+element._id}>
                          Edit
                        </Link>
                        <button
                          onClick={() => removeStudent(element._id)}
                          className="btn btn-primary "
                          style={{marginLeft: "3px"}}
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Toaster />
      </div>
      {loding && <h1>Loading </h1>}
    </>
  );
};

export default StudentsLIst;
