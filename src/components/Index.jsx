import { useState } from "react";
import { Link } from "react-router-dom";
import { useBearStore } from "../services/store";

export function Index() {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const listEmployee = useBearStore((state) => state.listEmployee);
  const addEmployee = useBearStore((state) => state.addEmployee);

  const saveEmployee = () => {
    //Sauvegarde de l'employee dans store Zustand
    addEmployee(employee);
    console.log("Sauvegarde de l'employee dans store");
    console.log(listEmployee);
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                firstname: e.target.value,
              }))
            }
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                lastname: e.target.value,
              }))
            }
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="text"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                dateOfBirth: e.target.value,
              }))
            }
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="text"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                startDate: e.target.value,
              }))
            }
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  street: e.target.value,
                }))
              }
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  city: e.target.value,
                }))
              }
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  state: e.target.value,
                }))
              }
            ></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  zipCode: e.target.value,
                }))
              }
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                department: e.target.value,
              }))
            }
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={() => saveEmployee()}>Save</button>
        <button onClick={() => console.log(listEmployee)}>Test log</button>
      </div>
    </main>
  );
}
