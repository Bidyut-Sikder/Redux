import React, {useEffect, useRef, useState} from "react";
import {
  StudentsDataById,
  createStudentsData,
  updateStudentsById,
} from "../apiRequests/ApiServices";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

//style={{width: "400px", margin: "auto"}}
const RegistrationForm = () => {
  const navigate = useNavigate();
  let firstName,
    lastName,
    gender,
    dateOfBirth,
    nationality,
    address,
    email,
    phone,
    admissionDate,
    courses = useRef();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
  });
  const [formValue, setFormValue] = useState([]);

  const onchangeHandler = (key, value) => {
    setForm((formValue) => ({
      ...formValue,
      [key]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");

      const res = await StudentsDataById(id);
      if (res) {
        setForm(res);
      }
    })();
  }, []);

  const submitData = async (id) => {
    if (id !== undefined) {
      const res = await updateStudentsById(id, form);

      if (res) {
        toast.success("Student updated successfully");
        navigate("/");
      } else {
        toast.error("Something wrong happen.");
      }

      ////////
    } else {
      const res = await createStudentsData(form);
      if (res) {
        toast.success("Profile created successfully");
      } else {
        toast.error("Something wrong happen.");
      }
    }
  };
  //birth date
  const bmonth =
    new Date(form.dateOfBirth).getMonth() + 1 >= 10
      ? new Date(form.dateOfBirth).getMonth() + 1
      : `0${new Date(form.dateOfBirth).getMonth() + 1}`;
  const bday =
    new Date(form.dateOfBirth).getDate() >= 10
      ? new Date(form.dateOfBirth).getDate()
      : `0${new Date(form.dateOfBirth).getDate()}`;
  const byear = new Date(form.dateOfBirth).getFullYear();
  const birthDate = byear + "-" + bmonth + "-" + bday;

  //addmission date
  const amonth =
    new Date(form.admissionDate).getMonth() + 1 >= 10
      ? new Date(form.admissionDate).getMonth() + 1
      : `0${new Date(form.admissionDate).getMonth() + 1}`;
  const aday =
    new Date(form.admissionDate).getDate() >= 10
      ? new Date(form.admissionDate).getDate()
      : `0${new Date(form.admissionDate).getDate()}`;
  const ayear = new Date(form.admissionDate).getFullYear();
  const addmDate = ayear + "-" + amonth + "-" + aday;

  return (
    <div>
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">FirstName</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => onchangeHandler("firstName", e.target.value)}
                ref={(e) => (firstName = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Email</label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => onchangeHandler("email", e.target.value)}
                ref={(e) => (email = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Gender</label>
              <input
                type="text"
                value={form.gender}
                onChange={(e) => onchangeHandler("gender", e.target.value)}
                ref={(e) => (gender = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Date Of Birth</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => onchangeHandler("dateOfBirth", e.target.value)}
                ref={(e) => (dateOfBirth = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Nationality</label>
              <input
                type="text"
                value={form.nationality}
                onChange={(e) => onchangeHandler("nationality", e.target.value)}
                ref={(e) => (nationality = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">LastNamel</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => onchangeHandler("lastName", e.target.value)}
                ref={(e) => (lastName = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Phone</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => onchangeHandler("phone", e.target.value)}
                ref={(e) => (phone = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">AdmissionDate</label>
              <input
                type="date"
                value={addmDate}
                onChange={(e) =>
                  onchangeHandler("admissionDate", e.target.value)
                }
                ref={(e) => (admissionDate = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => onchangeHandler("address", e.target.value)}
                ref={(e) => (address = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Courses</label>
              <input
                type="text"
                value={form.courses}
                onChange={(e) => onchangeHandler("courses", e.target.value)}
                ref={(e) => (courses = e)}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <button
                className="form-control  btn btn-primary mt-4"
                onClick={() => submitData(form._id)}
              >
                {" "}
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
